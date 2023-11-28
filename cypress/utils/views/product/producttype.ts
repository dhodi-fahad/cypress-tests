/// <reference types="cypress" />
import { waitTime } from "../../util"


/**
 * Product Type view class
 */
export class ProductType{

    url = 'medicinetype'

    /**
      * Visits the Url to Product Type page
      * @return {this}  object instance of MidicineType class.
     */
    visit(): this{
        cy.visit(this.url)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add Product Type button.
     * @return {this} object instance of ProductType class.
     */
    clickAddProductTypeBtn = (): this => {
        cy.get('.journals').find('.text-right').find('button').should('contain.text',"Add Product Type").click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Assert the Add Product Type name in the Product type list.
     * @param {string} name - Product Type
     * @param {number} row - Table row
     * @return {this} object instance of ProductType class.
     */
    confirmProductTypeName = (name: string, row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(0).should('contain.text',name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Edit Product Type button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductType class.
     */
    clickEditProductTypeBtn = (row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(0).find('button').eq(0).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Delete Product Type button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductType class.
     */
    clickDeleteProductTypeBtn = (row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(1).find('button').eq(0).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Enter the Product Type name.
     * @param {string} name - Product type name
     * @return {this} object instance of ProductType class.
     */
    enterProductTypeName = (name: string): this => {
        cy.get('[data-testid="type_name"]').clear().type(name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Submit Product Type button.
     * @return {this} object instance of ProductType class.
     */
    clickSubmitProductTypeBtn = (): this => {
        cy.get('[data-testid="submit_type"]').click()
        cy.wait(waitTime)
        return this
    }


}