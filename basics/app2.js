"use strict";
// --------------- Interfaces and Types
const User = {
    id: 1,
    name: 'John',
    greet(message) {
        console.log(message);
    },
};
// console.log(User.age);
User.greet('Hello');
