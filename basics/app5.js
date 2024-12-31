"use strict";
// ------------ Generics ------------
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer(); // string
usernames.addItem('John');
usernames.addItem('Sarah');
console.log(usernames.getItem(0));
const numOfLaptops = new StorageContainer(); // number
numOfLaptops.addItem(2);
numOfLaptops.addItem(5);
console.log(numOfLaptops.getItem(1));
