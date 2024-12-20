"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
class Pizzeria {
    constructor(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOwen = 10;
        this.recipes = [];
        this._manager = 'John Doe';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    changeStatus(index, status) {
        this.pizzasInOrder[index].status = status;
    }
    changeSize(index, size) {
        this.pizzasInOrder[index].size = size;
    }
    checkPrice({ price }) {
        if (typeof price === 'string') {
            console.log('price is string', price.toLowerCase());
        }
        else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        }
    }
    getPaymentMethod(payment) {
        /*    switch (payment.type){
                case 'cash':
                    console.log(`Payment in cash in ${payment.currency}`);
                    break;
                case 'debitCard':
                    console.log(`Payment with debit card with code ${payment.code}`);
                    break;
                case 'onlinePayment':
                    console.log(`Payment with online payment with BankAccount ${payment.bankAccount}`);
                    break
            }*/
        if (payment.type === 'debitCard') {
            return `Payment in debitcard with code ${payment.code}`;
        }
        console.log(payment);
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOwen;
    }
}
exports.Pizzeria = Pizzeria;
Pizzeria.id = 0;
