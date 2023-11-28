/// <reference types="cypress" />
import { SelectProduct } from '../../dataGenerators/product';
import {waitTime} from '../../util';
import AddProduct from '../product/addproduct'
import { AddSupplier } from '../suppliers/supplier';
import {convertAmountToUGX} from "../../dataGenerators";

/**
 * Add Purchase View Class
 * @example 
 * const addPurchase = new AddPurchase()
 */
export default class AddPurchase{

    protected url = 'addpurchase'

    /**
      * Visits the Url to Add Purchase page
      * @return {this}  object instance of AddPurchase class.
     */
    visit = ():this => {
        cy.visit(this.url)
        cy.wait(waitTime)
        return this
    }


    /**
     * Clicks the Upload CSV Purchase button
     * @return {this} object instance of AddPurchase class.
     * @example
     * const addPurchase = new AddPurchase()
     * addPurchase.clickUploadCSVPurchaseBtn()
     */
    clickUploadCSVPurchaseBtn = ():this =>{
        cy.get('.general-ledger-header').find('button').eq(0).should('contain.text' , 'Upload CSV Purchase').click({force:true})
        cy.wait(waitTime)
        return this
    }
    
    /**
     * Clicks the Manage Purchase button
     * @return {this} object instance of AddPurchase class.
     * @example
     * const addPurchase = new AddPurchase()
     * addPurchase.clickManagePurchaseBtn()
     */
    clickManagePurchaseBtn = ():this =>{
        cy.get('[data-testid="manage_purchases"]').should('contain.text','Purchases').click({force:true})
        return this
    }

    /**
     * Clicks the Quick Add Product button
     * @return {this} object instance of AddPurchase class.
     * @example
     * const addPurchase = new AddPurchase()
     * addPurchase.clickQuickAddProductBtn()
     */
    clickQuickAddProductBtn = ():object => {
        cy.get('[data-testid="quick_add_product"]').should('contain.text','Quick Add Product').click({force:true})
        cy.wait(waitTime)
        return new AddProduct()
    }

    /**
     * Clicks the Quick Add Supplier button
     * @return {this} object instance of AddPurchase class
     * @example
     * const addPurchase = new AddPurchase()
     * addPurchase.clickQuickAddSupplier()
     */
    clickQuickAddSupplier = ():object => {
        cy.get('[data-testid="quick_add_supplier"]').should('contain.text','Quick Add Supplier').click({force:true})
        cy.wait(waitTime)
        return new AddSupplier()
    }

    /**
     * Selects the supplier
     * @param {string} name - Supplier name
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.selectSupplier('Supplier')
     */
    selectSupplier = (name:string):this => {
        cy.get('[data-testid="supplier"]').type(name)
        cy.getDropdownOptions(name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters Invoice number
     * @param {string} invoice_no - Invoice Number
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterInvoiceNumber('INVOICE-20/03/2023')
     */
    enterInvoiceNumber = (invoice_no:string):this => {
        cy.get('[data-testid="invoice_no"]').clear().type(invoice_no)
        cy.wait(waitTime)
        return this
    }
    /**
     * Enters the Expected Payment Date
     * @param {string} date - Expected Payment date
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterExpectedPaymentDate('20-03-2023')
     */
    enterExpectedPaymentDate = (date:string):this => {
        cy.get('[data-testid="expected_payment_date"]').clear().type(date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters Invoice details or descriptions
     * @param {string} details - Details or description
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterDetails('details')
     */
    enterDetails = (details:string):this => {
        cy.get('[data-testid="purchase_details"]').clear().type(details)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters the Purchase date
     * @param {string} date - Purchase date
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterPurchaseDate('20-03-2023')
     */
    enterPurchaseDate = (date:string):this => {
        cy.get('[data-testid="purchase_date"]').clear().type(date)
        cy.wait(waitTime)
        return this
    }

    /**
     * Select Product
     * @param {SelectProduct} product - Product
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.selectProduct({name,strength},0)
     */
    selectProduct = (product:SelectProduct, row:number=0):this => {
        cy.selectProduct(product, row)
        return this
    }

    /**
     * Enters product batch id
     * @param {string} batch_id - product batch id
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterBatchId('EE-20/E5',0)
     */
    enterBatchId = (batch_id:string, row:number=0):this => {
        cy.get(`[data-testid="batch_id-${row}"]`).type(batch_id)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters product expiry date
     * @param {string} date - product expiry id
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterExpiryDate('12-12-2025',0)
     */
    enterExpiryDate = (date:string, row:number=0):this => {
        cy.get(`[data-testid="expiry_date-${row}"]`).clear({force: true}).wait(waitTime).type(date,)
        cy.wait(waitTime*2)
        return this
    }

    /**
     * Enters product expiry limit
     * @param {string} value - product expiry limit
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterExpiryLimit('120',0)
     */
    enterExpiryLimit = (value:string, row:number=0):this => {
        cy.get(`[data-testid="expiry_limit-${row}"]`).clear().type(value)
        cy.wait(waitTime)
        return this
    }

    /**
     * Assert product expiry limit
     * @param {string} value - product expiry limit
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example
     * const addPurchase = new AddPurchase()
     * addPurchase.enterExpiryLimit('120',0)
     */
    confirmExpiryLimit = (value:number, row:number=0):this => {
        cy.get(`[data-testid="expiry_limit-${row}"]`).should('contain.value',value)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts current product stock
     * @param {number} qty - current product stock
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.confirmStock(5000,0)
     */
    confirmStock = (qty:number, row:number=0):this => {
        cy.get(`[data-testid="total_product-${row}"]`).should('contain.value', qty)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters quantity purchased
     * @param {string} qty - quantity purchased
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterQuantityPurchased(100,1)
     */
    enterQuantityPurchased = (qty:string, row:number=0):this => {
        cy.get(`[data-testid="product_quantity-${row}"]`).clear().type(qty)
        cy.wait(waitTime)
        return this
    }

    /**
     * Enters unit cost of product on purchase
     * @param {string} amount - unit cost
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.enterUnitCost(1000,0)
     */
    enterUnitCost = (amount:string, row:number=0):this => {
        cy.get(`[data-testid="product_rate-${row}"]`).clear().type(amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts total cost of product on purchase
     * @param {number} amount - total cost
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.confirmTotalCost(10000,0)
     */
    confirmTotalCost = (amount:number, row:number=0):this => {
        cy.get(`[data-testid="total_price-${row}"]`).should('contain.value', amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts Purchase Grand total
     * @param {number} amount - purchase grand total
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.confirmPurchaseGrandTotal(2800000)
     */
    confirmPurchaseGrandTotal = (amount:number):this => {
        cy.get('[data-testid="grand_total"]').should('contain.value', convertAmountToUGX((amount)))
        return this
    }
    
    /**
     * Clicks the Delete row button
     * @param {number} row - Table row
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.clickDeleteRowBtn(1)
     */
    clickDeleteRowBtn = (row:number=0):this => {
        cy.get(`[data-testid="delete-${row}"]`).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add new row button
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.clickAddRowBtn()
     */
     clickAddRowBtn = ():this => {
        cy.get('[data-testid="add_row"]').should('contain.text', 'Add New Item').click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Submit purchase button
     * @return {this} object instance of AddPurchase class.
     * @example 
     * const addPurchase = new AddPurchase()
     * addPurchase.clickSubmitPurchaseBtn()
     */
     clickSubmitPurchaseBtn = ():this => {
        cy.get('[data-testid="submit_purchase"]').click()
        cy.wait(waitTime)
        return this
    }

}
