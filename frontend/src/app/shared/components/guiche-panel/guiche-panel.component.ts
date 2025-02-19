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
    if(storedTickets){
      this.tickets = JSON.parse(storedTickets).filter((ticket: any) => ticket.guiche);
    }
  }
}
