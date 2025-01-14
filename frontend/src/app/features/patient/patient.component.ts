import { Component } from '@angular/core';
import { GenerateTicketComponent } from '../../shared/components/generate-ticket/generate-ticket.component';
import { GuichePanelComponent } from '../../shared/components/guiche-panel/guiche-panel.component';
import { MedicalPanelComponent } from '../../shared/components/medical-panel/medical-panel.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [GenerateTicketComponent, GuichePanelComponent, MedicalPanelComponent],
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
    if(tab === 'position-medical'){
      this.subTitle = ' | Painel de Atendimento - Médico'
    }
  }


}
