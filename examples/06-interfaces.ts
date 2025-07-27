// 06-interfaces.ts
interface User {
  id: number;
  name: string;
  email?: string;
}

const newUser: User = {
  id: 1,
  name: "Vivens",
};

console.log(newUser);