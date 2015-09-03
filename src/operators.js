import evaluate from './evaluator';
import { end } from './functions';
import { stack, pushStack, popStack } from './stack';

export const OPERATORS = [quote, def, fn, list, begin, if_];

export function quote(...args) {
  return args;
}

export function def(atom, value) {
  stack[stack.length - 1][atom.name] = evaluate(value);
}

export function fn(definition, ...body) {
  return (...args) => [pushStack(definition, args), end(body.map(evaluate)), popStack()][1];
}

export function list(...args) {
  return args.map(evaluate);
}

export function begin(...args) {
  return end(args.map(evaluate));
}

export function if_(cond, a, b) {
  return evaluate(cond) ? evaluate(a) : evaluate(b);
}
