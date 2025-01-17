import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { GuichePanelComponent } from '../../shared/components/guiche-panel/guiche-panel.component';
import { TicketsService } from '../../core/services/tickets.service';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { OverlayModalComponent } from '../../shared/components/overlay-modal/overlay-modal.component';

@Component({
  selector: 'app-receptionist',
  standalone: true,
  imports: [HeaderComponent, GuichePanelComponent, ButtonComponent, OverlayModalComponent],
  templateUrl: './receptionist.component.html',
  styleUrl: './receptionist.component.scss',
})
export class ReceptionistComponent {
  selectedTab: string = 'position-guiche';
  subTitle: string = '';
  tabs: any = [{ label: 'Atendimento Guiche', value: 'position-guiche' }];
  openModal = signal(false);

  private ticketsService = inject(TicketsService);

  openModalNextTicket() {
    this.openModal.update((current) => !current);
  }
  chamarProximo(guiche: any) {
    const guicheNumber = Number(guiche); // Converte para número
    if (isNaN(guicheNumber)) {
      console.error('O valor do guichê precisa ser um número válido.');
      return;
    }

    this.ticketsService.callNextTicket({ guiche }).subscribe({
      next: (response) => {
        console.log('Próximo ticket:', response);
        // Aqui você pode atualizar o painel de atendimento ou exibir uma mensagem
      },
      error: (err) => {
        console.error('Erro ao chamar o próximo ticket:', err);
      },
    });
  }
}
