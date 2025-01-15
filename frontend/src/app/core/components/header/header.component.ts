import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() tabs: { label: string; value: string }[] = [];
  @Input() selectedTab: string = '';

  @Output() tabSelected = new EventEmitter<string>();

  private router = inject(Router);
  profiles = [
    { label: 'Paciente', value: 'pacientes' },
    { label: 'Recepcionista', value: 'recepcionistas' },
    { label: 'Médico', value: 'medicos' },
    { label: 'Admin', value: 'admin' },
  ];
  selectedProfile: string = 'pacientes';

  selectTab(tabValue: string) {
    this.tabSelected.emit(tabValue);
  }

  onProfileChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedProfile = selectedValue;
    this.router.navigate(['/', selectedValue]);
    console.log(`Navegando para: /${selectedValue}`);
  }
}
