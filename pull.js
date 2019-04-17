/**
 * 移除所有与给定值相等的元素，返回一个新数组
 *
 * @function pull
 * @memberOf arrays
 * 
 * @param  {Array} arr
 * @param  {Array} values 
 * @return {Array}
 *
 * @example
 * pull([1, 2, 3, 4], [2, 3, 10])
 * // [1, 4]
 */

export default (arr, ...values) => arr.filter(e => !~values.indexOf(e))