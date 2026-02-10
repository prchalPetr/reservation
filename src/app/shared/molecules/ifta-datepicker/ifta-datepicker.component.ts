import { Component, input } from '@angular/core';
import { IftaLabelModule } from "primeng/iftalabel";
import { DatePickerModule } from "primeng/datepicker";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifta-datepicker',
  imports: [IftaLabelModule, DatePickerModule, ReactiveFormsModule],
  templateUrl: './ifta-datepicker.component.html',
  styleUrl: './ifta-datepicker.component.css'
})
export class IftaDatepickerComponent {
  control = input.required<FormControl>();
  labelText = input.required<string>();
  showTime = input<boolean>(false);
}
