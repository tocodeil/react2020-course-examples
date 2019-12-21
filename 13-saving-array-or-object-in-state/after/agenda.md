# Saving mutable objects in State

1. setState and Mutable Objects

2. Bug: Let's save MUTABLE selectedItems in state

3. Fix: Let's save a different object on each update

4. Copying arrays and Objects (but consider immer)

new Set([]);

const arr = [10, 20, 30];
const newArray = [...arr];
newArray[0] = 10;

const obj = { a: 10, b: 20 };
const newObj = {...obj};
newObj.a = 50;
setStuff(newObj);
