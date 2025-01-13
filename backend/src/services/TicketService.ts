import { LinkedList } from "../data-structures/LinkedList";
import { FileService } from "./FileService";

interface Ticket {
  id: number;
  type: string;
  password: string;
  createdAt: string;
}

export class TicketService {
  private static filePath = "src/data/tickets.json";

  
  static async getAllTickets(): Promise<any[]> {
    try {
      const tickets = await FileService.readFile(this.filePath);
      const ticketList = new LinkedList();

      // Adiciona os tickets à lista encadeada
      tickets.forEach((ticket: any) => ticketList.insert(ticket));

      // Retorna os tickets ordenados como array
      return ticketList.toArray();
    } catch (error) {
      console.error("Erro ao carregar os tickets:", error);
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
