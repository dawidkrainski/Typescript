import {polishPzeria} from "./polish-pizzeria";
import {americanPzeria} from "./american-pizzeria";
import {Size, Status} from "./pizza.model";

const laStrada = new polishPzeria('La Strada', true);
const americanHouse = new americanPzeria('americanPizzeria', false);
const venezia = new polishPzeria('venezia', false);
const isOvenInVeneziaFull = venezia.isOvenFull();

const capriciosa = {
    name: 'Capriciosa',
    price: '21zł',
    size: 'laerge' as Size,
    status: Status.Ordered,
    cancelable: true
}
venezia.order(capriciosa);
americanHouse.order(capriciosa);
venezia.changeStatus(0, 1);
venezia.changeSize(0, 'large');
venezia.checkPrice(capriciosa);
console.log(venezia, americanHouse);