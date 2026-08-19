import prisma from "../../config/db"
import { ApplicationStatus } from "@prisma/client"

export const getDashboardStats = async (userId: string) => {
  const applications = await prisma.application.findMany({
    where: { userId }
  })

  const total = applications.length

  if (total === 0) {
    return {
      totalApplications: 0,
      responseRate: 0,
      rejectionRate: 0,
      bestSource: null,
      staleApplications: 0
    }
  }

  const responded = applications.filter(
    (app) => app.status !== ApplicationStatus.APPLIED
  ).length

  const rejected = applications.filter(
    (app) => app.status === ApplicationStatus.REJECTED
  ).length

  const responseRate = Math.round((responded / total) * 100)
  const rejectionRate = Math.round((rejected / total) * 100)

  const fourteenDaysAgo = new Date()
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)

  const staleApplications = applications.filter(
    (app) =>
      app.status === ApplicationStatus.APPLIED &&
      new Date(app.dateApplied) < fourteenDaysAgo
  ).length

  const sourceMap: Record<string, number> = {}
  applications
    .filter((app) => app.status !== ApplicationStatus.APPLIED)
    .forEach((app) => {
      sourceMap[app.source] = (sourceMap[app.source] || 0) + 1
    })

  const bestSource =
    Object.keys(sourceMap).length > 0
      ? Object.entries(sourceMap).sort((a, b) => b[1] - a[1])[0][0]
      : null

  return {
    totalApplications: total,
    responseRate,
    rejectionRate,
    bestSource,
    staleApplications
  }
}