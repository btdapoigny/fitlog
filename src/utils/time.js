/*
 * Convert seconds into a HH:MM format
 */

export function formatSecondsToHoursMinutes(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${ hours }h${ String(minutes).padStart(2, '0') }`
}