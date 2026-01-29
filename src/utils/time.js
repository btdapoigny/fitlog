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
  const day = today.getDay() || 7

  const startOfWeek = (offset = 0) => {
    const date = new Date(today)
    date.setDate(today.getDate() - (day - 1) + offset)
    date.setHours(0, 0, 0, 0)
    return date
  }

  const endOfWeek = (start) => {
    const date = new Date(start)
    date.setDate(start.getDate() + 6)
    date.setHours(23, 59, 59, 999)
    return date
  }

  const currentStart = startOfWeek()
  const lastStart = startOfWeek(-7)

  return {
    currentWeek: { start: currentStart, end: endOfWeek(currentStart) },
    lastWeek: { start: lastStart, end: endOfWeek(lastStart) }
  }
}