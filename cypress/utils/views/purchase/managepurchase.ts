/// <reference types="cypress" />
import {waitTime, ListUtils} from '../../util';
import PurchaseDetails from "./purchasedetails";


/**
 * Manage Purchase view class
 * @extends {ListUtils}
 * @example 
 * const managePurchase = new ManagePurchase()
 */
export default class ManagePurchase extends ListUtils {

    protected url = 'managepurchase'

    /**
      * Visits the Url to Manage Purchase page
      * @returns {this}  object instance of ManagePurchase class.
      * @example 
      * const managePurchase = new ManagePurchase()
      * managePurchase.visit()
     */
    visit():this{
        cy.visit(this.url)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add New Purchase button
     * @returns {this} object instance of ManagePurchase class.
     * @example 
     * const managePurchase = new ManagePurchase()
     * managePurchase.clickAddNewPurchaseBtn()
     */
    clickAddNewPurchaseBtn = ():this => {
        cy.get('[data-testid="add_purchase"]').click({force:true})
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters the start date
     * @param {string} date - Start date
     * @returns {this} object instance of ManagePurchase class.
     * @example 
     * const managePurchase = new ManagePurchase()
     * managePurchase.enterStartDate('start_date')
     */
    enterStartDate = (date:string):this => {
        cy.get('[data-testid="from_date"]').clear().type(date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters the end date
     * @param {string} date - End date
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.enterEndDate('10-10-2023')
     */
    enterEndDate = (date:string):this => {
        cy.get('[data-testid="to_date"]').clear().type(date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Filter button
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.clickFilterBtn()
     */
    clickFilterBtn():this{
        cy.get('[data-testid="submit_date_filter"]').click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Invoice number on the manage purchase list
     * @param {string} invoice_no - Invoice number
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.confirmInvoiceNumber('ER/YR-094', 3)
     */
    confirmInvoiceNumber = (invoice_no:string, row:number=0):this => {
        cy.get(`[data-testid="invoice_no-${row}"]`).should('contain.text', invoice_no)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Supplier on the manage purchase list
     * @param {string} name - supplier
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.confirmSupplier('supplier',2)
     */
    confirmSupplier = (name:string, row:number=0):this => {
        cy.get(`[data-testid="supplier_name-${row}"]`).should('contain.text', name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Purchase date on the manage purchase list
     * @param {string} date - purchase date
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.confirmPurchaseDate('date', 1) 
    */
    confirmPurchaseDate = (date:string, row:number=0):this => {
        cy.get(`[data-testid="purchase_date-${row}"]`).should('contain.text', date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Total puchase cost
     * @param {string} amount - total purchase cost on the manage purchase list
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.confirmTotalPurchaseCost(4000, 0) 
     */
    confirmTotalPurchaseCost = (amount:string, row:number=0):this => {
        cy.get(`[data-testid="grand_total_amount-${row}"]`).should('contain.text', amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the View purchase Details button on the manage purchase list
     * @param {number} row - Table row
     * @returns {object} object of PurchaseDetails class
     * @example
     * const managePurchase = new ManagePurchase()
     * const purchaseDetails = managePurchase.clickViewPurchaseBtn(0)
     */
    clickViewPurchaseBtn = (row:number=0):PurchaseDetails => {
        cy.get(`[data-testid="view_purchase-${row}"]`).click()
        cy.wait(waitTime)
        return new PurchaseDetails()
    }

    /**
     * Clicks the Edit purchase button on the manage purchase list
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.clickEditPurchaseBtn(0) 
     */
    clickEditPurchaseBtn = (row:number=0):this => {
        cy.get(`[data-testid="edit_purchase-${row}"]`).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Delete purchase button on the manage purchase list
     * @param {number} row - Table row
     * @returns {this} object instance of ManagePurchase class.
     * @example
     * const managePurchase = new ManagePurchase()
     * managePurchase.clickDeletePurchaseBtn(0)
     */
    clickDeletePurchaseBtn = (row:number=0):this => {
        cy.get(`[data-testid="delete_purchase-${row}"]`).click()
        cy.wait(waitTime)
        return this
    }

}