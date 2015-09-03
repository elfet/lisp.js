# lisp.js

```js
let expr =
  [begin,
    [def, factorial, [fn, [x],
      [log, x],
      [if_, [more, x, 1],
        [multiply, x, [factorial, [minus, x, 1]]],
        x]]],
    [factorial, 10]
  ];
```