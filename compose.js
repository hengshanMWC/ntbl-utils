

/**
 * 组合
 *
 * @function compose
 * @memberOf functions
 * 
 * @param  {Function} funcs 
 * @return {Function} 
 */
export default (...funcs) =>  value => funcs.reduce((a, b) => b(a), value)