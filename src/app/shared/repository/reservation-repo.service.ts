import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";

/* 
This service simulate backend repository for reservation. It will be used to store and manage reservation data for testing purposes.
 In a real application, this service would be replaced with an actual backend API that interacts with a database.
*/
@Injectable({
  providedIn: 'root'
})
export class ReservationRepoService {
    private reservations: Reservation[] = [];

    get allDeservations(): Reservation[] {
        return this.reservations;
    }

    addReservation(reservation: Reservation): void {
        this.reservations.push(reservation);
    }
}