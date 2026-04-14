import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { IButton } from './buttons-box.model';

@Component({
  selector: 'app-buttons-box',
  imports: [ButtonModule, CardModule],
  templateUrl: './buttons-box.component.html',
  styleUrl: './buttons-box.component.scss',
})
export class ButtonsBoxComponent {
  buttons = input.required<IButton[]>();
  emptyIcon = input<string>('');
  emptyMessage = input<string>('No data');
}
