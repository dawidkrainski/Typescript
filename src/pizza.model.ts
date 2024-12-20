export interface Pizza {
    price: number | string;
    size: String;
    name: string;
    status: Status;
}

export enum Status {
    Ordered,
    Baked,
    Sold
}

export enum Size{
    small= 'small',
    medium= 'medium',
    large= 'large',

}

export type Sizekey = keyof typeof Size;

export interface Cash{
    type: 'cash';
    currency: string;
}

export interface debitCard{
    type: 'debitCard';
    code: string;
}

export interface onlinePayment{
    type: 'onlinePayment';
    bankAccount: number;
}

export type paymentMethod = Cash | debitCard | onlinePayment;