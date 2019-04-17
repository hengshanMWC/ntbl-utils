import union from './union'

/**
 * 交集
 *
 * @function intersection
 * @memberOf arrays
 * 
 * @param  {Array} arrays 
 * @return {Array}
 *
 * @example
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) 
 * // => [1, 2]
 */

export default (...arrays) => union(...arrays).filter(toFind => arrays.every(arr => arr.some(el => el === toFind)))