import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NewReservationService {
  private reservationForm: FormGroup;

  constructor() {
    this.reservationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      duration: new FormControl(30, [Validators.required, Validators.min(30)]),
      startDateTime: new FormGroup({
        // Before submit we need to convert this date to string in format "dd.MM.yyyy"
        date: new FormControl(new Date(), Validators.required),
        time: new FormControl('', Validators.required)
      }),
      specialRequests: new FormControl(''),
    });
  }

  get reservationFormGroup(): FormGroup {
    return this.reservationForm;
  }

  get startDateControl(): FormControl {
    return this.reservationForm.get('startDateTime.date') as FormControl;
  }

  get startTimeControl(): FormControl {
    return this.reservationForm.get('startDateTime.time') as FormControl;
  }

  get usernameControl(): FormControl {
    return this.reservationForm.get('username') as FormControl;
  }
  
  get durationControl(): FormControl {
    return this.reservationForm.get('duration') as FormControl;
  }
}
