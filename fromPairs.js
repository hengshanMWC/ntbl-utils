/**
 * 将 pairs 数组转换为对象
 *
 * @function fromPairs
 * @memberOf arrays
 * 
 * @param  {Array} pairs
 * @return {Object}
 *
 * @example
 * fromPairs([['a', 1], ['b', 2]])
 * // {a: 1, b: 2}
 */

export default pairs => pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {})