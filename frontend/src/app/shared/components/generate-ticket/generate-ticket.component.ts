import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-ticket',
  standalone: true,
  imports: [],
  templateUrl: './generate-ticket.component.html',
  styleUrl: './generate-ticket.component.scss',
})
export class GenerateTicketComponent implements OnInit {
 /*  public generatedTicket: { password: string; type: string } | null = null; */

 public generatedTicket: any;

  ngOnInit(): void {}

/*   createTicket(type: string): void {
    const ticketData = { type };

    this.ticketsService.Post(ticketData).subscribe({
      next: (response) => {
        this.generatedTicket = response;
        console.log('Ticket gerado com sucesso:', response);
      },
      error: (error) => {
        console.error('Erro ao gerar ticket:', error);
        alert('Erro ao gerar ticket! Tente novamente.');
      },
    });
  } */

    createTicket(type: string): void {
      // Recupera os tickets já salvos ou inicializa um array vazio
      const storedTickets = localStorage.getItem('tickets');
      const tickets = storedTickets ? JSON.parse(storedTickets) : [];
    
      // Criar um novo ticket com ID e senha aleatória
      const newTicket = {
        id: tickets.length + 1, // Simula um ID incremental
        type,
        password: Math.floor(1000 + Math.random() * 9000), // Senha aleatória de 4 dígitos
        guiche: null, // Ainda não foi chamado para um guichê
      };
    
      // Adiciona o novo ticket à lista
      tickets.push(newTicket);
    
      // Salva no localStorage
      localStorage.setItem('tickets', JSON.stringify(tickets));
    
      // Atualiza a variável do componente para exibir na tela
      this.generatedTicket = newTicket;
    
      console.log('Ticket gerado com sucesso:', newTicket);
    }
}
