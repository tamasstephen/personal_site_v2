import { Component, signal } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { Experience } from '../../types/experience.type';
import { experienceData } from '../../data/experience';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ExperienceComponent],
})
export class HomeComponent {
  protected readonly experienceData = signal<Experience[]>(experienceData);
}
