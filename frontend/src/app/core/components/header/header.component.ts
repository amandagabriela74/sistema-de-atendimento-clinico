import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = ''; // Título principal
  @Input() subTitle: string = ''; // Subtítulo
  @Input() tabs: { label: string, value: string }[] = []; // Aba de navegação

  @Input() selectedTab: string = ''; // Aba atualmente selecionada
  @Output() tabSelected = new EventEmitter<string>(); // Evento para informar a aba selecionada


  selectTab(tabValue: string) {
    this.tabSelected.emit(tabValue);
  }
}
