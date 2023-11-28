/// <reference types="cypress" />
import { ListUtils, waitTime } from "../../util";
import AddProduct from "./addproduct";



/**
 * Manage Product view class
 * @example 
 * const manageProduct = new ManageProduct()
 */
export default class ManageProduct extends ListUtils{

    url = 'managemedicine'
    /**
      * Visits the Url to Manage Product page
      * @return {this}  object instance of ManageProduct class.
      * @example 
      * const manageProduct = new ManageProduct()
      * const manageProduct.visit()
     */
    visit(){
        cy.visit(this.url)
        cy.wait(500)
        return this
    }

    /**
     * Asserts the Product Name in the manage Product list.
     * @param {string} name - Product name.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmProductName = (name, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(0).should('contain.text',name)
        cy.wait(waitTime)
        return this
    }

    clickProductName = (name, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(0).find('a').should('contain.text',name).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Generic Name in the manage Product list.
     * @param {string} name - Generic name.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmGenericName = (name, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(1).should('contain.text',name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Product Type in the manage Product list.
     * @param {string} type - Product Type.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmProductType = (type, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(2).should('contain.text',type)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Product Unit in the manage Product list.
     * @param {string} unit - Product unit.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmProductUnit = (unit, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(3).should('contain.text',unit)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Product shelf in the manage Product list.
     * @param {string} shelf - Product shelf.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmProductShelf = (shelf, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(4).should('contain.text',shelf)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Product Strength in the manage Product list.
     * @param {string} strength - Product strength.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmProductStrength = (strength, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(5).should('contain.text',strength)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Reorder level in the manage Product list.
     * @param {number} value - Reorder level.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmReorderLevel = (value, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(6).should('contain.text',value)
        cy.wait(waitTime)
        return this
    }

    /**
     * Asserts the Product selling price in the manage Product list.
     * @param {number} amount - Selling price.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    confirmSellingPrice = (amount, row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(7).should('contain.text',amount)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the edit Product button in the manage Product list.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    clickEditProductBtn = (row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(8).find('button').eq(0).click()
        cy.wait(waitTime)
        return new AddProduct()
    }

    /**
     * Clicks the delete Product button in the manage Product list.
     * @param {number} row - Table row
     * @return {this} object instance of ManageProduct class.
     */
    clickDeleteProductBtn = (row=0) => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(8).find('button').eq(1).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add Product button.
     * @return {this} object instance of ManageProduct class.
     */
    clickAddProductBtn = () => {
        cy.get('button[type="button"]').should('contain.text', 'Add Product').click()
        cy.wait(waitTime)
        return this
    }

}

export class ProductDetails {
    assertProductName  = (name, row:number=0):this=>{
        cy.get('[data-testid="product_name"]').should('contain.text', name)
        cy.wait(waitTime)
        return this
    }
    assertProductType  = (name, row:number=0):this=>{
        cy.get('[data-testid="product_type"]').should('contain.text', name)
        cy.wait(waitTime)
        return this
    }

    assertProductPrice  = (amount, row:number=0):this=>{
        cy.get('[data-testid="product_price"]').should('contain.text', amount)
        cy.wait(waitTime)
        return this
    }
    assertPurchasedQuantity = (qty, row:number=0):this=>{
        cy.get('[data-testid="purchase_stock"]').should('contain.text', qty)
        cy.wait(waitTime)
        return this
    }
    assertSoldQuantity = (qty, row:number=0):this=>{
        cy.get('[data-testid="sold_stock"]').should('contain.text', qty)
        cy.wait(waitTime)
        return this
    }
    assertRemainingStock = (qty, row:number=0):this=>{
        cy.get('[data-testid="remaining_stock"]').should('contain.text', qty)
        cy.wait(waitTime)
        return this
    }

    gotoSales = () =>{
        cy.get('[data-testid="Sales"]').click()
        cy.wait(waitTime)
        return this
    }

    gotoPurchases = () => {
        cy.get('[data-testid="Purchases"]').click()
        cy.wait(waitTime)
        return this
    }

    assertInvoiceNumber = (invoice, row:number=0):this=>{
        cy.get(`[data-testid="invoice_no-${row}"]`).should('contain.text', invoice)
        cy.wait(waitTime)
        return this
    }

    clickInvoiceNumber = (invoice, row:number=0):this =>{
        cy.get(`[data-testid="invoice_no-${row}"]`).find('a').should('contain.text', invoice).click()
        cy.wait(waitTime)
        return  this
    }

    assertTransactionReceiver = (receiver, row:number=0):this =>{
        cy.get(`[data-testid="transaction_receiver-${row}"]`).should('contain.text', receiver)
        cy.wait(waitTime)
        return  this
    }

    clickTransactionReceiver = (receiver, row:number=0):this =>{
        cy.get(`[data-testid="transaction_receiver-${row}"]`).find('a').should('contain.text', receiver).click()
        cy.wait(waitTime)
        return  this
    }

    assertQuantity = (quantity, row:number=0) =>{
        cy.get(`[data-testid="quantity-${row}"]`).should('contain.text', quantity)
        cy.wait(waitTime)
        return  this
    }

    assertRate = (rate, row:number=0) =>{
        cy.get(`[data-testid="rate-${row}"]`).should('contain.text', rate)
        cy.wait(waitTime)
        return  this
    }
    assertTotalAmount = (amount, row:number=0) =>{
        cy.get(`[data-testid="total_amount-${row}"]`).should('contain.text', amount)
        cy.wait(waitTime)
        return this
    }

}