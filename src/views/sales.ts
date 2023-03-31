import { SelectProduct } from "../utils/generators/products";
import {waitTime} from "../utils";
/// <reference types="cypress" />
/**
 * Make Sale Class
 * */
export class MakeCashSale{
  /**
   * Visits new-receipt page
   * @return {this}
   */
  visit = ():this => {
    cy.visit('new-receipt')
    cy.wait(1000)
    return this
  }

  /**
   * Enters Customer Name
   * @param {string} customer - customer name
   * @return {this}
   * */
  enterCustomer = (customer:string):this => {
    cy.get('[data-testid="customer"]').clear()
    cy.wait(waitTime)
    cy.get('[data-testid="customer"]').type(customer)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Customer
   * @param {string} customer - customer name
   * @return {this}
   * */
  assertCustomer = (customer:string):this => {
    cy.get('[data-testid="customer"]').should('contain.value', customer)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Date of Sale
   * @param {string} date
   * @return {this}
   * */
  enterDate = (date:string) => {
    cy.get('[data-testid="date"]').type(date)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Date of Sale
   * @param {string} date
   * @return {this}
   * */
  assertDate = (date:string):this => {
    cy.get('[data-testid="date"]').should("contain.value", date)
    cy.wait(waitTime)
    return this
  }

  /**
   * Assets Credit Limit
   * @param {number} amount - credit limit
   * @return {this}
   * */
  assertCreditLimit = (amount:number):this => {
    cy.get('[data-testid="credit_limit"]').should("contain.value", amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects Payment method
   * @param {string} method - payment method
   * @return {this}
   * */
  selectPaymentMethod = (method:string="Cash") => {
    cy.get('[data-testid="payment_method"]').select(method)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Total Bill Amount
   * @param {number} amount - Total Bill Amount
   * @return {this}
   * */
  assertTotalBillAmount = (amount:number) => {
    cy.get('[data-testid="total_amount"]').should('contain.value', amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Paid Amount
   * @param {number} amount - Paid Amount
   * @return {this}
   * */
  enterPaidAmount = (amount: number) => {
    cy.get('[data-testid="paid_amount"]').should('contain.value', amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Balance Amount
   * @param {number} amount - Balance Amount
   * @return {this}
   * */
  assertBalanceAmount = (amount:number) => {
    cy.get('[data-testid="balance_amount"]').should('contain.value', amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Due Amount
   * @param {number} amount - Due Amount
   * @return {this}
   * */
  assertDueAmount = (amount:number):this => {
    cy.get('[data-testid="due_amount"]').should('contain.value', amount)
    cy.wait(waitTime)
    return this
  }

}

export class MakeCreditSale{

  /**
   * Enters Customer Name
   * @param {string} customer - customer name
   * @return {this}
   * */
  enterCustomer = (customer:string):this => {
    cy.get('[data-testid="customer"]').clear()
    cy.wait(waitTime)
    cy.get('[data-testid="customer"]').type(customer)
    cy.wait(waitTime)
    return this
  }

  /**
   * Assets Credit Limit
   * @param {number} amount - credit limit
   * @return {this}
   * */
  assertCreditLimit = (amount:number):this => {
    cy.get('[data-testid="credit_limit"]').should("contain.value", amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Assets Outstanding Balance
   * @param {number} amount - Outstanding Balance
   * @return {this}
   * */
  assertOutStandingBalance = (amount:number):this => {
    cy.get('[data-testid="outstanding_balance"]').should("contain.value", amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enter Account Name
   * @param {string} name - Account Name
   * @return {this}
   * */
  enterAccountName = (name:string):this => {
    cy.get('[data-testid="account_name"]').clear()
    cy.wait(waitTime)
    cy.get('[data-testid="account_name"]').type(name)
    cy.wait(waitTime)
    return this
  }

  /**
   * Checks the Add Card number check box
   * @return {this}
   * */
  checkAddCardNumber = ():this => {
    cy.get('[data-testid="add_card_number"]').check()
    cy.wait(waitTime)
    return this
  }

  /**
   * Enter Card Number
   * @param {string} card_number - Card Number
   * @return {this}
   * */
  enterCardNumber = (card_number:string):this => {
    cy.get('[data-testid="card_number"]').clear()
    cy.wait(waitTime)
    cy.get('[data-testid="card_number"]').type(card_number)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Invoice Date
   * @param {string} date - Invoice Date
   * @return {this}
   * */
  enterInvoiceDate = (date:string):this => {
    cy.get('[data-testid="invoice_date"]').type(date)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Invoice Date
   * @param {string} date - Invoice Date
   * @return {this}
   * */
  assertInvoiceDate = (date:string) => {
    cy.get('[data-testid="invoice_date"]').should('contain.value',date)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Grand Total Amount
   * @param {number} amount - Grand Total Amount
   * @return {this}
   * */
  assertGrandTotlalAmount = (amount:string) => {
    cy.get('[data-testid="grand_total_price"]').should('contain.value',amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Net Total Amount
   * @param {number} amount - Net Total Amount
   * @return {this}
   * */
  assertNetTotalAmount = (amount:string) => {
    cy.get('[data-testid="net_total"]').should('contain.value',amount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Invoice Memo
   * @param {string} memo - Invoice Memo
   * @return {this}
   * */
  enterInvoiceMemo = (memo:string) => {
    cy.get('[data-testid="invoice_memo"]').type(memo)
    cy.wait(waitTime)
    return this
  }


}

export class ProductSalesTable{

  /**
   * Selects Product
   * @param {object} product - Product to select
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  selectProduct = (product:SelectProduct, row:number=0):this => {
    // cy.selectProduct(product, row)
    return this
  }

  /**
   * Selects Product Batch_No.
   * @param {string} batch_no - Product Batch_No
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  selectBatchNo = (batch_no:string, row=0) => {
    cy.get(`[data-testid="product_batch-"+${row}]`).type(batch_no)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Product Available Quantity for a selected batch.
   * @param {number} qty - Product Available Quantity
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  assertAvailableQuantity = (qty:number, row=0) => {
    cy.get(`[data-testid="available_quantity-"+${row}]`).should('contain.value',qty)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Product Expiry Date for a selected batch.
   * @param {string} date - Product Expiry Date
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  assertProductExpiryDate = (date:string, row=0) => {
    cy.get(`[data-testid="expiry_date-"+${row}]`).should('contain.value',date)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Product Unit for a selected batch.
   * @param {string} unit - Product Unit
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  assertProductUnit = (unit:string, row=0) => {
    cy.get(`[data-testid="product_unit-"+${row}]`).should('contain.value',unit)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product Quantity to be sold.
   * @param {string} qty - Product Quantity
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  enterSoldQuantity = (qty:string, row=0) => {
    cy.get(`[data-testid="product_quantity-"+${row}]`).type(qty)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Product Rate for a selected batch.
   * @param {number} rate - Product Rate
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  assertProductRate = (rate:number, row=0) => {
    cy.get(`[data-testid="product_rate-"+${row}]`).should('contain.value',rate)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product Rate for a selected batch.
   * @param {string} rate - Product Rate
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  enterProductRate = (rate:string, row=0) => {
    cy.get(`[data-testid="product_rate-"+${row}]`).clear()
    cy.wait(waitTime)
    cy.get(`[data-testid="product_rate-"+${row}]`).type(rate)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product Discount for a selected batch.
   * @param {string} discount - Product Discount
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  enterProductDiscount = (discount:string, row=0) => {
    cy.get(`[data-testid="discount-"+${row}]`).clear()
    cy.wait(waitTime)
    cy.get(`[data-testid="discount-"+${row}]`).type(discount)
    cy.wait(waitTime)
    return this
  }

  /**
   * Asserts Total Rate for a selected batch.
   * @param {number} rate - Total Rate
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  assertTotalRate = (rate:number, row=0) => {
    cy.get(`[data-testid="total_price-"+${row}]`).should('contain.value',rate)
    cy.wait(waitTime)
    return this
  }

  /**
   * Deletes table row
   * @param {number} row - Position of item row in table
   * @return {this}
   * */
  deleteRow = (row=0) => {
    cy.get(`[data-testid="delete-"+${row}]`).click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Adds table row
   * @return {this}
   * */
  addRow = () => {
    cy.get(`[data-testid="add-row"]`).click()
    cy.wait(waitTime)
    return this
  }

}
