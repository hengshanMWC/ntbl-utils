
/**
 * 函数重载
 *
 * @function addMethod
 * @memberOf functions
 * 
 * @param  {Object}   obj  
 * @param  {String}   name 
 * @param  {Function} fn
 *
 * @example
 *
 * people = {
 *   values: ['Keanu Reeves', 'Jean Leo', 'Mariah Carey']
 * }
 * 
 * addMethod(people, 'find', function () {
 *   return this.values
 * })
 *
 * addMethod(people, 'find', function (firstName) {
 *   return this.values.filter(e => new RegExp(`^${firstName}`).test(e))
 * })
 *
 * people.find()
 * // ["Keanu Reeves", "Jean Leo", "Mariah Carey"]
 * people.find('Jean')
 * // ["Jean Leo"]
 */
export default (obj, name, fn) => {
  const old = obj[name]
  obj[name] = function (...args) {
     return   args.length === fn.length ? fn.apply(this, args) 
            : typeof old === 'function' ? old.apply(this, args)
            : undefined
  }
}