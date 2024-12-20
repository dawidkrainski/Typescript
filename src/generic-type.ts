


interface Item {
    name: string;

}


interface Item {
    code: string;
}


interface ProductsQueue <T> {
    getAll(): T[];
}

class Queue<T extends Item> implements ProductsQueue<T>{
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data;
    }
}

interface ProductItem {
    id: number;

}

/*const people = new Queue<string>();
people.push('2');


const numbers = new Queue<number>();
numbers.push(2);*/

const productItems = new Queue<ProductItem & Item>();
productItems.push({id: 2, name: 'product 2', code: 'AA333'});