import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Social } from '../../../../types/social.type';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
  imports: [CommonModule],
})
export class SocialComponent {
  public readonly links = input.required<Social>();
}
