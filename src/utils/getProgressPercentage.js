export function getProgressPercentage(value, reference) {
  return Math.min((value * 100) / reference, 100)
}