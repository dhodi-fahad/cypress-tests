/**
 * Add at add customer page
 *  - add and edit
 * Add at cash sale.
 * Add at credit sale.
 *
 */

import {adminPassword, adminUsername} from "../../utils/util";
import {Customer, generateCustomers} from "../../utils/dataGenerators/customer";
import navigate from "../../utils/views";
import {CASH_SALE, CREDIT_SALE} from "../../utils/urls";

describe('Customer Addition', ()=>{
    beforeEach(() => {
        // login
        cy.login(adminUsername, adminPassword)


    });

    it('Should add new customer at add customer page',()=>{
        let customers: Customer[] = [];
        customers = generateCustomers(3)
        cy.addCustomers(customers)
    })

    it('Should add new customer at Make Cash Sale page',()=>{
        let customer = generateCustomers(1)[0]
        let cashSale = navigate(CASH_SALE)
        cashSale.clickQuickAddCustomer()
        cy.quickAddCustomer(customer)
        cashSale.enterCustomer(customer.name)
    })

    it('Should add new customer add Make Credit Sale page', ()=>{
        let customer = generateCustomers(1)[0]
        let creditSale = navigate(CREDIT_SALE)
        creditSale.clickQuickAddCustomer()
        cy.quickAddCustomer(customer)
        creditSale.enterCustomer(customer.name)
        creditSale.assertCreditLimit(customer.creditLimit)
    })

    it('Should edit customer details',()=>{

        let old_customer = generateCustomers(1)
        cy.addCustomers(old_customer)
        let new_customer = generateCustomers(1)
        cy.editCustomer(old_customer[0], new_customer[0])
    })
})