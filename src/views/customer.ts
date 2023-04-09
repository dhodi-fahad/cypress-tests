/// <reference types="cypress" />


/**
 * Represents a page object for adding a new customer.
 * Provides methods for interacting with the input fields and buttons
 * of the add customer form.
 *
 * @class AddCustomer
 */
export class AddCustomer {

  url = 'addcustomer'

  /**
   * Visits the Url to  Add Customer page
   * @return {this}  object instance of CreateInvoice class.
   */
  visit(){
    cy.visit(this.url)
    cy.wait(1000)
    return this
  }

  /**
   * Selects the customer category from the dropdown
   * with data-testid "customer_category".
   *
   * @param {string} category - The customer category to select.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  selectCustomerCategory = (category = 'Walk in customer'): AddCustomer => {
    cy.get('[data-testid="customer_category"]')
      .find('input')
      .clear()
      .type(`${category} {enter}`, { force: true });
    cy.wait(500);
    return this;
  };
  /**
   * Enters the customer name into the input field
   * with data-testid "customer_name".
   *
   * @param {string} name - The customer's name.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  enterCustomerName = (name: string): AddCustomer => {
    cy.get('[data-testid="customer_name"]').find('input').clear().type(name);
    cy.wait(500);
    return this;
  };

  /**
   * Enters the customer mobile number into the input field
   * with data-testid "customer_mobile".
   *
   * @param {string} mobile - The customer's mobile number.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  enterCustomerMobile = (mobile: string): AddCustomer => {
    cy.get('[data-testid="customer_mobile"]').find('input').clear().type(mobile);
    cy.wait(500);
    return this;
  };

  /**
   * Enters the customer email into the input field
   * with data-testid "customer_email".
   *
   * @param {string} email - The customer's email address.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  enterCustomerEmail = (email: string): AddCustomer => {
    cy.get('[data-testid="customer_email"]').find('input').clear().type(email);
    cy.wait(500);
    return this;
  };

  /**
   * Enters the customer address into the input field
   * with data-testid "customer_address".
   *
   * @param {string} address - The customer's address.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  enterCustomerAddress = (address: string): AddCustomer => {
    cy.get('[data-testid="customer_address"]').find('input').clear().type(address);
    cy.wait(500);
    return this;
  };

  /**
   * Clicks the "Save" button with data-testid "save_customer".
   *
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  clickSaveCustomer = (): AddCustomer => {
    cy.get('[data-testid="save_customer"]').click();
    cy.wait(500);
    return this;
  };

  /**
   * Enters the customer credit limit into the input field
   * with data-testid "credit_limit".
   *
   * @param {string} limit - The customer's credit limit.
   * @returns {AddCustomer} - The instance of the AddCustomer class.
   */
  enterCreditLimit = (limit: string): AddCustomer => {
    cy.get('[data-testid="credit_limit"]').find('input').clear().type(limit);
    cy.wait(500);
    return this;
  };

  /**
   * Confirms the name of the customer.
   * @param name - The expected name of the customer.
   * @returns The instance of the AddCustomer page.
   */
  confirmCustomerName = (name: string): this => {
    cy.get('[data-testid="customer_name"]').find('input').should('have.value', name)
    cy.wait(500)
    return this
  }

  /**
   * Confirms the address of the customer.
   * @param address - The expected address of the customer.
   * @returns The instance of the AddCustomer page.
   */
  confirmCustomerAddress = (address: string): this => {
    cy.get('[data-testid="customer_address"]').find('input').should('have.value', address)
    cy.wait(500)
    return this
  }

  /**
   * Confirms the mobile number of the customer.
   * @param mobile - The expected mobile number of the customer.
   * @returns The instance of the AddCustomer page.
   */
  confirmCustomerMobile = (mobile: string): this => {
    cy.get('[data-testid="customer_mobile"]').find('input').should('have.value', mobile)
    cy.wait(500)
    return this
  }

  /**
   * Confirms the credit limit of the customer.
   * @param creditLimit - The expected credit limit of the customer.
   * @returns The instance of the AddCustomer page.
   */
  confirmCustomerCreditLimit = (creditLimit: string): this => {
    cy.get('[data-testid="customer_credit_limit"]').find('input').should('have.value', creditLimit)
    cy.wait(500)
    return this
  }
}
