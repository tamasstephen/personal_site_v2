import { Component, signal, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements AfterViewInit {
  protected readonly experienceData = signal<Experience[]>(experienceData);
  protected readonly projectsData = signal<Project[]>(projectsData);

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const isComingFromBelow = rect.top > 0;

            entry.target.classList.remove('animate-in', 'animate-out');

            if (isComingFromBelow) {
              entry.target.classList.add('animate-in');
            } else {
              entry.target.classList.add('animate-out');
            }
          } else {
            entry.target.classList.remove('animate-in', 'animate-out');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('article').forEach((article) => {
      observer.observe(article);
    });
  }
}
