"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polish_pizzeria_1 = require("./polish-pizzeria");
const american_pizzeria_1 = require("./american-pizzeria");
const pizza_model_1 = require("./pizza.model");
const laStrada = new polish_pizzeria_1.polishPzeria('La Strada', true);
const americanHouse = new american_pizzeria_1.americanPzeria('americanPizzeria', false);
const venezia = new polish_pizzeria_1.polishPzeria('venezia', false);
const isOvenInVeneziaFull = venezia.isOvenFull();
const capriciosa = {
    name: 'Capriciosa',
    price: '21zł',
    size: 'laerge',
    status: pizza_model_1.Status.Ordered,
    cancelable: true
};
venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, 1);
venezia.changeSize(0, 'large');
venezia.checkPrice(capriciosa);
console.log(venezia, americanHouse);
