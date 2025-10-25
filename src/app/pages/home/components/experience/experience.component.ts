import { Component, input } from '@angular/core';
import { Experience } from '../../../../types/experience.type';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  imports: [CommonModule, MatChipsModule],
})
export class ExperienceComponent {
  public readonly experienceData = input.required<Experience>();
}
