// 10-advanced-types.ts
type UserInfo = {
  name: string;
  age: number;
};

type Admin = UserInfo & { role: string };

const admin: Admin = {
  name: "Vivens",
  age: 24,
  role: "superadmin",
};

console.log(admin);