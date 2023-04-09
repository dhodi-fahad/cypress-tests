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
  // -------- Confirm Functions -------

  /**
   * Confirms the category of the customer.
   * @param category - The expected category of the customer.
   * @returns The instance of the AddCustomer page.
   */
  confirmCustomerCategory = (category='Walk in Customer') => {
    cy.get('[data-testid="customer_category"]')
      .find('input').should('contain.value',category.toUpperCase())
    cy.wait(500)
    return this
  }

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


/**
 * Represents a page Object class for the Customer List page.
 * Provides methods for asserting the contents
 * of the customer list page.
 *
 * @class CustomerListPage
 */
export class CustomerListPage {

  url = 'managecustomer/manage_customer'

  /**
   * Visits the Url to  Manage Customer page
   * @return {this}  object instance of CreateInvoice class.
   */
  visit(){
    cy.visit(this.url)
    cy.wait(500)
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
    cy.get(`[data-testid="credit_limit-${row}"]`).should('contain.text', creditLimit);
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
    cy.wait(500)
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
    cy.wait(500)
    return this
  }
}
