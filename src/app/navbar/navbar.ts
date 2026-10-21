// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-navbar',
//   styleUrl: './navbar.css',
//   templateUrl: './navbar.html',
// })
// export class Navbar {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
