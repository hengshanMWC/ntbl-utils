const SPECIAL_CHARS_REGEXP = /([\:\-\_ ]+(.))/g

/**
 * 将以下划线、短横线、空格或分号命名的字符串转换为驼峰命名
 * @function camelCase
 * @memberOf strings
 * @param  {String} name
 * @return {String}
 */
function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => offset
    ? letter.toUpperCase()
    : letter)
}

export default camelCase