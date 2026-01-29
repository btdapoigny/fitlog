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