// ------------ Generics ------------

class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const usernames = new StorageContainer<string>(); // string
usernames.addItem('John');
usernames.addItem('Sarah');
console.log(usernames.getItem(0));

const numOfLaptops = new StorageContainer<number>(); // number
numOfLaptops.addItem(2);
numOfLaptops.addItem(5);
console.log(numOfLaptops.getItem(1));
