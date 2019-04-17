
/**
 * 数组分块
 *
 * @function chunk
 * @memberOf arrays
 *
 * @param  {array} arr
 * @return {number} size
 *
 *
 */

export default (arr, size) => {
  const length = arr == null ? 0 : arr.length
  if (!length || size < 1) return []

  let index = 0
  let result = []
  while (index < length) {
    result[index / size] = arr.slice(index, index += size)
  }

  return result
}
