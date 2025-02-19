import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  imports: [ButtonComponent]
})
export class PageNotFoundComponent {

  private router = inject(Router)

  voltarParaHome(): void {
    this.router.navigate(['/']);
  }
}
