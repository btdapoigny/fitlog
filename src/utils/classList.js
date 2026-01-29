/**
 * Generate a class list from strings and conditionals objects, using a Vue.js-like syntax.
 * 
 * Accepts multiple arguments, which can be:
 * - Strings → added directly if truthy
 * - Objects → keys are class names, values are booleans (only true keys are included)
 * - Falsy values (null, undefined, false, '') → ignored
 * 
 * @param {...(string|Object|null|undefined|false)} classList - Class names or objects mapping class names to booleans
 * @returns {string} Space-separated string of class names
 */
export const classList = (...classList) =>
  classList
    .flatMap(classValue => {
      if (!classValue) return []
      if (typeof classValue === 'string') return [classValue]

      return Object.keys(classValue).filter(className => classValue[className])
    })
    .join(' ')