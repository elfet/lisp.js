import { stack } from './stack';

function lookUp(level, name) {
  if (stack[level].hasOwnProperty(name)) {
    return stack[level][name];
  } else if (level > 0) {
    return lookUp(level - 1, name)
  } else {
    return undefined;
  }
}

let index = 0;

export class Atomic {
  constructor(name) {
    this.name = name || 'atom#' + index++;
  }

  value() {
    return lookUp(stack.length - 1, this.name);
  }
}

export default function atom(name = null) {
  return new Atomic(name);
}

// Common atoms:
export let x = atom('x');
export let y = atom('y');
export let i = atom('i');
export let j = atom('j');
