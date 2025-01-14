import { Component, inject, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-generate-ticket',
  standalone: true,
  imports: [],
  templateUrl: './generate-ticket.component.html',
  styleUrl: './generate-ticket.component.scss',
})
export class GenerateTicketComponent implements OnInit {
  public generatedTicket: { password: string; type: string } | null = null;

  private ticketsService = inject(TicketsService);

  ngOnInit(): void {}

  createTicket(type: string): void {
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
  }
}
