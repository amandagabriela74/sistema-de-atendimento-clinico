import { FileService } from "./FileService";

interface Ticket {
  id: number;
  type: string;
  password: string;
  createdAt: string;
}

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

  static async createTicket(type: string): Promise<Ticket> {
    try {
      const tickets: Ticket[] = await FileService.readFile(this.filePath);

      const newId =
        tickets.length > 0 ? Math.max(...tickets.map((t) => t.id)) + 1 : 1;

      const newPassword = `N${String(newId).padStart(4, "0")}`;

      const createdAt = new Date().toLocaleString("pt-BR");

      const ticketToAdd: Ticket = {
        id: newId,
        type,
        password: newPassword,
        createdAt,
      };

      tickets.push(ticketToAdd);

      await FileService.writeFile(this.filePath, tickets);

      return ticketToAdd;
    } catch (error) {
      console.error("Erro ao criar o ticket:", error);
      throw new Error("Erro ao criar o ticket.");
    }
  }
}
