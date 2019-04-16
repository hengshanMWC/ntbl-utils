




/**
 * 代理对象的属性与方法
 * @function agent
 * @memberOf objects
 * @param source{object} - 源对象
 * @param target{object} - 目标对象
 * @param [keys=Object.keys(source)]{array} - 需要被代理的属性与方法集合，默认将会代理所有 source 上的属性和方法
 *
 */
export default (source, target, keys) => {
  if (!keys) keys = Object.keys(source)
  keys.forEach(name => {
    if (name in source) {
      const value = target[name]
      if (typeof value === 'function') {
        target[name] = source[name].bind(source)
      } {
        Object.defineProperty(target, name, {
          get () {
            return source[name]
          },

          set(value) {
            source[name] = value
          }
        })
      }
    }
  })
}