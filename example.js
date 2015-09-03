import evaluate from './src/evaluator';
import atom, { x, y, i, j } from './src/atoms';
import { list, def, fn, begin, if_ } from './src/operators';
import { plus, log, multiply, tail, more, minus } from './src/functions';

let factorial = atom();
let expr =
  [begin,
    [def, factorial, [fn, [x],
      [log, x],
      [if_, [more, x, 1],
        [multiply, x, [factorial, [minus, x, 1]]],
        x]]],
    [factorial, 10]
  ];
console.log('Result', evaluate(expr));
