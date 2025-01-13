// src/data-structures/LinkedList.ts

// Classe para um nó da lista
export class Node {
  data: any;
  next: Node | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

// Classe para a lista encadeada
export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  // Método para inserir na lista com base na prioridade
  insert(ticket: any): void {
    const newNode = new Node(ticket);

    // Se a lista estiver vazia, o novo nó vira o "head"
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Comparar prioridade (Urgente > Preferencial > Normal)
    const getPriority = (type: string) => {
      if (type.toLowerCase() === "urgente") return 3;
      if (type.toLowerCase() === "preferencial") return 2;
      return 1; // Normal
    };

    const newTicketPriority = getPriority(ticket.type);

    // Caso o novo ticket tenha prioridade maior que o head
    if (newTicketPriority > getPriority(this.head.data.type)) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Inserção no meio ou final da lista
    let current = this.head;
    while (
      current.next &&
      getPriority(current.next.data.type) >= newTicketPriority
    ) {
      current = current.next;
    }

    // Insere o novo nó na posição encontrada
    newNode.next = current.next;
    current.next = newNode;
  }

  // Método para converter a lista encadeada para um array (para retornar ao usuário)
  toArray(): any[] {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}
