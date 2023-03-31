import { category } from "../utils/generators/products"
import { waitTime } from "../utils"
// import ProductUnit from "./productunit";


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
  enterProductName = (name: string) => {
    cy.get('[data-testid="product_name"]').clear().type(name)
    cy.wait(waitTime)
    return this
  }

  /**
   * confirms Product name.
   * @param {string} name - Product name
   * @returns {this}  object instance of AddProduct class.
   */
  confirmProductName = (name: any) => {
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
  enterGenericName = (name: string) => {
    cy.get('[data-testid="generic_name"]').clear().type(name)
    cy.wait(waitTime)
    return this
  }



  /**
   * Confirm Product Generic name.
   * @param {string} name - Product Generic name
   * @returns {this}  object instance of AddProduct class.
   */
  confirmGenericName = (name: any) => {
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
  confirmProductStrength = (strength: string) => {
    cy.get('[data-testid="product_strength"]').should('contain.value', strength)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects Product unit.
   * @param {string} unit - Product unit
   * @return {this}  object instance of AddProduct class.
   */
  selectProductUnit = (unit: string) => {
    cy.wait(5000)
    cy.get('[data-testid="product_unit"]').find('input').type(`${unit}{enter}`,{force:true})
    cy.getDropdownOptions(unit)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Product unit.
   * @param {string} unit - Product unit
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductUnit = (unit: string) => {
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
  selectProductType = (type:string) => {
    cy.wait(5000)
    cy.get('[data-testid="product_type"]').find('input').type(`${type}{enter}`,{force:true})
    // cy.getDropdownOptions(type)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Product Type.
   * @param {string} type - Product Type
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductType = (type:string) => {
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
  selectProductCategory = (category:string) => {
    cy.get('[data-testid="product_category"]').find('input').type(`${category}{enter}`,{force:true})
    // cy.getDropdownOptions(category)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Product Category
   * @param {string} category - Product category
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductCategory = (category:string) =>{
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
  enterBoxSize = (size:string) => {
    cy.get('[data-testid="box_size"]').clear().type(size)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Box size.
   * @param {string} size - Box size
   * @return {this}  object instance of AddProduct class.
   */
  confirmBoxSize = (size:string) => {
    cy.get('[data-testid="box_size"]').should('contain.value', size)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Product shelf.
   * @param {string} shelf - Product shelf
   * @return {this}  object instance of AddProduct class.
   */
  enterProductShelf = (shelf:string) => {
    cy.get('[data-testid="product_location"]').clear().type(shelf)
    cy.wait(waitTime)
    return this
  }

  /**
   * confirm Product shelf.
   * @param {string} shelf - Product shelf
   * @return {this}  object instance of AddProduct class.
   */
  confirmProductShelf = (shelf:string) => {
    cy.get('[data-testid="product_location"]').should('contain.value', shelf)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Reorder level.
   * @param {number} value - reorder level
   * @return {this}  object instance of AddProduct class.
   */
  enterReorderLevel = (value:string) => {
    cy.get('[data-testid="reorder_level"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirms Reorder level.
   * @param {number} value - reorder level
   * @return {this}  object instance of AddProduct class.
   */
  confirmrReorderLevel = (value:string) => {
    cy.get('[data-testid="reorder_level"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }


  /**
   * Enters Expiry limit.
   * @param {number} value - expiry limit
   * @return {this}  object instance of AddProduct class.
   */
  enterExpiryLimit = (value:string) => {
    cy.get('[data-testid="expiry_limit"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Expiry limit.
   * @param {number} value - expiry limit
   * @return {this}  object instance of AddProduct class.
   */
  confirmExpiryLimit = (value:string) => {
    cy.get('[data-testid="expiry_limit"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Maximum stock.
   * @param {number} value - max stock
   * @return {this}  object instance of AddProduct class.
   */
  enterMaxStock = (value:string) => {
    cy.get('[data-testid="max_stock"]').clear().type(value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Maximum stock.
   * @param {number} value - max stock
   * @return {this}  object instance of AddProduct class.
   */
  confirmMaxStock = (value:string) => {
    cy.get('[data-testid="max_stock"]').should('contain.value', value)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters Medicine description.
   * @param {string} details - Product details
   * @return {this}  object instance of AddProduct class.
   */
  enterDetails = (details:string) => {
    cy.get('[data-testid="product_details"]').clear().type(details)
    cy.wait(waitTime)
    return this
  }

  /**
   * Confirm Medicine description.
   * @param {string} details - Product details
   * @return {this}  object instance of AddProduct class.
   */
  confirmDetails = (details:string) => {
    cy.get('[data-testid="description"]').should('contain.value', details)
    cy.wait(waitTime)
    return this
  }

  /**
   * Selects the price type for the Product.
   * @param {string} type - Price type
   * @returns {this} object instance of AddProduct class.
   */
  selectPriceType = (type:string) => {
    cy.get('[data-testid="price_type"]').find('input').focus()
    cy.wait(waitTime)
    // cy.getDropdownOptions(type)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters the actual price
   * @param {number} price - Actual Price
   * @returns {this} object instance of AddProduct class.
   */
  enterActualPrice = (price:string) => {
    cy.get('[data-testid="actual_price"]').clear().type(price)
    cy.wait(waitTime)
    return this
  }

  /**
   * Enters the actual price
   * @param {number} price - Actual Price
   * @returns {this} object instance of AddProduct class.
   */
  confirmActualPrice = (price:string) => {
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
  selectMarkupPrice = (price:string) => {
    cy.get('[data-testid="markup_price"]').find('input').type(`${price}{enter}`)
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the submit Product button.
   * @returns {this} object instance of AddProduct class.
   */
  clickSubmitBtn = () => {
    cy.get('[data-testid="submit_product"]').click()
    cy.wait(1000)
    return this
  }
  clickSaveProduct = () => {
    cy.get('[data-testid="save_product"]').click()
    cy.wait(1000)
    return this
  }

  /**
   * Clicks the Manage Product button.
   * @returns {this} object instance of ManageProduct class.
   */
  clickManageProductBtn = () => {
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

