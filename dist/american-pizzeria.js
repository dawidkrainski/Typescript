"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.americanPzeria = void 0;
const pizzeria_1 = require("./pizzeria");
class americanPzeria extends pizzeria_1.Pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    bake() {
        return 'Pizza is being ... please wait';
    }
}
exports.americanPzeria = americanPzeria;
