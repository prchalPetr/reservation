import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-ifta-inputnumber',
  imports: [IftaLabelModule, InputNumberModule, ReactiveFormsModule],
  templateUrl: './ifta-inputnumber.component.html',
  styleUrl: './ifta-inputnumber.component.css'
})
export class IftaInputnumberComponent {
  control = input.required<FormControl>();
  labelText = input<string>('');
  suffix = input<string>('');
  step = input<number>(1);
  min = input<number>(0);
  showButtons = input<boolean>(false);
}
