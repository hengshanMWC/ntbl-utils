/**
 * 对象路径查询，避免臃长的 &&
 *
 * @function tailSpain
 * @memberOf objects
 *
 * @param {array|object} o - 需要查询的对象
 * @param {string} path -  路径
 * @param defaultValue - 当未查询到提供的默认值
 * @returns {*}
 * @example
 *
 * data = {
 *   a: {
 *     b: [1, 2, 3, {
 *       c: 10
 *     }]
 *   }
 * }
 *
 * tailSpain(data, 'a.b.3.c')  // 10
 * tailSpain(data, 'a.d')      // undefined
 * tailSpain(data, 'a.d', 3)   // 3，提供默认值
 */
export default (o, path, defaultValue) => {
  const args = path.match(/[^\.\[\]]+/g)
  if (args) {
    try {
      return args
        .map(arg => Object.is(Number(arg), NaN) ? arg : Number(arg))
        .reduce((ret, res) => ret[res], o) || defaultValue
    } catch (e) {
      return defaultValue
    }
  }

  return defaultValue
}