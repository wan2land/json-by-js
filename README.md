# JSON by javascript

다음 두 포스팅을 위해 작성된 코드입니다.

- [파서 만들기 (1) - JSON.stringify](https://wani.kr/posts/2020/02/11/make-parser-1/)
- [파서 만들기 (2) - JSON.parse](https://wani.kr/posts/2020/02/22/make-parser-2/)

다음 두개의 함수를 참고하시면 됩니다.

- [JSON.stringify](./stringify.js)
- [JSON.parse](./parse.js)

## Example

```js
const { stringify } = require('./stringify')
const { parse } = require('./parse')

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


console.log(parse(json)) 
// { string: 'foo',
//   number: 30,
//   number2: 3.14156,
//   true: true,
//   false: false,
//   null: null,
//   infinity: Infinity,
//   ninfinity: -Infinity,
//   nan: NaN,
//   re: /hello/gi,
//   array: [ 1, 2, 3 ],
//   object: { foo: 'hello' } }
```
