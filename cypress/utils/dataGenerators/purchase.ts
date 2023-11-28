import {generatesSuppliers, supplier, Supplier} from "./supplier";
import {generateProducts, product, Product, ProductDetails, SelectProduct} from "./product";
import {generateData, getTodaysDate} from "./index";

/**
 * Interface for Purchase details.
 */
export interface Purchase{
    supplier:Supplier,
    invoice_no:string,
    purchase_date:string,
    expected_payment_date:string,
    details:string,
    productsDetails:ProductDetails,
    products_purchased_details:ProductPurchased[],
    grand_total:number
}

export interface ProductPurchased{
    product:SelectProduct,
    batchId:string,
    expiryDate:string,
    expiryLimit:number | string,
    stock:number,
    quantity:number | string,
    unitCost:number | string
    totalCost: number
}


/**
 * Generates details of products purchased
 * @param {number} max - maximum number of products to be generated
 * @return {Purchase} - Purchase details
 */
export const generateProductPurchasedDetails =(max:number):Purchase => {
    
    const _products = generateProducts(max)
    let _products_purchased_details:ProductPurchased[] = []
    let grand_total = 0
    _products.products.forEach((product,index)=>{
        const single_product: ProductPurchased = {
            product: {name: product.name, strength: product.strength},
            batchId: generateData().toUpperCase(),
            expiryDate: '2030-10-10',
            expiryLimit: product.expiryLimit,
            stock: 0,
            unitCost: product.price.amount - (product.price.amount * (50 / 100)), // made unit_cost 50% less than product_price
            quantity: product.maxStock - (product.maxStock * 0.5),
            totalCost:0,

        };
        single_product.totalCost = +single_product.quantity * +single_product.unitCost
        _products_purchased_details.push(single_product)
        grand_total = grand_total + single_product.totalCost
    })
    let purchase: Purchase = <Purchase>{}
    purchase.productsDetails = _products
    purchase.grand_total = grand_total
    purchase.products_purchased_details = _products_purchased_details
    purchase.supplier = generatesSuppliers(1)[0]
    purchase.invoice_no = generateData().toUpperCase()
    purchase.purchase_date = getTodaysDate()
    purchase.expected_payment_date = getTodaysDate()
    purchase.details = generateData()
    return purchase
}
