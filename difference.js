import combine from './combine'

/**
 * 差集
 *
 * @function difference
 * @memberOf arrays
 * 
 * @param  {Array} arr
 * @param  {Array} others 
 * @return {Array}
 *
 * @example
 * difference([1, 2, 3, 4, 5], [5, 2, 10]) 
 * // [1, 3, 4]
 */

export default (arr, ...others) => arr.filter(el => !combine(...others).some(exclude => el === exclude))