const { Suite } = require('benchmark')

const { stringify } = require('./stringify')
const { parse } = require('./parse')

const json = JSON.stringify({
  null: null,
  true: true,
  false: false,
  posInt: 1234567890,
  posFloat: 3.141592,
  negInt: -123456790,
  negFloat: -3.141592,
  string: 'hello world!',
  array: [null, true, false, 1234567890, 3.141592, -123456790, -3.141592, 'hello world!', [1, [2, [3, [4, [5, [6, [7, [8, [9, []]]]]]]]]], { obj1: { obj2: { obj3: { obj4: { obj5: { obj6: { obj7: { obj8: { obj9: {} } } } } } } } } }],
  object: {
    null: null,
    true: true,
    false: false,
    posInt: 1234567890,
    posFloat: 3.141592,
    negInt: -123456790,
    negFloat: -3.141592,
    string: 'hello world!',
    array: [null, true, false, 1234567890, 3.141592, -123456790, -3.141592, 'hello world!', [1, [2, [3, [4, [5, [6, [7, [8, [9, []]]]]]]]]], {}],
    obj1: { obj2: { obj3: { obj4: { obj5: { obj6: { obj7: { obj8: { obj9: {} } } } } } } } }
  },
})

if (JSON.stringify(JSON.parse(json)) !== stringify(parse(json))) {
  console.error('Whoops')
  process.exit(1)
}

const suite = new Suite()
  .add('parse#native', () => {
    JSON.parse(json)
  })
  .add('parse#js', () => {
    parse(json)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })