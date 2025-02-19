import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'pacientes',
    loadComponent: () => import('./features/patient/patient.component').then( mod => mod.PatientComponent)
  },
  {
    path: 'recepcionistas',
    loadComponent: () => import('./features/receptionist/receptionist.component').then( mod => mod.ReceptionistComponent)
  },
  { path: '',   redirectTo: '/pacientes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
