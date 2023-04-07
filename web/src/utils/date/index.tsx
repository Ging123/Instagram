/**
 * Compares the time difference between two dates in terms of milliseconds.
 *
 * @param {Date} date1 - First date that will be compared.
 * @param {Date} date2 - Second date that will be compared with the first one.
 * @param {number} milliseconds - The threshold time difference in milliseconds.
 * @returns {boolean} - Returns true if the time difference between date2 and date1 is greater than milliseconds.
 */
export function compareDifference(date1: Date, date2: Date, milliseconds: number): boolean {
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  return timeDifference > milliseconds;
}

export const minutesToMilliseconds = (minutes:number) => minutes * 60000;