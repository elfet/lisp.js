/*
 * Manipulating
 */

export function call(func, ...args) {
  return func.apply(null, args);
}

export function head(list) {
  return list[0];
}

export function tail(list) {
  return list.slice(1);
}

export function end(list) {
  return list.length > 0 ? list[list.length - 1] : undefined;
}

export function concat(a, b) {
  return a.concat(b);
}

/*
 * Math
 */

export function plus(...args) {
  return args.reduce((x, y) => x + y);
}

export function minus(...args) {
  return args.reduce((x, y) => x - y);
}

export function multiply(...args) {
  return args.reduce((x, y) => x * y);
}

export function divide(...args) {
  return args.reduce((x, y) => x / y);
}

/*
 * Bool Expr
 */

export function equals(a, b) {
  return a === b;
}

export function more(a, b) {
  return a > b;
}

export function less(a, b) {
  return a < b;
}

export function and(...args) {
  return args.reduce((x, y) => x || y);
}

export function or(...args) {
  return args.reduce((x, y) => x || y);
}

export function not(x) {
  return !x;
}

/*
 * Other
 */

export function log(...args) {
  return console.log(...args);
}

export function range(start, end, step = 1) {
  var range = [];

  if (end < start) {
    step = -step;
  }

  while (step > 0 ? end >= start : end <= start) {
    range.push(start);
    start += step;
  }

  return range;
}
