import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  project = [
    {
      number: '01',
      title: 'Personal Portfolio',
      category: 'Web Development',
      description:
        'A responsive personal portfolio to showcase my skills, experience, and projects with a clean modern design.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      demo: '',
      github: ''
    },
    {
      number: '02',
      title: 'Task Management App',
      category: 'Frontend Application',
      description:
        'A task management interface to organize daily activities, track progress, and stay productive.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      demo: '',
      github: ''
    },
    {
      number: '03',
      title: 'Weather Dashboard',
      category: 'Web Application',
      description:
        'A weather dashboard concept that presents current conditions and forecasts in a simple, easy-to-read layout.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      demo: '',
      github: ''
    }
  ];
}
