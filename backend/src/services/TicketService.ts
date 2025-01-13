import { FileService } from "./FileService";

export class TicketService {
  private static filePath = "src/data/tickets.json";

  // Método para obter todos os tickets
  static async getTickets() {
    return await FileService.readFile(this.filePath);
  }

  static async getAllTickets() {
    try {
      const tickets = await FileService.readFile("src/data/tickets.json");
      console.log("Tickets carregados:", tickets);
      return tickets;
    } catch (error) {
      console.error("Erro no serviço:", error);
      throw new Error("Erro ao carregar os tickets.");
    }
  }
}
