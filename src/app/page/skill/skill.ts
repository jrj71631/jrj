import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-skill',
//   styleUrl: './skill.css',
//   templateUrl: './skill.html',
// })
// export class Skill {}
// import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML5', level: 90, category: 'Frontend' },
    { name: 'CSS3', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Angular', level: 85, category: 'Framework' },
    { name: 'Bootstrap', level: 75, category: 'Styling' },
    { name: 'Git & GitHub', level: 70, category: 'Tools' },
    { name: 'Responsive Design', level: 90, category: 'Design' }
  ];
}