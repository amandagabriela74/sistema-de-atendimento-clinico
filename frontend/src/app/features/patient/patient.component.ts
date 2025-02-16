import { Component } from '@angular/core';
import { GenerateTicketComponent } from './components/generate-ticket/generate-ticket.component';
import { GuichePanelComponent } from '../../shared/components/guiche-panel/guiche-panel.component';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    GenerateTicketComponent,
    GuichePanelComponent,
    HeaderComponent,
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent {
  selectedTab: string = 'ticket';
  subTitle: string = '';
  tabs: any = [
    { label: 'Puxar Ticket', value: 'ticket' },
    { label: 'Atendimento Guiche', value: 'position-guiche' },
  ];

  onTabSelected(tab: string) {
    this.selectedTab = tab;
    if (tab === 'ticket') {
      this.subTitle = '';
    }
    if (tab === 'position-guiche') {
      this.subTitle = ' | Painel de Atendimento - Guichê';
    }
  }
}
