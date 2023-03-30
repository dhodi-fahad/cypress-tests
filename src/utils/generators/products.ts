import { generateData, getRandomInt } from "../index"
// import faker from 'faker';

/**
 * Interface for Product Unit.
 */
export interface ProductUnit {
  name: string
}

/**
 * Object Variable for Product Unit.
 */
export const unit: ProductUnit = {
  name: 'U-'+getRandomInt(100)+'-'+getRandomInt(100)
}

/**
 * Interface for Product Type.
 */
export interface ProductType {
  name: string
}

/**
 * Object Variable for Product Type.
 */
export const type: ProductType = {
  name: 'T-'+getRandomInt(100)+'-'+getRandomInt(100)
}

/**
 * Interface for Product Category.
 */
export interface ProductCategory {
  name: string
}

/**
 * Object Variable for Product Category.
 */
export const category: ProductCategory = {
  name: 'Cat-'+getRandomInt(100)+'-'+getRandomInt(100)
}


/**
 * Interface for Product Object for the select product input field
 */
export interface SelectProduct{
  name:string,
  strength:string
}


/**
 * Interface for Product details to be added.
 */
export interface Product {
  name:string,
  generic:string,
  unit:string,
  strength:string,
  category:string,
  boxSize:string | number,
  shelf:string,
  reOrderLevel:number,
  expiryLimit:number,
  maxStock: number,
  type:string,
  details:string,
  price: Price
}

/**
 * Interface for Product Price.
 */
export interface Price {
  type:string,
  amount:number
}

/**
 * Object Variable for Product details to be added.
 */
export const product: Product = {
  name:'Product-'+getRandomInt(100)+'-'+getRandomInt(100),
  generic:'Generic-'+getRandomInt(100)+'-'+getRandomInt(100),
  unit:unit.name,
  strength:getRandomInt(200)+'mg',
  category:category.name,
  boxSize:getRandomInt(300),
  shelf:'A-'+getRandomInt(500),
  reOrderLevel:getRandomInt(100),
  expiryLimit:120,
  maxStock: 10000,
  type:type.name,
  details: generateData(),
  price: {
    type:'Actual price',
    amount:getRandomInt(1000)*getRandomInt(500)
  }
}

/**
 * Generates a list of products
 * @param {number} max - maximum number of products to generate
 * @returns {[Product]} - list of products
 * @example
 * let some_products = generateProducts(3)
 */
export const generateProducts = (max:number):[Product] => {
  let products:[Product]
  for(let i:number = 0; i<max; i++){
    let _product = product
    products.push(_product)

  }
  return products
}
