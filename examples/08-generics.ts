// 08-generics.ts
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("hello"));
console.log(identity<number>(123));