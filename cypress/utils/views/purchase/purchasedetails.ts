/// <reference types="cypress" />
import {waitTime} from '../../util';


/**
 * Purchase Details view class
 * @example 
 * const purchaseDetails = new PurchaseDetails()
 */
export default class PurchaseDetails {

    /**
     * Asserts the Invoice number for the purchase
     * @param {string} invoice_no - Invoice No.
     * @returns {this} object instance of PurchaseDetails class.
     * @example 
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmInvoiceNumber('ES-E0037')
     */
    confirmInvoiceNumber = (invoice_no:string):this => {
        cy.get('[data-testid="purchase_info"]').should('contain.text', `Invoice No: ${invoice_no}`)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Supplier for the purchase
     * @param {string} name - Supplier.
     * @returns {this} object instance of PurchaseDetails class.
     * @example 
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmSupplierName('Abacus')
     */
    confirmSupplierName = (name:string):this => {
        cy.get('[data-testid="purchase_info"]').should('contain.text', name)
        cy.wait(waitTime)
        return this
    }


    /**
     * Asserts the Supplier for the purchase
     * @param {string} date - Purchase Date.
     * @returns {this} object instance of PurchaseDetails class.
     * @example 
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmPurchaseDate('10-10-2023')
     */
    confirmPurchaseDate = (date:string):this => {
        cy.get('[data-testid="purchase_info"]').should('contain.text', `Date : ${date}`)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the name of product purchased
     * @param {string} product_name - Product name
     * @param {number} row - Table row
     * @returns {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmProduct('product_name', 2)
    */
    confirmProduct = (product_name, row=0) => {
        cy.get(`[data-testid="product_name-${row}"]`).should('contain.text', product_name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the quantity of product purchased
     * @param {number} qty - Product qty
     * @param {number} row - Table row
     * @returns {this} object instance of PurchaseDetails class.
     */
     confirmProducQty = (qty:number, row:number=0):this => {
        cy.get(`[data-testid="quantity-${row}"]`).should('contain.text', qty)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the batch id of product purchased
     * @param {string} bnatch_id - Batch id
     * @param {number} row - Table row
     * @returns {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmBatchId('E0-URYE002', 2)
     */
    confirmBatchId = (batch_id:string, row:number=0):this => {
        cy.get(`[data-testid="batch_id-${row}"]`).should('contain.text', batch_id)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the expiry date of product purchased
     * @param {string} date - Product expiry date
     * @returns {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmExpiryDate('10-10-2027', 2)
     */
    confirmExpiryDate = (date:string, row:number=0):this => {
        cy.get(`[data-testid="expiry_date-${row}"]`).should('contain.text', date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the purchase price of product purchased
     * @param {number} amount - purchase price
     * @param {number} row - Table row
     * @returns {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmProductPurchasePrice(450, 2)
     */
    confirmProductPurchasePrice = (amount:number, row:number=0):this => {
        cy.get(`[data-testid="purchase_price-${row}"]`).should('contain.text', amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Total amount of product purchased
     * @param {number} amount - Total Purchase amount for product
     * @param {number} row - Table row
     * @returns {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.confirmProductTotalAmount(4500, 2)
     */
    confirmProductTotalAmount = (amount:number, row:number=0):this => {
        cy.get(`[data-testid="total_amount-${row}"]`).should('contain.text', amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add New Purchase button
     * @return {this} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.clickAddNewPurchaseBtn()
     */
    clickAddNewPurchaseBtn = ():this => {
        cy.get('[data-testid="add_purchase"]').should('contain.text', 'Add Purchase').click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Manage Purchase button
     * @return {ths} object instance of PurchaseDetails class.
     * @example
     * const purchaseDetails = new PurchaseDetails()
     * purchaseDetails.clickManagePurchaseBtn()
     */
    clickManagePurchaseBtn = ():this => {
        cy.get('[data-testid="manage_purchase"]').should('contain.text', 'Manage Purchase').click()
        cy.wait(waitTime)
        return this
    }
}