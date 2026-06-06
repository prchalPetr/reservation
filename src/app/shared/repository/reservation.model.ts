export interface Reservation {
    id?: number;
    username: string;
    startDate: string;
    startTime: string;
    duration: number; // in minutes
    notes?: string;
}