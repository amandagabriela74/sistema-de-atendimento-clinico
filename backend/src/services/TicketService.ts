import { FileService } from "./FileService";

export class TicketService {
  private static filePath = "src/data/tickets.json";

  // Método para obter todos os tickets
  static async getTickets() {
    return await FileService.readFile(this.filePath);
  }

  async getAllTickets() {
    const tickets = await FileService.readFile("src/data/tickets.json");
    console.log(tickets);
    return tickets;
  }
}
