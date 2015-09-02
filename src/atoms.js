import { stack } from './stack';

let index = 0;

export default class Atom {
  constructor(name) {
    this.name = name || 'atom#' + index++;
  }

  value() {
    return this.lookUp(stack.length - 1, this.name);
  }

  lookUp(level, name) {
    if (stack[level][name]) {
      return stack[level][name];
    } else if (level > 0) {
      return this.lookUp(level - 1, name)
    } else {
      return undefined;
    }
  }
}

export let x = new Atom('x');
export let y = new Atom('y');
export let i = new Atom('i');
export let foo = new Atom('foo');
export let bar = new Atom('bar');
