import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Reservation } from '../repository/reservation.model';
import { ReservationRepoService } from '../repository/reservation-repo.service';

@Injectable({
  providedIn: 'root',
})
export class NewReservationService {
  private repo = inject(ReservationRepoService);

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
      notes: new FormControl(''),
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

  get notes(): FormControl {
    return this.reservationForm.get('notes') as FormControl;
  }

  get isFormValid(): boolean {
    return this.reservationForm.valid;
  }

  onSubmit() {
    const newReservation: Reservation = {
      username: this.usernameControl.value,
      duration: this.durationControl.value,
      startDate: formatDate(this.startDateControl.value, 'dd.MM.yyyy', 'cs-CZ'),
      startTime: this.startTimeControl.value,
      notes: this.notes.value
    }

    this.repo.addReservation(newReservation);
  }
}
