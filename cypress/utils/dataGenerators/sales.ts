import {Product, SelectProduct} from "./product";
import {generateData} from "./index";
import {ProductPurchased} from "./purchase";

export interface ProductForSale {

    product:SelectProduct,
    stock:number,
    batchId:string,
    batchStock:number,
    expiryDate:string,
    unit:string,
    quantity:number,
    price:number,
    discount:number,
    total:number

}

export interface ProductSaleDetails {
    customer_name: string,
    payment_method: string,
    total_amount: number,
    paid_amount:string,
    balance:number,
    due_amount:number,
    products:[ProductForSale]
}

/**
 * Interface for sales report
 */

export interface SalesMade{
    date:string,
    customer_name:string,
    receipt_number:string,
}


export interface SalesDateFilter{
    from_date:string,
    to_date:string
}

export interface SalesSelectPeriod{
    value:string,
    label:string
}

export interface SalesReportList{
    date:SalesDateFilter,
    period:SalesSelectPeriod
    productsSold:SalesMade[]
}




export const generateProductSalesDate = (quantityToSell:number, products:Product[], purchaseDetails:ProductPurchased[]) => {
    let theProducts:ProductForSale[] = []
    let amountPaid:number = 0

    products.forEach((product:Product, index)=>{
        let totalAmount = +product.price.amount * quantityToSell
        amountPaid = amountPaid + totalAmount
        let new_object:ProductForSale = {
            product:{
                name:product.name,
                strength:product.strength
            },
            unit:product.unit,
            price:+product.price.amount,
            batchId:purchaseDetails[index].batchId,
            expiryDate:purchaseDetails[index].expiryDate,
            stock:+purchaseDetails[index].quantity,
            batchStock:+purchaseDetails[index].quantity,
            quantity:quantityToSell,
            discount:0,
            total:totalAmount
        }
        theProducts.push(new_object)
    })
    return {
        amountPaid,
        theProducts
    }

}


/**
 * Interface representing a product on a receipt.
 */
export interface ReceiptProductData {
    product: string;
    batch: string;
    quantity: string;
    totalPrice: string;
}

/**
 * Interface representing receipt data.
 */
export interface CashReceiptData {
    customer: string;
    receivedBy: string;
    amountPaid: string;
    totalAmount: string;
    products: ReceiptProductData[];
}

