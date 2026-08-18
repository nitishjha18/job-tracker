import { geminiModel } from "../../config/gemini"
import prisma from "../../config/db"

export const analyzeResume = async (userId: string, applicationId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user?.resumeText) {
    throw new Error("Resume not found. Please upload your resume first.")
  }

  const application = await prisma.application.findFirst({
    where: { id: applicationId, userId }
  })

  if (!application) {
    throw new Error("Application not found.")
  }

  if (!application.jobDescription) {
    throw new Error("No job description found for this application.")
  }

  const prompt = `
You are an expert technical recruiter and career coach.

Compare the following resume against the job description and return a JSON response with exactly this structure:
{
  "matchScore": <number between 0 and 100>,
  "missingKeywords": <array of strings>,
  "suggestions": <array of strings>
}

matchScore: how well the resume matches the job description as a percentage.
missingKeywords: important keywords or skills in the job description that are missing from the resume.
suggestions: specific actionable suggestions to improve the resume for this role.

Return ONLY the JSON object. No explanation, no markdown, no extra text.

RESUME:
${user.resumeText}

JOB DESCRIPTION:
${application.jobDescription}
`

  const result = await geminiModel.generateContent(prompt)
  const text = result.response.text()

  const clean = text.replace(/```json|```/g, "").trim()
  const parsed = JSON.parse(clean)

  return parsed
}

export const generateInterviewPrep = async (userId: string, applicationId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  const application = await prisma.application.findFirst({
    where: { id: applicationId, userId }
  })

  if (!application) {
    throw new Error("Application not found.")
  }

  if (!application.jobDescription) {
    throw new Error("No job description found for this application.")
  }

  const prompt = `
You are an expert technical interviewer.

Generate 8 interview questions for the following job description.
The candidate is a ${user?.experienceLevel || "fresher"} applying for a ${user?.targetRole || "software"} role.

Return ONLY a JSON array of strings. No explanation, no markdown, no extra text.
Example: ["Question 1", "Question 2", ...]

JOB DESCRIPTION:
${application.jobDescription}
`

  const result = await geminiModel.generateContent(prompt)
  const text = result.response.text()
  const clean = text.replace(/```json|```/g, "").trim()
  const questions: string[] = JSON.parse(clean)

const interview = await prisma.aiInterview.create({
  data: {
    applicationId
  }
})

  const questionRecords = await Promise.all(
    questions.map((question, index) =>
      prisma.aiInterviewQuestion.create({
        data: {
          aiInterviewId: interview.id,
          question,
          questionNumber: index + 1
        }
      })
    )
  )

  return {
    interviewId: interview.id,
    questions: questionRecords
  }
}

export const saveAnswers = async (
  userId: string,
  answers: { questionId: string; answer: string }[]
) => {
  const updatedQuestions = await Promise.all(
    answers.map(({ questionId, answer }) =>
      prisma.aiInterviewQuestion.updateMany({
        where: {
          id: questionId,
          aiInterview: {
            application: {
              userId
            }
          }
        },
        data: {
          userAnswer: answer
        }
      })
    )
  )

  return { saved: updatedQuestions.length }
}

export const getAnswers = async (userId: string, appId: string) => {
  const application = await prisma.application.findFirst({
    where: { id: appId, userId }
  })

  if (!application) {
    throw new Error("Application not found.")
  }

  const interviews = await prisma.aiInterview.findMany({
    where: { applicationId: appId },
    include: {
      questions: {
        orderBy: { questionNumber: "asc" }
      }
    },
    orderBy: { createdAt: "desc" }
  })

  return interviews
}