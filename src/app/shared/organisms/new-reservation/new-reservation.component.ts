import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

import { IftaDatepickerComponent } from '../../molecules/ifta-datepicker/ifta-datepicker.component';
import { NewReservationService } from '../../service/new-reservation.service';
import { IftaInputnumberComponent } from '../../molecules/ifta-inputnumber/ifta-inputnumber.component';
import { IftaInputtextComponent } from '../../molecules/ifta-inputtext/ifta-inputtext.component';

@Component({
  selector: 'app-new-reservation',
  imports: [
    DatePickerModule,
    ReactiveFormsModule,
    IftaDatepickerComponent,
    IftaInputnumberComponent,
    IftaInputtextComponent,
  ],
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.css',
})
export class NewReservationComponent {
  // Injecting service
  private readonly newReservationService = inject(NewReservationService);

  reservationForm: FormGroup = this.newReservationService.reservationFormGroup;

  minDate: Date = new Date();
  maxDate: Date = new Date();
  constructor() {
    // For beggining, in futere admins can change this values in settings
    this.minDate.setHours(8);
    this.minDate.setMinutes(0);
    this.maxDate.setHours(16);
    this.maxDate.setMinutes(30);
  }

  get usernameControl(): FormControl {
    return this.newReservationService.usernameControl;
  }

  get durationControl(): FormControl {
    return this.newReservationService.durationControl;
  }

  get startDateControl(): FormControl {
    return this.newReservationService.startDateControl;
  }

  get startTimeControl(): FormControl {
    return this.newReservationService.startTimeControl;
  }

  onSubmit() {
    console.log(this.reservationForm.value);
  }
}
