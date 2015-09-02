export function call(func, ...args) {
  return func.apply(null, args);
}

export function head(list) {
  return list[0];
}

export function tail(list) {
  return list.slice(1);
}

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

export function log(...args) {
  return console.log(...args);
}
