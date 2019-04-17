import objects from '../../objects'

const {defaults, agent, tailSpain, toPairs, only} = objects


test ('defaults', () => {
  const source = { type: 'sideLeft', dom: false }
  const target = { type: 'sideTop', show: true}

  expect(defaults(source, target)).toEqual({type: 'sideLeft', dom: false, show: true})
})

describe ('agent', () => {
  const car = {
    mileage: 1000,
    start () {
      this.mileage++
    },
    stop () {
      this.mileage--
    }
  }

  const bus = {}
  const bus2 = {}

  test('代理指定属性和方法' , ()  => {
    agent(car, bus, ['start', 'mileage', 'bad'])
    bus.mileage = 2000
    expect(car.mileage).toBe(2000)
    bus.start()
    expect(car.mileage).toBe(2001)
    expect(bus.stop).not.toBeFunction
  })

  test('代理所有属性和方法', () => {
    agent(car, bus2)
    expect(bus2.stop).toBeFunction
    bus2.stop()
    expect(car.mileage).toBe(2000)
  })
})

test ('tailSpain', () => {
  const data = {
    a: {
        b: [1, 2, 3, {
            c: 10
          }]
      }
    }
  expect(tailSpain(data, 'a.b.3.c')).toBe(10)
  expect(tailSpain(data, 'a.b.3.c.d')).toBeUndefined
  expect(tailSpain(data, 'a.d.c')).toBeUndefined
  expect(tailSpain(data, 'a.d.c', 3)).toBe(3)
  expect(tailSpain(data, '', 3)).toBe(3)
})

test ('toPairs', () => {
  expect(toPairs({a: 1, b: 2})).toEqual([['a', 1], ['b', 2]])
})

test ('only', () => {
  expect(only({a: 1, b: 2, c: 3}, 'a b d')).toEqual({a: 1, b: 2})
  expect(only({a: 1, b: 2, c: 3}, ['a', 'b'])).toEqual({a: 1, b: 2})
})


