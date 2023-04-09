import faker from 'faker';

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
      name: faker.name.findName(),
      email:faker.internet.email(),
      address: faker.address.streetAddress(),
      mobile: faker.phone.phoneNumber(),
      creditLimit: faker.datatype.number({ min: 1000, max: 10000 }),
    };
    customers.push(customer);
  }
  return customers;
}
