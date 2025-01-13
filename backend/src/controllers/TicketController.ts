import { Request, Response } from "express";
import { TicketService } from "../services/TicketService";

export class TicketController {
  static async getTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketService.getAllTickets();
      res.status(200).json(tickets);
    } catch (error) {
      console.error("Erro no controlador:", error);
      res.status(500).json({ error: "Erro ao obter os tickets." });
    }
  }
}
