import { Routes } from '@angular/router';
import { GenerateTicketComponent } from './features/generate-ticket/generate-ticket.component';
import { GuichePanelComponent } from './features/guiche-panel/guiche-panel.component';
import { PatientComponent } from './features/patient/patient.component';

export const routes: Routes = [
  {
    component: GenerateTicketComponent,
    path: 'gerar-ticket'
  },
  {
    component: GuichePanelComponent,
    path: 'painel-guiche'
  },
  {
    component: PatientComponent,
    path: 'pacientes'
  }

];
