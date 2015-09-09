import evaluate from './evaluator';
import { end } from './functions';
import { stack, pushStack, popStack } from './stack';

export const OPERATORS = [quote, def, put, fn, list, begin, if_, loop];

export function quote(...arg) {
  return [...arg];
}

export function def(atom, value) {
  stack[stack.length - 1][atom.name] = evaluate(value);
}

export function put(atom, value) {
  stack[stack.length - 1][atom.name] = evaluate(value);
}

export function fn(params, ...body) {
  return (...args) => [pushStack(params, args), end(body.map(evaluate)), popStack()][1];
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

export function loop(cond, ...body) {
  let lastResult = null;
  while (evaluate(cond)) {
    lastResult = body.map(evaluate);
  }
  return lastResult;
}
