"use strict";
//------------- Unions
const singInContact = (employee) => {
    console.log(`${employee.name} has signed in using ${employee.email}`);
};
singInContact({
    name: 'John Doe',
    creditScore: 99,
    id: '123',
    email: 'abc@mail.com',
});
