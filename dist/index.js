"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "aman", age: 22 }, {
    name: "naman",
    age: 21,
});
console.log(age);
