import strings from '../../strings'

const {camelCase} = strings



test ('camelCase', () => {
  expect(camelCase('a_b')).toBe('aB')
  expect(camelCase('a b')).toBe('aB')
  expect(camelCase('a-_ b')).toBe('aB')
  expect(camelCase('a:b')).toBe('aB')
  expect(camelCase('AbDAdw-CB')).toBe('AbDAdwCB')
  expect(camelCase('abd')).toBe('abd')
})
