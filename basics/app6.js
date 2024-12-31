"use strict";
const manager = {
    id: 1,
    startDate: new Date(),
    name: 'John Doe',
    department: 'IT',
};
manager.name = 'Charith Wick';
manager.id = 22500; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(manager);
