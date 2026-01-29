/**
 * Convert seconds into a HH:MM format
 * 
 * @param {number} - Seconds to convert
 * @returns {string} - A string in HH:MM format
 */
export function formatSecondsToHoursMinutes(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${ hours }h${ String(minutes).padStart(2, '0') }`
}

/**
 * Formats a date string "DD-MM-YYYY" into "D month YYYY" in French.
 *
 * @param {string} dateStr - Date in format "DD-MM-YYYY"
 * @returns {string} Formatted date in French
 */
export function formatDate(dateString) {
  if (!dateString) return ''

  const [day, month, year] = dateString.split('-')
  const date = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}