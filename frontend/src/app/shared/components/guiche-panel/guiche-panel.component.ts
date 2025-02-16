import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-guiche-panel',
  standalone: true,
  imports: [],
  templateUrl: './guiche-panel.component.html',
  styleUrl: './guiche-panel.component.scss',
})
export class GuichePanelComponent implements OnInit {
  tickets: any = [];

  ngOnInit(): void {
/*     this.ticketsService.Get().subscribe({
      next: (response) => {
        console.log('Resposta da API:', response);
        this.tickets = response;
      },
      error: (err) => {
        console.error('Erro ao chamar a API:', err);
      },
    }); */

    const storedTickets = localStorage.getItem('tickets');
    this.tickets = storedTickets ? JSON.parse(storedTickets) : [
      { type: 'Prioridade', password: 'A123', guiche: 1 },
      { type: 'Normal', password: 'B456', guiche: 2 },
      { type: 'Urgência', password: 'C789', guiche: 3 },
    ];

/*     const storedTickets = localStorage.getItem('tickets');
const allTickets = storedTickets ? JSON.parse(storedTickets) : [];

// Filtra apenas os tickets que já foram chamados (possuem guichê)
this.tickets = allTickets.filter((ticket: { guiche: any; }) => ticket.guiche);
 */
  }

}
