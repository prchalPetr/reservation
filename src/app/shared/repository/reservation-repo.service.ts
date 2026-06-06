import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import { convertTimeToMinutes } from '../utils/time.utils';

/* 
This service simulate backend repository for reservation. It will be used to store and manage reservation data for testing purposes.
 In a real application, this service would be replaced with an actual backend API that interacts with a database.
*/
@Injectable({
  providedIn: 'root',
})
export class ReservationRepoService {
  private id = 0;
  private allFreeTimes: string[] = [
    '08:00',
    '08:30',
    '09:00',

    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ];
  private reservations: Reservation[] = [];

  get allReservations(): Reservation[] {
    return this.reservations;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = this.id++;
    this.reservations.push(reservation);
    console.log(this.allReservations);
  }

  getPossibleReservationTimes(duration: number): string[] {
    // Simulate possible reservation times.
    const slotDurationMinutes = 30;
    const requiredSlotsCount = duration / slotDurationMinutes;
    const possibleTimes: string[] = [];

    // Check for continuous free slots that can accommodate the required duration
    for (let i = 0; i <= this.allFreeTimes.length - requiredSlotsCount; i++) {
      let isContinuousSlot = true;
      let startTimeInMinutes = convertTimeToMinutes(this.allFreeTimes[i]);
      for (let j = 0; j < requiredSlotsCount; j++) {
        const currentTime = this.allFreeTimes[i + j];
        if (!this.isContinuousSlot(startTimeInMinutes, currentTime, j, slotDurationMinutes)) {
          isContinuousSlot = false;
          break;
        }
      }

      if (isContinuousSlot) {
        possibleTimes.push(this.allFreeTimes[i]);
      }
    }

    return possibleTimes;
  }

  // Helper method to check if the current slot is continuous with the start time
  private isContinuousSlot(
    startTime: number,
    checkSlot: string,
    index: number,
    slotDurationMinutes: number,
  ): boolean {
    const checkTimeInMinutes = convertTimeToMinutes(checkSlot);
    return slotDurationMinutes * index === checkTimeInMinutes - startTime;
  }
}
