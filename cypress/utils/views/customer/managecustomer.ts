import { ListUtils, waitTime } from "../../util"
import {convertAmountToUGX} from "../../dataGenerators";

/**
 * Page Object class for the Customer List page.
 */
export class CustomerListPage {

    url = 'managecustomer/manage_customer'

    /**
     * Visits the Url to  Manage Customer page
     * @return {this}  object instance of CreateInvoice class.
     */
    visit(){
        cy.visit(this.url)
        cy.wait(waitTime)
        return this
    }

    /**
     * Search for a customer by name
     * @param name - The name of the customer to search for
     * @returns The current page object
     */
    searchCustomerByName(name: string): this {
        cy.get('[data-testid="customer-list-search"]').clear().type(name);
        cy.wait(500);
        return this;
    }

    /**
     * Get the number of customers currently displayed on the page
     * @returns The number of customers currently displayed
     */
    getNumberOfCustomers(): number {
        // @ts-ignore
        return cy.get('[data-testid^="customer_name-"]').its('length');
    }

    /**
     * Confirm that a customer with the given name is displayed in the list
     * @param name - The name of the customer to confirm
     * @param row - The row number of the customer in the list (default: 0)
     * @returns The current page object
     */
    confirmCustomerName(name: string, row = 0): this {
        cy.get(`[data-testid="customer_name-${row}"]`).should('contain.text', name);
        cy.wait(500);
        return this;
    }

    /**
     * Confirm that a customer with the given address is displayed in the list
     * @param address - The address of the customer to confirm
     * @param row - The row number of the customer in the list (default: 0)
     * @returns The current page object
     */
    confirmCustomerAddress(address: string, row = 0): this {
        cy.get(`[data-testid="customer_address-${row}"]`).should('contain.text', address);
        cy.wait(500);
        return this;
    }

    /**
     * Confirm that a customer with the given mobile number is displayed in the list
     * @param mobile - The mobile number of the customer to confirm
     * @param row - The row number of the customer in the list (default: 0)
     * @returns The current page object
     */
    confirmCustomerMobile(mobile: string, row = 0): this {
        cy.get(`[data-testid="customer_mobile-${row}"]`).should('contain.text', mobile);
        cy.wait(500);
        return this;
    }

    /**
     * Confirm that a customer with the given credit limit is displayed in the list
     * @param creditLimit - The credit limit of the customer to confirm
     * @param row - The row number of the customer in the list (default: 0)
     * @returns The current page object
     */
    confirmCustomerCreditLimit(creditLimit: string, row = 0): this {
        cy.get(`[data-testid="credit_limit-${row}"]`).should('contain.text', convertAmountToUGX(+creditLimit));
        cy.wait(500);
        return this;
    }

    /**
     * Clicks the "Edit" button for a customer in the list.
     *
     * @param row The row number of the customer to edit (default is 0, i.e. the first customer in the list).
     * @returns The current instance of the `CustomerListPage` class.
     */
    clickEditCustomerButton = (row: number = 0): this => {
        cy.get(`[data-testid="edit_customer-${row}"]`).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the "Deactivate" button for a customer in the list.
     *
     * @param row The row number of the customer to deactivate (default is 0, i.e. the first customer in the list).
     * @returns The current instance of the `CustomerListPage` class.
     */
    clickDeactivateCustomerButton = (row: number = 0): this => {
        cy.get(`[data-testid="deactivate_customer-${row}"]`).click()
        cy.wait(waitTime)
        return this
    }
}



/**
 * Deactivate Customer dialogue box.
 */
export class DeactivateCustomer{

    /**
     * Asserts the message in the dialogue box
     * @param {object} message - Dialogue Message. Should have message title and message body
     * @returns {this} object instance of DeactivateCustomer class.
     */
    confirmDialogueMessage = (message) => {
        const {title, body} = message

        return this
    }

    /**
     * Clicks Yes button on dialogue box
     * @returns {this} object instance of DeactivateCustomer class.
     */
    clickYesBtn = () => {
        return this
    }

    /**
     * Clicks No button on dialogue box
     * @returns {this} object instance of DeactivateCustomer class.
     */
     clickNoBtn = () => {
        return this
    }
}