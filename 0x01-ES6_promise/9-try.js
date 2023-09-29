export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push('guardrail was processed');
  }

  return queue;
}
