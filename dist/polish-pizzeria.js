"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polishPzeria = void 0;
const pizzeria_1 = require("./pizzeria");
class polishPzeria extends pizzeria_1.Pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    bake() {
        return 'Pizza is being baked';
    }
}
exports.polishPzeria = polishPzeria;
