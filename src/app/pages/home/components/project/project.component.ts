import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChipComponent } from '../../../../components/chip/chip.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [CommonModule, ChipComponent, MatChipsModule],
})
export class ProjectComponent {
  public readonly title = input.required<string>();
  public readonly url = input.required<string>();
  public readonly description = input.required<string>();
  public readonly technologies = input.required<string[]>();
  public readonly image = input.required<string>();
}
