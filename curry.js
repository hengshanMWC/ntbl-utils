/**
 * 柯里化
 *
 * @function curry
 * @memberOf functions
 *
 * @param  {Function} fn 
 * @return {Function}
 *
 * 
 */

export default fn => {
    const arity = fn.length
    const curried = (...args) =>
        args.length < arity ? (...more) => curried(...args, ...more) : fn(...args)
    return curried
}