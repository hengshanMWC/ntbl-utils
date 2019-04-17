/**
 * 将对象转换为 pairs 数组
 *
 * @function toPairs
 * @memberOf objects
 * 
 * @param  {Object} obj
 * @return {Array}
 *
 * @example
 * toPairs({a: 1, b: 2})
 * // [['a', 1], ['b', 2]]
 */

export default obj => [...Object.entries(obj)]