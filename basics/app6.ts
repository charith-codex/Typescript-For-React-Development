// ---------- Read-Only Variables

interface Manager {
  readonly id: number; // Read-Only Variable
  readonly startDate: Date;

  name: string;
  department: string;
}

const manager: Manager = {
  id: 1,
  startDate: new Date(),
  name: 'John Doe',
  department: 'IT',
};

manager.name = 'Charith Wick';
// manager.id = 22500; // Cannot assign to 'id' because it read-only

console.log(manager);
