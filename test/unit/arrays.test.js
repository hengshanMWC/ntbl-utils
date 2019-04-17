import arrays from '../../arrays'

const {combine, compact, union, difference, intersection, pull, pullAt, chunk} = arrays


test ('combine', () => {
  expect(combine([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
})

test ('compact', () => {
  expect(compact([null, undefined, '', 0, -0, +0, NaN, 1, [], {}])).toEqual([1, [], {}])
})

test ('union', () => {
  expect(union([1, 2, 2, NaN, NaN])).toEqual([1, 2, NaN])
})

test ('difference', () => {
  expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
})

test ('intersection', () => {
  expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
})

test ('pull', () => {
  expect(pull([1, 2, 2, 3], 1, 2)).toEqual([3])
})

test ('pullAt', () => {
  expect(pullAt([1, 2, 3], 1)).toEqual([1, 3])
})



test ('chunk', () => {
  expect(chunk(null, 2)).toEqual([])
  expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])
})


