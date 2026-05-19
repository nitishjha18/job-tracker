import { Request, Response } from "express";
import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
} from "./applications.service";

type AuthenticatedRequest = Request & {
  user?: {
    id: string;
  };
};

const getLocalUserId = (req: AuthenticatedRequest): string | null => {
  return req.user?.id ?? null;
};

export const createApplicationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = getLocalUserId(req as AuthenticatedRequest);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { companyName, role, jobDescription, source, notes, appliedAt } =
      req.body;

    if (!companyName || !role || !source) {
      res.status(400).json({
        error: "companyName, role, and source are required",
      });
      return;
    }

    const application = await createApplication(userId, {
      companyName,
      role,
      jobDescription,
      source,
      notes,
      appliedAt: appliedAt ? new Date(appliedAt) : undefined,
    });

    res.status(201).json({ application });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const getAllApplicationsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = getLocalUserId(req as AuthenticatedRequest);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const applications = await getAllApplications(userId);
    res.status(200).json({ applications });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const getApplicationByIdController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = getLocalUserId(req as AuthenticatedRequest);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const application = await getApplicationById(userId, id);
    res.status(200).json({ application });
  } catch (error) {
    if (error instanceof Error && error.message === "Application not found") {
      res.status(404).json({ error: error.message });
      return;
    }

    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const updateApplicationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = getLocalUserId(req as AuthenticatedRequest);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const {
      companyName,
      role,
      jobDescription,
      source,
      status,
      notes,
      reminderDate,
      appliedAt,
    } = req.body;

    const application = await updateApplication(userId, id, {
      companyName,
      role,
      jobDescription,
      source,
      status,
      notes,
      reminderDate: reminderDate ? new Date(reminderDate) : undefined,
      appliedAt: appliedAt ? new Date(appliedAt) : undefined,
    });

    res.status(200).json({ application });
  } catch (error) {
    if (error instanceof Error && error.message === "Application not found") {
      res.status(404).json({ error: error.message });
      return;
    }

    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const deleteApplicationController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = getLocalUserId(req as AuthenticatedRequest);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const result = await deleteApplication(userId, id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error && error.message === "Application not found") {
      res.status(404).json({ error: error.message });
      return;
    }

    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};
