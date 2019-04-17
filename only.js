/**
 * 对象白名单
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

export default (obj, keys) => {
  if (typeof keys === 'string') keys = keys.split(/ +/)
  return keys.reduce((ret, key) => {
    if (obj[key] == null) return ret
    ret[key] = obj[key]
    return ret
  }, {})
}