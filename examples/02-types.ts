// 02-types.ts
type Status = "active" | "inactive";

let userStatus: Status = "active";
let score: number | null = null;

function printStatus(status: Status): void {
  console.log(`Status: ${status}`);
}

printStatus(userStatus);