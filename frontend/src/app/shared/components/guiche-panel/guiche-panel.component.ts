import { Component, inject, OnInit } from '@angular/core';
import { TicketsService } from '../../../core/services/tickets.service';

@Component({
  selector: 'app-guiche-panel',
  standalone: true,
  imports: [],
  templateUrl: './guiche-panel.component.html',
  styleUrl: './guiche-panel.component.scss',
})
export class GuichePanelComponent implements OnInit {
  tickets: any = [];

  private ticketsService = inject(TicketsService);

  ngOnInit(): void {
    this.ticketsService.Get().subscribe({
      next: (response) => {
        console.log('Resposta da API:', response);
        this.tickets = response;
      },
      error: (err) => {
        console.error('Erro ao chamar a API:', err);
      },
    });
  }

}
