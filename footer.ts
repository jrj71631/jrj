import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [RouterLink, RouterLinkActive]
})
export class Footer {
  currentYear = new Date().getFullYear();
}