import { category } from "../../dataGenerators/product"
import { waitTime, ListUtils } from "../utils/index"
import ProductUnit from "./productunit";

import {AddProduct} from "./product";


/**
 * Add Product view class
 */
export default class AddProduct{

  protected url = 'addmedicine'

  /**
   * Visits the Url to Add Product page
   * @return {this}  object instance of AddProduct class.
   * const addProduct = new AddProduct()
   * addProduct.visit()
   */
  visit = () => {
    cy.visit(this.url)
    cy.wait(1000)
    return this
  }

  /**
   * Enters Product name.
   * @param {string} name - Product name
   * @returns {this}  object instance of AddProduct class.
   */
  enterProductName = (name) => {
    cy.get('[data-testid="product_name"]').clear().type(name)
    cy.wait(waitTime)
    return this
  }

  /**
   * confirms Product name.
   * @param {string} name - Product name
   * @returns {this}  object instance of AddProduct class.
   */
  confirmProductName = (name) => {
    cy.get('[data-testid="product_name"]').should('contain.value', name)
    cy.wait(waitTime)
    return this
  }

  /**
   * Locates the Product name required alert
   * @returns {this}  object instance of AddProduct class.
   */
  locateProductNameRequiredAlert = () => {
    cy.get('.invalid-text').eq(0).should('contain.text', 'Product name is required')
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product Generic name.
   * @param {string} name - Product Generic name
   * @returns {this}  object instance of AddProduct class.
   */
  enterGenericName = (name) => {
    cy.get('[data-testid="generic_name"]').clear().type(name)
    cy.wait(waitTime)
    return this
  }



  /**
   * Confirm Product Generic name.
   * @param {string} name - Product Generic name
   * @returns {this}  object instance of AddProduct class.
   */
  confirmGenericName = (name) => {
    cy.get('[data-testid="generic_name"]').should('contain.value', name)
    cy.wait(waitTime)
    return this
  }

  /**
   * Locates the Generic name required alert
   * @returns {this}  object instance of AddProduct class.
   */
  locateGenericNameRequiredAlert = () => {
    cy.get('.invalid-text').eq(1).should('contain.text', 'Generic name is required')
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product strength.
   * @param {string} strength - Product strength
   * @returns {this}  object instance of AddProduct class.
   */
  enterProductStrength = (strength) => {
    cy.get('[data-testid="product_strength"]').clear().type(strength)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Product strength.
   * @param {string} strength - Product strength
   * @returns {this}  object instance of AddProduct class.
   */
  confirmProductStrength = (strength) => {
    cy.get('[data-testid="product_strength"]').should('contain.value', strength)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects Product unit.
   * @param {string} unit - Product unit
   * @return {this}  object instance of AddProduct class.
   */
  selectProductUnit = (unit) => {
    cy.wait(5000)
    cy.get('[data-testid="product_unit"]').find('input').clear().type(`${unit}{enter}`,{force:true})
    cy.getDropdownOptions(unit)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Product unit.
   * @param {string} unit - Product unit
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductUnit = (unit) => {
    cy.wait(5000)
    cy.get('[data-testid="product_unit"]').should('contain.value', unit)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects Product Type.
   * @param {string} type - Product Type
   * @return {this}  object instance of AddProduct class.
   */
  selectProductType = (type) => {
    cy.wait(5000)
    cy.get('[data-testid="product_type"]').find('input').clear().type(`${type}{enter}`,{force:true})
    cy.getDropdownOptions(type)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Product Type.
   * @param {string} type - Product Type
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductType = (type) => {
    cy.wait(5000)
    cy.get('[data-testid="product_type"]').should('contain.value', type)
    cy.wait(waitTime)
    return this
  }

  /**
   * Locates the Product Type required alert
   * @returns {this}  object instance of AddProduct class.
   */
  locateProductTypeRequiredAlert = () => {
    cy.get('.invalid-text').eq(4).should('contain.text', 'Product type is required')
    cy.wait(waitTime)
    return this
  }


  /**
   * Selects Product category.
   * @param {string} category - Product category
   * @return {this}  object instance of AddProduct class.
   */
  selectProductCategory = (category) => {
    cy.get('[data-testid="product_category"]').find('input').clear().type(`${category}{enter}`,{force:true})
    cy.getDropdownOptions(category)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Product Category
   * @param {string} category - Product category
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductCategory = (category) =>{
    cy.get('[data-testid="product_category"]').should('contain.value', category)
    cy.wait(waitTime)
    return this
  }

  /**
   * Locates the Category required alert
   * @returns {this}  object instance of AddProduct class.
   */
  locateCategoryRequiredAlert = () => {
    cy.get('.invalid-text').eq(1).should('contain.text', 'Category is required')
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Box size.
   * @param {string} size - Box size
   * @return {this}  object instance of AddProduct class.
   */
  enterBoxSize = (size) => {
    cy.get('[data-testid="box_size"]').clear().type(size)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Box size.
   * @param {string} size - Box size
   * @return {this}  object instance of AddProduct class.
   */
  confirmBoxSize = (size) => {
    cy.get('[data-testid="box_size"]').should('contain.value', size)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product shelf.
   * @param {string} shelf - Product shelf
   * @return {this}  object instance of AddProduct class.
   */
  enterProductShelf = (shelf) => {
    cy.get('[data-testid="product_location"]').clear().type(shelf)
    cy.wait(waitTime)
    return this
  }

  /**
   * confirm Product shelf.
   * @param {string} shelf - Product shelf
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductShelf = (shelf) => {
    cy.get('[data-testid="product_location"]').should('contain.value', shelf)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Reorder level.
   * @param {number} value - reorder level
   * @return {this}  object instance of AddProduct class.
   */
  enterReorderLevel = (value) => {
    cy.get('[data-testid="reorder_level"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Reorder level.
   * @param {number} value - reorder level
   * @return {this}  object instance of AddProduct class.
   */
  confirmrReorderLevel = (value) => {
    cy.get('[data-testid="reorder_level"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }


  /**
   * Enters Expiry limit.
   * @param {number} value - expiry limit
   * @return {this}  object instance of AddProduct class.
   */
  enterExpiryLimit = (value) => {
    cy.get('[data-testid="expiry_limit"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Expiry limit.
   * @param {number} value - expiry limit
   * @return {this}  object instance of AddProduct class.
   */
  confirmExpiryLimit = (value) => {
    cy.get('[data-testid="expiry_limit"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Maximum stock.
   * @param {number} value - max stock
   * @return {this}  object instance of AddProduct class.
   */
  enterMaxStock = (value) => {
    cy.get('[data-testid="max_stock"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Maximum stock.
   * @param {number} value - max stock
   * @return {this}  object instance of AddProduct class.
   */
  confirmMaxStock = (value) => {
    cy.get('[data-testid="max_stock"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Medicine description.
   * @param {string} details - Product details
   * @return {this}  object instance of AddProduct class.
   */
  enterDetails = (details) => {
    cy.get('[data-testid="product_details"]').clear().type(details)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Medicine description.
   * @param {string} details - Product details
   * @return {this}  object instance of AddProduct class.
   */
  confirmDetails = (details) => {
    cy.get('[data-testid="description"]').should('contain.value', details)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects the price type for the Product.
   * @param {string} type - Price type
   * @returns {this} object instance of AddProduct class.
   */
  selectPriceType = (type) => {
    cy.get('[data-testid="price_type"]').find('#priceType').click()
    cy.get('[data-testid="priceType2"]').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters the actual price
   * @param {number} price - Actual Price
   * @returns {this} object instance of AddProduct class.
   */
  enterActualPrice = (price) => {
    cy.get('[data-testid="actual_price"]').clear().type(price)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters the actual price
   * @param {number} price - Actual Price
   * @returns {this} object instance of AddProduct class.
   */
  confirmActualPrice = (price) => {
    cy.get('[data-testid="actual_price"]').should('contain.value',price)
    cy.wait(waitTime)
    return this
  }


  /**
   * Locates the Price Type required alert
   * @returns {this}  object instance of AddProduct class.
   */
  locatePriceTypeRequiredAlert = () => {
    cy.get('.invalid-text').eq(2).should('contain.text', 'Price type is required')
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects the mark-up price
   * @param {number} price - Mark-up Price
   * @returns {this} object instance of AddProduct class.
   */
  selectMarkupPrice = (price) => {
    cy.get('[data-testid="priceType2"]').find('input').type(`${price}{enter}`)
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the submit Product button.
   * @returns {this} object instance of AddProduct class.
   */
  clickSubmitBtn = ():this => {
    cy.get('[data-testid="submit_product"]').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the Add Another Product button.
   * @returns {this} object instance of AddProduct class.
   */
  clickAddAnotherProduct = ():this => {
    cy.get('[data-testid="add_another_product"]').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the Save Product button.
   * @returns {this} object instance of AddProduct class.
   */
  clickSaveProduct = ():this => {
    cy.get('[data-testid="save_product"]').click()
    cy.wait(1000)
    return this
  }

  /**
   * Clicks the Manage Product button.
   * @returns {this} object instance of ManageProduct class.
   */
  clickManageProductBtn = ():this => {
    cy.get('[data-testid="manage_products"]').should('contain.text', 'Manage Products').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the Quick Add Product Unit button.
   * @return {ProductUnit} object instance of ProductUnit class.
   * @example
   * const addProduct = new AddProduct()
   * const productUnit = addProduct.clickQuickAddUnit()
   */
  clickQuickAddUnit = ():ProductUnit => {
    cy.get('[data-testid="quick_add_unit"]').should('contain.text', 'Quick Add Unit').click()
    cy.wait(waitTime)
    return new ProductUnit()
  }

  clickQuickAddCategory = () => {
    cy.get('[data-testid="quick_add_category"]').should('contain.text', 'Quick Add Category').click()
    cy.wait(waitTime)
    return this
  }

  clickQuickAddType = () => {
    cy.get('[data-testid="quick_add_type"]').should('contain.text', 'Quick Add Product Type').click()
    cy.wait(waitTime)
    return this
  }

}


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
