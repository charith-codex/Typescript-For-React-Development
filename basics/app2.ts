// --------------- Interfaces and Types

interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
  id: 1,
  name: 'John',
  greet(message) {
    console.log(message);
  },
};

// console.log(User.age);
User.greet('Hello');
