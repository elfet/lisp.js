export let stack = [{}];

export function pushStack(definition, args) {
  let map = {};
  definition.forEach((arg, i) => map[arg.name] = args[i]);
  stack.push(map);
}

export function popStack() {
  stack.pop();
}
