import { Request, Response } from "express";

export class TicketController {
  static async getAllTickets(req: Request, res: Response) {
    res.send("Aqui vão os tickets!");
  }
}
