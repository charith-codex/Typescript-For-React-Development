//------------- Unions

// type IDType = string | number;

// // const printID = (id: string | number) => {
// const printID = (id: IDType) => {
//   console.log(id);
// };

// printID(5); // 5 or '5'

// --------------- Intersections

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: string;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const singInContact = (employee: Employee): void => {
  console.log(`${employee.name} has signed in using ${employee.email}`);
};

singInContact({
  name: 'John Doe',
  creditScore: 99,
  id: '123',
  email: 'abc@mail.com',
});
