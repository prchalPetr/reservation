import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-ifta-inputtext',
  imports: [ReactiveFormsModule, IftaLabelModule, InputTextModule],
  templateUrl: './ifta-inputtext.component.html',
  styleUrl: './ifta-inputtext.component.scss'
})
export class IftaInputtextComponent {
  control = input.required<FormControl>();
  labelText = input<string>('');
}
