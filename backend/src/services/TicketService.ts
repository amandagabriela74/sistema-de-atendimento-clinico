import { FileService } from "./FileService";

export class TicketService {
  private static filePath = "src/data/tickets.json";

  static async getAllTickets() {
    try {
      const tickets = await FileService.readFile(this.filePath);
      console.log("Tickets carregados:", tickets);
      return tickets;
    } catch (error) {
      console.error("Erro no serviço:", error);
      throw new Error("Erro ao carregar os tickets.");
    }
  }

  static async createTicket(type: string) {
    try {
      const tickets = await FileService.readFile(this.filePath);

      const newId =
        tickets.length > 0 ? Math.max(...tickets.map((t: any) => t.id)) + 1 : 1;

      const newPassword: string = 'Senha'; //MUDAR DEPOIS

      const ticketToAdd = { id: newId, type, password: newPassword };
      tickets.push(ticketToAdd);

      await FileService.writeFile(this.filePath, tickets);

      return ticketToAdd; // Retorna o ticket criado
    } catch (error) {
      console.error("Erro ao criar o ticket:", error);
      throw new Error("Erro ao criar o ticket.");
    }
  }
}
