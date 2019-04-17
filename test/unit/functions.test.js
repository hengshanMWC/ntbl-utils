import functions from '../../functions'

const {addMethod, compose, curry} = functions


test ('addMethod', () => {
  const people = {
    values: ['Keanu Reeves', 'Jean Leo', 'Mariah Carey'],
  }

  addMethod(people, 'find', function () {
    return this.values
  })

  addMethod(people, 'find', function (firstName) {
    return this.values.filter(e => new RegExp(`^${firstName}`).test(e))
  })

  expect(people.find()).toEqual(["Keanu Reeves", "Jean Leo", "Mariah Carey"])
  expect(people.find('Jean')).toEqual(["Jean Leo"])
  expect(people.find('Jean', 'test')).toBeUndefiend
})

test ('compose', () => {
  const sum = curry((a, b) => a + b)
  const multiplication = curry((a, b) => a * b)
  const arithmetic = compose(sum(3), multiplication(10))
  expect(arithmetic(2)).toBe(50)
})


test ('curry', () => {
  const sum = curry((a, b) => a + b)
  const one = sum(2)
  const two = one(8)
  expect(one).toBeFunction
  expect(two).toBe(10)
})


