import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';

import { IButton } from './buttons-box.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons-box',
  imports: [ButtonModule, CardModule, SelectButtonModule, ReactiveFormsModule],
  templateUrl: './buttons-box.component.html',
  styleUrl: './buttons-box.component.scss',
})
export class ButtonsBoxComponent {
  buttons = input.required<IButton[]>();
  emptyIcon = input<string>('');
  emptyMessage = input<string>('No data');
  control = input.required<FormControl>();

}
