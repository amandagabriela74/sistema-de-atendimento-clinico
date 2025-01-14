import { Routes } from '@angular/router';
import { GenerateTicketComponent } from './shared/components/generate-ticket/generate-ticket.component';
import { GuichePanelComponent } from './shared/components/guiche-panel/guiche-panel.component';
import { PatientComponent } from './features/patient/patient.component';
import { ReceptionistComponent } from './features/receptionist/receptionist.component';

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
  },
  {
    path: 'recepcionistas',
    loadComponent: () => import('./features/receptionist/receptionist.component').then( mod => mod.ReceptionistComponent)
  }

];
