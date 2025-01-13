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

  static async createTicket(req: Request, res: Response): Promise<void> {
    try {
      const { type } = req.body;

      if (!type) {
        res.status(400).json({ error: "Todos os campos são obrigatórios." });
        return;
      }

      const newTicket = await TicketService.createTicket(type);
      res.status(201).json(newTicket);
    } catch (error) {
      console.error("Erro no controlador:", error);
      res.status(500).json({ error: "Erro ao criar o ticket." });
    }
  }
}
