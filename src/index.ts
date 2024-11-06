interface User {
  name: string;
  age: number;
}
function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}
const age = sumOfAge(
  { name: "aman", age: 22 },
  {
    name: "naman",
    age: 21,
  }
);
console.log(age);
