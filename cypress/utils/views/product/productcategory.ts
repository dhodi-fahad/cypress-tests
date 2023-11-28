/// <reference types="cypress" />
import { ListUtils, waitTime } from "../../util"

/**
 * Product Category view class
 */
export default class ProductCategory extends ListUtils{

    url = 'managecategory'

    /**
      * Visits the Url to Product Type page
      * @return {this}  object instance of ProductCategory class.
     */
    visit(){
        cy.visit(this.url)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Add Product Category button.
     * @return {this} object instance of ProductCategory class.
     */
    clickAddProductCategoryBtn = () => {
        cy.get('.journals').find('.text-right').find('button').should('contain.text',"Add Category").click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Assert the Add Product Category name in the Product Category list.
     * @param {number} row - Table row
     * @return {this} object instance of ProductCategory class.
     */
    confirmProductCategoryName = (name, row=0) => {
        cy.get('.MuiTableContainer-root').find('table').find('tbody').find('tr').eq(row).find('td').eq(0).should('contain.text',name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Edit Product Category button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductCategory class.
     */
    clickEditProductCategoryBtn = (row=0) => {
        cy.get('.MuiTableContainer-root').find('table').find('tbody').find('tr').eq(row).find('td').eq(1).find('button').eq(0).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Delete Product Category button.
     * @param {number} row - Table row
     * @return {this} object instance of ProductCategory class.
     */
    clickDeleteProductCategoryBtn = (row=0) => {
        cy.get('.MuiTableContainer-root').find('table').find('tbody').find('tr').eq(row).find('td').eq(1).find('button').eq(1).click()
        cy.wait(waitTime)
        return this
    }

    /**
     * Enter the Product Category name.
     * @param {string} name - Product Category name
     * @return {this} object instance of ProductCategory class.
     */
    enterProductCategoryName = (name) => {
        cy.get('[data-testid="category_name"]').clear().type(name)
        cy.wait(waitTime)
        return this
    }

    /**
     * Clicks the Submit Product Category button.
     * @return {this} object instance of ProductCategory class.
     */
    clickSubmitProductCategoryBtn = () => {
        cy.get('[data-testid="submit_category"]').click()
        cy.wait(waitTime)
        return this
    }

}