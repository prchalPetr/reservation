import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { IftaDatepickerComponent } from '../../molecules/ifta-datepicker/ifta-datepicker.component';

@Component({
  selector: 'app-new-reservation',
  imports: [
    DatePickerModule,
    ReactiveFormsModule,
    IftaLabelModule,
    InputTextModule,
    IftaDatepickerComponent,
  ],
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.css',
})
export class NewReservationComponent {
  reservationForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    startDateTime: new FormControl(''),
    specialRequests: new FormControl(''),
  });

  get startDateTimeControl(): FormControl {
    return this.reservationForm.get('startDateTime') as FormControl;
  }

  onSubmit() {
    console.log(this.reservationForm.value);
    console.log(
      this.reservationForm.value.startDateTime.toLocaleString('cs-CZ', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }
}
