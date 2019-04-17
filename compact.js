/**
 * 去假值 （0, NaN, '', false, undefined, null）
 *
 * @function compact
 * @memberOf arrays
 * 
 * @param  {Array} arr 
 * @return {Array}
 */

export default arr => arr.filter(Boolean)