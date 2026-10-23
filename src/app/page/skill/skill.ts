import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {
  skills = [
    { name: 'HTML5', category: 'Frontend', level: 90 },
    { name: 'CSS3', category: 'Frontend', level: 85 },
    { name: 'JavaScript', category: 'Programming', level: 75 },
    { name: 'TypeScript', category: 'Programming', level: 70 },
    { name: 'Angular', category: 'Framework', level: 70 },
    { name: 'Responsive Design', category: 'Design', level: 85 }
  ];
}
