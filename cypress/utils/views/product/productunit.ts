import {ListUtils, waitTime} from '../../util';


/**
 * Product Unit view class
 */
 export default class ProductUnit extends ListUtils{

    url = 'addunit'
    /**
      * Visits the Url to Product Unit page
      * @return {this}  object instance of ProductUnit class.
     */
    visit(): this{
        cy.visit(this.url)
        cy.wait(1000)
        return this
    }

    /**
     * Clicks the Add Product Unit button.
     * @return {this} object instance of ProductUnit class.
     */
    clickAddProductUnitBtn = (): this => {
        cy.get('.journals').find('.text-right').find('button').should('contain.text',"Add Unit").click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Assert the Add Product Unit name in the Product Unit list.
     * @param {number} row - Table row
     * @return {this} object instance of ProductUnit class.
     */
    confirmProductUnitName = (name: string, row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(0).should('contain.text',name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Edit Product Unit button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductUnit class.
     */
    clickEditProductUnitBtn = (row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(1).find('button').eq(0).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Delete Product Unit button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductUnit class.
     */
    clickDeleteProductUnitBtn = (row: number=0): this => {
        cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(1).find('button').eq(1).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Enter the Product Unit name.
     * @param {string} name - Product Unit name
     * @return {this} object instance of ProductUnit class.
     */
    enterProductUnitName = (name: string): this => {
        cy.get('[data-testid="unit_name"]').clear().type(name)
        cy.wait(waitTime)
        return this
    }

    confirmProductUnitNameFieldNotEmpty = (name: string) => {
        cy.get('[data-testid="unit_name"]').should('contain.value',name)
        cy.wait(waitTime)
        return this
    }

    locateProductUnitNameRequiredAlert = ():this => {
        cy.get('.invalid-text').eq(0).should('contain.text', 'Unit name is required')
        cy.wait(waitTime)
        return this
    }
    /**
     * Clicks the Submit Product Unit button.
     * @return {this} object instance of ProductUnit class.
     */
    clickSubmitProductUnitBtn = (): this => {
        cy.get('[data-testid="submit_unit"]').click()
        cy.wait(waitTime)
        return this
    }


}