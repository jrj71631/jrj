import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet , Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('timepass');
}



// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar';
// import { Footer } from './footer/footer';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [NavbarComponent, Footer, RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class AppComponent {}
