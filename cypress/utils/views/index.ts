import Login from "./login";
import {
    ADD_PRODUCT,
    LOGIN,
    MANAGE_PRODUCT,
    ADD_UNIT,
    PRODUCT_TYPE,
    ADD_PURCHASE,
    MANAGE_PURCHASE,
    ADD_CUSTOMER, CREDIT_SALE, CASH_SALE
} from "../urls";
import AddProduct from "./product/addproduct";
import ManageProduct from "./product/manageproduct";
import ProductUnit from "./product/productunit";
import { ProductType } from "./product/producttype";
import AddPurchase from "./purchase/addpurchase";
import ManagePurchase from "./purchase/managepurchase";
import {AddCustomer} from "./customer/addcustomer";
import {MakeCashSale, MakeCreditSale} from "./sales/makesale";


const navigate = (page:string) => {
    page = page.toLowerCase()
    switch(page){
        case LOGIN.toLowerCase():
            const login = new Login()
            login.visit()
            return login
        case CREDIT_SALE.toLowerCase():
            const creditSale = new MakeCreditSale()
            creditSale.visit()
            return creditSale
        case CASH_SALE.toLowerCase():
            const cashSale = new MakeCashSale()
            cashSale.visit()
            return  cashSale
        case ADD_CUSTOMER.toLowerCase():
            const addCustomer = new AddCustomer()
            addCustomer.visit()
            return addCustomer
        case ADD_PRODUCT.toLowerCase():
            const addProduct = new AddProduct()
            addProduct.visit()
            return addProduct
        case MANAGE_PRODUCT.toLowerCase():
            const manageProduct = new ManageProduct()
            manageProduct.visit()
            return manageProduct
        case ADD_UNIT.toLowerCase():
            const addUnit = new ProductUnit()
            addUnit.visit()
            return addUnit
        case PRODUCT_TYPE.toLowerCase():
            const productType = new ProductType()
            productType.visit()
            return productType
        case ADD_PURCHASE.toLowerCase():
            const add_purchase = new AddPurchase()
            add_purchase.visit()
            return add_purchase
        case MANAGE_PURCHASE.toLowerCase():
            const managePurchase = new ManagePurchase()
            managePurchase.visit()
            return managePurchase
        default:
            return null
    }
    
}

export default navigate