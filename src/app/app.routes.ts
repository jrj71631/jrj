import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Project } from './page/project/project';
import { Skill } from './page/skill/skill';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'project', component: Project},
  { path: 'skill', component: Skill },
  { path: '**', redirectTo: '' }
];
