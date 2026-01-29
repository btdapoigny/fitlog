/**
 * Returns the first segment of a given URL pathname.
 * 
 * @param {string} pathname - The URL pathname
 * @return {string} The root path, starting with a slash
 */
export function getRootPath(pathname) {
  return `/${ pathname.split('/').filter(Boolean)[0] || '' }`
}

/**
 * Calculates the progress percentage of a value relative to a reference.
 * The result is capped at 100%.
 * 
 * @param {number} value - The current value
 * @param {number} reference - The reference value representing 100%
 * @returns {number} The progress percentage
 */
export function getProgressPercentage(value, reference) {
  return Math.min((value * 100) / reference, 100)
}

/**
 * Calculates the percentage increase or decrease from an old value to a new value.
 *
 * @param {number} oldValue - The original value
 * @param {number} newValue - The new value to compare
 * @returns {number} The rounded percentage change
 */
export function getPercentageIncrease(oldValue, newValue) {
  if (oldValue === 0) return newValue === 0 ? 0 : Infinity

  const increase = newValue - oldValue
  const percentage = (increase / oldValue) * 100
  return Math.round(percentage)
}