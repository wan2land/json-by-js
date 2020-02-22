# JSON by javascript

- [JSON.stringify](./stringify.js)

## stringify example

```js
const { stringify } = require('./stringify')

const json = stringify({
  string: "foo",
  number: 30,
  number2: 3.14156,
  true: true,
  false: false,
  null: null,
  infinity: Infinity,
  ninfinity: -Infinity,
  nan: NaN,
  re: /hello/gi,
  array: [1,2,3],
  object: {
    foo: "hello"
  }
})

console.log(json) // {"string":"foo","number":30,"number2":3.14156,"true":true,"false":false,"null":null,"infinity":Infinity,"ninfinity":-Infinity,"nan":NaN,"re":/hello/gi,"array":[1,2,3],"object":{"foo":"hello"}}
```
