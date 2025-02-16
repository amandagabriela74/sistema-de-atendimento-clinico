import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { GuichePanelComponent } from '../../shared/components/guiche-panel/guiche-panel.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { OverlayModalComponent } from '../../shared/components/overlay-modal/overlay-modal.component';
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';

@Component({
  selector: 'app-receptionist',
  standalone: true,
  imports: [
    HeaderComponent,
    GuichePanelComponent,
    ButtonComponent,
    OverlayModalComponent,
    WaitingListComponent
  ],
  templateUrl: './receptionist.component.html',
  styleUrl: './receptionist.component.scss',
})
export class ReceptionistComponent {
  selectedTab: string = 'position-waiting';
  subTitle: string = '';
  tabs: any = [
    { label: 'Lista de Espera', value: 'position-waiting' },
    { label: 'Atendimento Guiche', value: 'position-guiche' },
  ];
  openModal = signal(false);

  openModalNextTicket() {
    this.openModal.update((current) => !current);
  }

  onTabSelected(tab: string) {
    this.selectedTab = tab;
    if (tab === 'position-guiche') {
      this.subTitle = ' | Painel de Atendimento - Guichê';
    }
    if (tab === 'position-waiting') {
      this.subTitle = '| Lista de Espera';
    }
  }

  chamarProximo(guiche: any): void {
    const guicheNumber = Number(guiche);
    if (isNaN(guicheNumber)) {
      console.error('O valor do guichê precisa ser um número válido.');
      return;
    }

    // Recupera os tickets do localStorage
    const storedTickets = localStorage.getItem('tickets');
    let tickets = storedTickets ? JSON.parse(storedTickets) : [];

    if (tickets.length === 0) {
      console.log('Nenhum ticket na fila.');
      return;
    }

    // Pega e remove o primeiro ticket da fila
    const nextTicket = tickets.shift();
    nextTicket.guiche = guicheNumber; // Adiciona o guichê ao ticket chamado

    // Atualiza a lista no localStorage
    localStorage.setItem('tickets', JSON.stringify(tickets));

    // Atualiza a interface com o ticket chamado
    console.log(
      `Chamado ticket ${nextTicket.password} para o guichê ${guicheNumber}`
    );
  }
}
