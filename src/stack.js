export let stack = [{}];

export function pushStack(params, args) {
  let map = {};
  params.forEach((arg, i) => map[arg.name] = args[i]);
  stack.push(map);
}

export function popStack() {
  stack.pop();
}
