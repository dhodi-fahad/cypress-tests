import { generateData, getRandomInt } from "."
import faker from 'faker';

// ------ Product Interfaces -----

/**
 * Interface for Product_details to be added.
 */
export interface ProductDetails {
    unit:string,
    type:string,
    category:string,
    products:Product[]
}

/**
 * Interface for Product to be added.
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
 * Interface for Product Object for the select product input field
 */
export interface SelectProduct{
    name:string,
    strength:string
}

/**
 * Interface for Product Unit.
 */
export interface ProductUnit {
    name: string
}


/**
 * Interface for Product Type.
 */
export interface ProductType {
    name: string
}

/**
 * Interface for Product Category.
 */
export interface ProductCategory {
    name: string
}
export interface ProductMeta {
    unit:string,
    type:string,
    category:string
}

// ----- Product Variables -----
/**
 * Object Variable for Product Unit.
 */
export let unit: ProductUnit = {
    name: 'U-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000))
}


/**
 * Object Variable for Product Type.
 */
export let type: ProductType = {
    name: 'T-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000))
}

/**
 * Object Variable for Product Category.
 */
export let category: ProductCategory = {
    name: 'Cat-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000))
}


/**
 * Object Variable for Product details to be added.
 */
export let product: Product = {
    name:'Product-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000)),
    generic:'Generic-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000)),
    unit:unit.name,
    strength:getRandomInt(200)+'mg',
    category:category.name,
    boxSize:getRandomInt(300),
    shelf:'A-'+getRandomInt(500),
    reOrderLevel:getRandomInt(100)+1,
    expiryLimit:120,
    maxStock: 10000,
    type:type.name,
    details: generateData(),
    price: {
        type:'Actual price',
        amount:(getRandomInt(10)+1)*(getRandomInt(500)+1)
    }
}

/**
 * Generates a list of products
 * @param {number} max - maximum number of products to generate
 * @returns {ProductDetails} - details of products to be added
 * @example
 * let some_products = generateProducts(3)
 */
export const generateProducts = (max:number):ProductDetails => {
    let product_details = <ProductDetails>{}
    let products: [Product];
    let _unit:string = unit.name
    let _type:string = type.name
    let _category:string = category.name
    // @ts-ignore
    products = [];
    for(let i:number = 0; i<max; i++){
        let _product = product

        let product_to_add:Product = {
                name:'Product-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000)),
                generic:'Generic-'+(getRandomInt(700)*getRandomInt(3000))+'-'+(getRandomInt(700)*getRandomInt(3000)),
                unit:_unit,
                strength:getRandomInt(200)+' mg',
                category:_category,
                boxSize:getRandomInt(300),
                shelf:'A-'+getRandomInt(500),
                reOrderLevel:getRandomInt(100)+1,
                expiryLimit:120,
                maxStock: 1000,
                type:_type,
                details: generateData(),
                price: {
                    type:'Actual price',
                    amount:(getRandomInt(10)+1)*(getRandomInt(500)+1)
                }
        }
        products.push(product_to_add)
    }
    product_details["unit"] = _unit
    product_details["type"] = _type
    product_details["category"] = _category
    product_details["products"] = products
    return product_details
}
