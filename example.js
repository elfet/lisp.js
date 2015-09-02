import evaluate from './src/evaluator';
import { x, y, i, foo, bar } from './src/atoms';
import { list, def, fn } from './src/operators';
import { plus, log, multiply, tail } from './src/functions';

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
console.log('Result', evaluate(expr));
