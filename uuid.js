
/**
 * 生成 uuid 随机字符串
 *
 * @function uuid
 * @memberOf strings
 * @param  {Number} len 长度
 * @param  {Number} radix 基数
 * @return {String}
 */
function uuid(len, radix) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length
 
  if (len) {
   for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
   let r
   uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
   uuid[14] = '4'
 
   for (let i = 0; i < 36; i++) {
    if (!uuid[i]) {
     r = 0 | Math.random() * 16
     uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
    }
   }
  }
 
  return uuid.join('')
}


export default uuid