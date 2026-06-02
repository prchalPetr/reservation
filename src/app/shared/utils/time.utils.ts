// Utility functions for time manipulation

/**
 * Creates a time string in "HH:mm" format from a given number of minutes.
 * 
 * @param minutes - The total number of minutes to convert into a time string.
 * @returns The time string in "HH:mm" format.
 */
export function createTimeFromMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

/**
 * Converts a time string in "HH:mm" format to the total number of minutes.
 * 
 * @param time - The time string in "HH:mm" format.
 * @returns The total number of minutes.
 */
export function convertTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
