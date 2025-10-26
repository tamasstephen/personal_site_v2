import { Component, input } from '@angular/core';
import { Experience } from '../../../../types/experience.type';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../../../components/chip/chip.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  imports: [CommonModule, ChipComponent, MatChipsModule],
})
export class ExperienceComponent {
  public readonly experienceData = input.required<Experience>();
}
