import {Orderable} from "./orderable";
import {paymentMethod, Pizza, Sizekey, Status} from "./pizza.model";



export abstract class Pizzeria implements Orderable {
    static id = 0;
    id: number;
    name: string;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOwen: number = 10;
    protected recipes: string[] = []
    private _manager = 'John Doe';

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    changeStatus(index: number, status: Status){
        this.pizzasInOrder[index].status = status;
    }

    changeSize(index: number, size: Sizekey){
        this.pizzasInOrder[index].size = size;
    }

    checkPrice({price}: Pizza ){
        if (typeof price === 'string'){
            console.log('price is string', price.toLowerCase())
        } else if (typeof price === 'number'){
            console.log('price is number', price.toFixed())
        }
    }

    getPaymentMethod(payment: paymentMethod){
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

        if(payment.type === 'debitCard'){
            return `Payment in debitcard with code ${payment.code}`
        }

        console.log(payment)
    }

    order(pizza: Pizza): void {
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

    abstract bake(): string;

}


