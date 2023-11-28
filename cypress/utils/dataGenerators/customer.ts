// import faker from 'faker';

import {generateData, getRandomInt} from "./index";

export interface Customer {
    category:string;
    name: string;
    email:string;
    address: string;
    mobile: string;
    creditLimit: number;
}

export function generateCustomers(count: number): Customer[] {
    const customers: Customer[] = [];
    for (let i = 0; i < count; i++) {
        const customer: Customer = {
            category: 'Walk in Customer',
            name: 'Customer-'+generateData(),
            email:generateData()+'@gmail.com',
            address: generateData(),
            mobile: '07509'+getRandomInt(10)+'1'+getRandomInt(10)+'0'+getRandomInt(10),
            creditLimit: 40000,
        };
        customers.push(customer);
    }
    return customers;
}
