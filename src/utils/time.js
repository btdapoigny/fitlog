/**
 * Convert seconds into a HH:MM format
 * 
 * @param {number} seconds - Seconds to convert
 * @returns {string} A string in HH:MM format
 */
export function formatSecondsToHoursMinutes(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${ hours }h${ String(minutes).padStart(2, '0') }`
}

/**
 * Formats a date string "YYYY-MM-DD" into "D month YYYY" in French.
 *
 * @param {string} dateString - Date in format "YYYY-MM-DD"
 * @returns {string} Formatted date in French
 */
export function formatDate(dateString) {
  if (!dateString) return ''

  const date = new Date(dateString)

  if (isNaN(date)) return ''

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}