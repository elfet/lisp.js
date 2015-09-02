# lisp.js

```js
let expr =
  [list,
    [def, bar, [fn, [x, y], [plus, x, y]]],
    [def, foo, [fn, [x], [bar, x, 100]]],
    [def, y, [fn, [x, y], [tail, [list, [def, i, [bar, y, x]], [foo, i]]]]],
    [log, [foo, [multiply, 2, [foo, 10]]]],
    [log, [bar, 'a', 'b']],
    [log, [y, 'a', 'b']],
    [console.log, [list, 1, 2]]
  ];
```