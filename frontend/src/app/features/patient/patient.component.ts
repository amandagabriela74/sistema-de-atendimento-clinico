import { Component } from '@angular/core';
import { GenerateTicketComponent } from '../generate-ticket/generate-ticket.component';
import { GuichePanelComponent } from '../guiche-panel/guiche-panel.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [GenerateTicketComponent, GuichePanelComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent {
  selectedTab: string = 'ticket';
  subTitle: string = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
    if(tab === 'position-guiche'){
      this.subTitle = ' | Painel de Atendimento - Guichê'
    }
  }


}
