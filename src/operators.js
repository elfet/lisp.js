import evaluate from './evaluator';
import { stack, pushStack, popStack } from './stack';

export const OPERATORS = [quote, def, fn, list];

export function quote(...args) {
  return args;
}

export function def(atom, value) {
  stack[stack.length - 1][atom.name] = evaluate(value);
}

export function fn(definition, body) {
  return (...args) => [pushStack(definition, args), evaluate(body), popStack()][1];
}

export function list(...args) {
  return args.map(evaluate);
}
