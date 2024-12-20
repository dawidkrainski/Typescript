import {Pizzeria} from './pizzeria';

export class americanPzeria extends Pizzeria {
    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }

    bake(): string {
        return 'Pizza is being ... please wait';
    }
}