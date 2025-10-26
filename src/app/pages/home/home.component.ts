import { Component, signal } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { Experience } from '../../types/experience.type';
import { experienceData } from '../../data/experience';
import { Project } from '../../types/porject.type';
import { projectsData } from '../../data/projects';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ExperienceComponent, ProjectComponent],
})
export class HomeComponent {
  protected readonly experienceData = signal<Experience[]>(experienceData);
  protected readonly projectsData = signal<Project[]>(projectsData);
}
