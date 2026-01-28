/*
 * Get the root part of a path
 */

export function getRootPath(pathname) {
  return `/${ pathname.split('/').filter(Boolean)[0] || '' }`
}