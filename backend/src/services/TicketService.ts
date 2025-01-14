import { LinkedList } from "../data-structures/LinkedList";
import { FileService } from "./FileService";

interface Ticket {
  id: number;
  type: 'Normal' | 'Preferencial' | 'Urgencia';
  password: string;
  createdAt: string;
  guiche?: any;
  status?: 'pendente' | 'em_atendimento' | 'concluido';
}

export class TicketService {
  private static filePath = "src/data/tickets.json";
  private static filaUrgencia: Ticket[] = [];
  private static filaPreferencial: Ticket[] = [];
  private static filaNormal: Ticket[] = [];

  static async getAllTickets(): Promise<any[]> {
    try {
      const tickets = await FileService.readFile(this.filePath);

      // Atualizar as filas com base nos tickets pendentes
      this.updateQueues(tickets);

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

  static async createTicket(type: any): Promise<Ticket> {
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
        status: "pendente",
      };

      tickets.push(ticketToAdd);

      await FileService.writeFile(this.filePath, tickets);

      return ticketToAdd;
    } catch (error) {
      console.error("Erro ao criar o ticket:", error);
      throw new Error("Erro ao criar o ticket.");
    }
  }

  static async callNextTicket(guiche: number): Promise<Ticket | null> {
    try {
      const tickets = await FileService.readFile(this.filePath);
      
      this.updateQueues(tickets);

      let nextTicket: Ticket | undefined;

      if (this.filaUrgencia.length > 0) {
        nextTicket = this.filaUrgencia.shift();
      } else if (this.filaPreferencial.length > 0) {
        nextTicket = this.filaPreferencial.shift();
      } else if (this.filaNormal.length > 0) {
        nextTicket = this.filaNormal.shift();
      }

      if (nextTicket) {
        nextTicket.status = "em_atendimento";
        nextTicket.guiche = guiche;
        await FileService.writeFile(this.filePath, tickets);
        return nextTicket;
      }

      return null;
    } catch (error) {
      console.error("Erro ao chamar o próximo ticket:", error);
      throw new Error("Erro ao chamar o próximo ticket.");
    }
  }

  //Métodos Auxiliares
  private static updateQueues(tickets: Ticket[]): void {
    this.filaUrgencia = tickets.filter(
      (t) => t.type === "Urgencia" && !t.guiche
    );
    this.filaPreferencial = tickets.filter(
      (t) => t.type === "Preferencial" && !t.guiche
    );
    this.filaNormal = tickets.filter((t) => t.type === "Normal" && !t.guiche);
  }
}
