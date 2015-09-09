import evaluate from './src/evaluator';
import atom, { x, y, i, j } from './src/atoms';
import { list, def, fn, begin, if_, quote, loop, put } from './src/operators';
import { plus, log, multiply, tail, more, minus } from './src/functions';

let expr =
  [begin,
    [def, i, 10],
    [loop, [more, i, 0],
      [log, i],
      [put, i, [minus, i, 1]]]
  ];
console.log('Result', evaluate(expr));


/* TODO: Implement macro.
let aif = atom();
let it = atom();
let if_c = atom();
let then_c = atom();
let else_c = atom();

let expr =
  [begin,
    [def, aif, [macro, [if_c, then_c, else_c],
      [[quote, def, it], if_c],
      [[quote, if_, it], then_c, else_c]]],
    [aif, [plus, 5, 10], [quote, [multiply, it, 2]], 10]
  ];
console.log('Result', evaluate(expr));
*/
