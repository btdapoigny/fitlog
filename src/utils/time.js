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

/**
 * Returns the date ranges for the current week and the previous week.
 *
 * @returns {Object} An object containing:
 *   - currentWeek: { start: Date, end: Date } — start and end of the current week
 *   - lastWeek: { start: Date, end: Date } — start and end of the previous week
 */
export function getWeekRanges() {
  const today = new Date()
  const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay()

  const startOfCurrentWeek = new Date(today)
  startOfCurrentWeek.setDate(today.getDate() - (dayOfWeek - 1))
  startOfCurrentWeek.setHours(0, 0, 0, 0)

  const endOfCurrentWeek = new Date(startOfCurrentWeek)
  endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 6)
  endOfCurrentWeek.setHours(23, 59, 59, 999)

  const startOfLastWeek = new Date(startOfCurrentWeek)
  startOfLastWeek.setDate(startOfCurrentWeek.getDate() - 7)

  const endOfLastWeek = new Date(startOfLastWeek)
  endOfLastWeek.setDate(startOfLastWeek.getDate() + 6)
  endOfLastWeek.setHours(23, 59, 59, 999)

  return {
    currentWeek: { start: startOfCurrentWeek, end: endOfCurrentWeek },
    lastWeek: { start: startOfLastWeek, end: endOfLastWeek }
  }
}