import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-overlay-modal',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './overlay-modal.component.html',
  styleUrl: './overlay-modal.component.scss',
})
export class OverlayModalComponent {
  @Input() isOpen = false;
  @Input() width: string = '60%';

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
