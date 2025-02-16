import { Component, OnInit } from '@angular/core';

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
    const storedTickets = localStorage.getItem('tickets');
    this.tickets = storedTickets ? JSON.parse(storedTickets) : [
      { type: 'Prioridade', password: 'A123', guiche: 1 },
      { type: 'Normal', password: 'B456', guiche: 2 },
      { type: 'Urgência', password: 'C789', guiche: 3 },
    ];
  }

}
