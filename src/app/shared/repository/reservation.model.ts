export interface Reservation {
    id?: number;
    userName: string;
    date: string;
    duration: number; // in minutes
    specialRequests?: string;
}