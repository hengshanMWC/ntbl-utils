/**
 * 去重
 *
 * @function union
 * @memberOf arrays
 * 
 * @param  {Array} arrays 
 * @return {Array}
 *
 * @example
 *
 * union([1, 2, 3], [101, 2, 1, 10], [2, 1]) 
 * // [1, 2, 3, 101, 10]
 * 
 */

export default (...arrays) => [...new Set([].concat(...arrays))]