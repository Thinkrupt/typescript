// 07-classes.ts
class Person {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const person = new Person("Vivens", 24);
console.log(person.greet());