import Atom from './atoms';
import { OPERATORS } from './operators';

export default function evaluate(expr) {
  let [head, ...tail] = expr;

  if (OPERATORS.indexOf(head) != -1) {
    // Operators independently decide when to evaluate.
    return head.apply(null, tail);
  } else if (typeof head == "function" || head instanceof Atom) {
    if (head instanceof Atom) {
      // Atom may contains function to apply.
      head = head.value();
    }
    // Evaluate each of func arguments.
    return head.apply(null, tail.map(evaluate));
  } else {
    // Return rest values or atom values.
    return expr instanceof Atom ? expr.value() : expr;
  }
}
