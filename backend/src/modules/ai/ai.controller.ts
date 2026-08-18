import { Request, Response } from "express"
import { analyzeResume } from "./ai.service"
import { generateInterviewPrep, saveAnswers, getAnswers } from "./ai.service"



export const analyzeResumeController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const { applicationId } = req.body

    if (!applicationId) {
      res.status(400).json({ error: "applicationId is required" })
      return
    }

    const result = await analyzeResume(user.id, applicationId)
    res.status(200).json({ analysis: result })
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}

export const interviewPrepController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const { applicationId } = req.body

    if (!applicationId) {
      res.status(400).json({ error: "applicationId is required" })
      return
    }

    const result = await generateInterviewPrep(user.id, applicationId)
    res.status(201).json({ interviewPrep: result })
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}

export const saveAnswersController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const { answers } = req.body

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      res.status(400).json({ error: "answers array is required" })
      return
    }

    const result = await saveAnswers(user.id, answers)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const getAnswersController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const appId = Array.isArray(req.params.appId) ? req.params.appId[0] : req.params.appId
    const interviews = await getAnswers(user.id, appId)
    res.status(200).json({ interviews })
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}