export function nextId(items) {
  return Math.max(...items.map(i => i.id)) + 1;
}

