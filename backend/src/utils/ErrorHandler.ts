import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error & { status?: number }, // Erro com um status opcional
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error("Erro capturado:", err.message);

  res.status(err.status || 500).json({
    error: err.message || "Erro interno no servidor.",
  });
};