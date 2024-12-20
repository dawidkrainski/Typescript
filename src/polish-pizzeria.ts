import {Pizzeria} from './pizzeria';
import {Pizza, Status} from "./pizza.model";

interface CancelablePizza{
    cancelable: boolean;
}

export class polishPzeria extends Pizzeria {
    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }

    order(pizza: Pizza & CancelablePizza): void {
        this.pizzasInOrder.push(pizza);
    }

    bake(): string {
        return 'Pizza is being baked';
    }
}