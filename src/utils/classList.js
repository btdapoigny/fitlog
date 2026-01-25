/*
 * Generate a class list from strings and conditionals objects.
 */

export const classList = (...classList) =>
  classList
    .flatMap(classValue => {
      if (!classValue) return []
      if (typeof classValue === 'string') return [classValue]

      return Object.keys(classValue).filter(className => classValue[className])
    })
    .join(' ')