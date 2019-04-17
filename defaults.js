/**
 * 混合对象默认值
 *
 * @function defaults
 * @memberOf objects
 *
 * @param  {object} source
 * @param  {object} target  
 * @return {object}
 *
 */

export default (source, target) => {
  for (let key in target) {
    if (source[key] === undefined && target.hasOwnProperty(key))
      source[key] = target[key]
  }

  return source
}




