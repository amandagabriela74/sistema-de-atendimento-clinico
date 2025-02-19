import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.scss'
})
export class WaitingListComponent implements OnInit {
  listaEspera: any[] = [];

  ngOnInit(): void {
    this.carregarListaEspera();
  }

  carregarListaEspera() {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      this.listaEspera = JSON.parse(storedTickets).filter((ticket: any) => !ticket.guiche);
    }
  }
    chamarProximoPaciente(guiche: number) {
      if (!this.listaEspera.length) {
        alert('Nenhum paciente na lista de espera.');
        return;
      }
    
      // Pega o primeiro paciente da fila
      const pacienteChamado = this.listaEspera.shift(); 
      pacienteChamado.guiche = guiche; // Adiciona o número do guichê
    
      // Atualiza os tickets no localStorage sem remover ninguém
      const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
      const updatedTickets = storedTickets.map((ticket: any) =>
        ticket.password === pacienteChamado.password ? pacienteChamado : ticket
      );
    
      localStorage.setItem('tickets', JSON.stringify(updatedTickets));
      this.carregarListaEspera();
    }
    
}
