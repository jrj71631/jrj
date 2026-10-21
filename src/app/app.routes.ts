import { Routes } from '@angular/router';

export const routes: Routes = [];

import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}