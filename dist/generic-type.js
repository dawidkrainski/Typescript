"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        this.data.shift();
    }
    getAll() {
        return this.data;
    }
}
/*const people = new Queue<string>();
people.push('2');


const numbers = new Queue<number>();
numbers.push(2);*/
const productItems = new Queue();
productItems.push({ id: 2, name: 'product 2', code: 'AA333' });
