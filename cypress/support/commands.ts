
import navigate from '../utils/views/index';
import AddProduct from '../utils/views/product/addproduct';
import ProductUnit from '../utils/views/product/productunit';
import ProductCategory from '../utils/views/product/productcategory';
import { ProductType } from '../utils/views/product/producttype';
import {ADD_CUSTOMER, ADD_PRODUCT, ADD_PURCHASE, LOGIN, MANAGE_PRODUCT, MANAGE_PURCHASE} from '../utils/urls';
import {locateSnackBar, waitTime} from '../utils/util';
import AddPurchase from "../utils/views/purchase/addpurchase";
import {category, product, Product, ProductDetails, ProductMeta, SelectProduct} from "../utils/dataGenerators/product";
import {AddSupplier} from "../utils/views/suppliers/supplier";
import {Supplier} from "../utils/dataGenerators/supplier";
import {ProductPurchased, Purchase} from "../utils/dataGenerators/purchase";
import ManagePurchase from "../utils/views/purchase/managepurchase";
import {convertAmountToUGX, convertDate, dateStringConvert} from "../utils/dataGenerators";
import {Customer} from "../utils/dataGenerators/customer";
import {AddCustomer} from "../utils/views/customer/addcustomer";
import {CustomerListPage} from "../utils/views/customer/managecustomer";
import {CashSaleReceipt} from "../utils/views/sales/receipts";
import {CashReceiptData} from "../utils/dataGenerators/sales";


// -- Login --

Cypress.Commands.add('login', (email: string, password: string):void=>{
    const login = navigate(LOGIN)
    login.enterUsername(email)
    login.enterPassword(password)
    login.clickLoginBtn()
    cy.wait(1000)
})


Cypress.Commands.add("quickAddUnit", (unit):void=>{
    const addproduct = new AddProduct()
    addproduct.clickQuickAddUnit()
    cy.wait(1000)
    const productUnit = new ProductUnit()
    productUnit.enterProductUnitName(unit)
    productUnit.clickSubmitProductUnitBtn()
    cy.wait(1000)
})

Cypress.Commands.add("quickAddCategory", (category:string):void=>{
    const addproduct = new AddProduct()
    addproduct.clickQuickAddCategory()
    cy.wait(1000)
    const productCategory = new ProductCategory()
    productCategory.enterProductCategoryName(category)
    productCategory.clickSubmitProductCategoryBtn()
    cy.wait(1000)
})

Cypress.Commands.add("quickAddProductType", (type:string):void=>{
    const addproduct = new AddProduct()
    addproduct.clickQuickAddType()
    cy.wait(1000)
    const productType = new ProductType()
    productType.enterProductTypeName(type)
    productType.clickSubmitProductTypeBtn()
    cy.wait(1000)
})



// Cypress.Commands.add('quickAddProduct', (products: ProductDetails):void=>{
//     const addPurchase = new AddPurchase()
//     addPurchase.clickQuickAddProductBtn()
//     cy.enterProductDetails(products)
//
//     locateSnackBar("Product Saved Successfully")
//
// })

Cypress.Commands.add('addSupplier', (supplier: Supplier):void=>{
    const addSupplier = new AddSupplier()
    addSupplier.visit()
    cy.enterSupplerDetails(supplier)
    cy.wait(1000)
})

// Enters suppler details
Cypress.Commands.add('enterSupplerDetails', (supplier: Supplier):void=>{
    const {name, details, phone, address} = supplier
    const addSupplier = new AddSupplier()
    addSupplier.enterSupplierName(name)
    addSupplier.enterSupplierPhoneNumber(phone)
    addSupplier.enterSupplierAddress(address)
    addSupplier.enterSupplierDetails(details)
    addSupplier.clickAddSupplier()
})

Cypress.Commands.add('addProduct',(productDetails:ProductDetails):void=>{
    const addproduct = navigate(ADD_PRODUCT)
    // cy.enterProductDetails(productDetails)
    addproduct.clickSaveProduct()
})

Cypress.Commands.add('fillProductDetails', (product:Product):void=>{

    let addProduct = new AddProduct()

    const {unit, details, boxSize, type, price, generic, strength, shelf, category, expiryLimit, reOrderLevel, name, maxStock} = product
    addProduct.enterProductName(name)
    addProduct.enterGenericName(generic)
    addProduct.enterProductStrength(strength)
    addProduct.selectProductType(type)
    addProduct.selectProductCategory(category)
    addProduct.selectProductUnit(unit)
    addProduct.enterBoxSize(boxSize)
    addProduct.enterProductShelf(shelf)
    addProduct.enterReorderLevel(reOrderLevel)
    addProduct.enterExpiryLimit(expiryLimit)
    addProduct.enterMaxStock(maxStock)
    addProduct.enterDetails(details)
    addProduct.selectPriceType(price.type)
    addProduct.enterActualPrice(price.amount)
    addProduct.clickSubmitBtn()
})


Cypress.Commands.add('viewPurchaseDetails',(purchase_details:Purchase)=>{
    const { products_purchased_details, supplier, invoice_no, purchase_date, grand_total} = purchase_details
    const managePurchase =navigate(MANAGE_PURCHASE)
    managePurchase.search(invoice_no)
    managePurchase.confirmPurchaseDate(dateStringConvert(purchase_date))
    managePurchase.confirmSupplier(supplier.name)
    managePurchase.confirmInvoiceNumber(invoice_no)
    managePurchase.confirmTotalPurchaseCost(convertAmountToUGX(grand_total))
    const view_purchase_details = managePurchase.clickViewPurchaseBtn()
    // view_purchase_details.confirmInvoiceNumber(invoice_no)
    // view_purchase_details.confirmSupplierName(supplier.name)
    products_purchased_details.forEach((product_purchased:ProductPurchased,index:number)=>{
        const {product, batchId, expiryDate, expiryLimit, stock, quantity, unitCost } = product_purchased
        const total_cost:number = +unitCost * +quantity
        view_purchase_details.confirmProduct(product.name,index)
        view_purchase_details.confirmBatchId(batchId,index)
        view_purchase_details.confirmExpiryDate(expiryDate,index)
        view_purchase_details.confirmProducQty(+quantity,index)
        view_purchase_details.confirmProductTotalAmount(total_cost,index)
    })
})


/**
 *  Selector for the autocomplete field options
 */
Cypress.Commands.add('getDropdownOptions', (option):void => {
    // return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    //     timeout: 10000,
    // });
    cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
        timeout: 2000,
    }).contains(option).first().click();
});

Cypress.Commands.add('selectProduct' , (product:SelectProduct, row:number=0):void => {
    cy.get(`[data-testid="product-${row}"]`).find('input').clear().type(product.name)
    cy.wait(waitTime)
    cy.getDropdownOptions(`${product.name}(${product.strength})`)
    cy.wait(waitTime)
   
})

// ----- Products -----

Cypress.Commands.add('enterProductMetaAtProduct',(product_meta:ProductMeta)=>{
    const {unit, type, category} = product_meta
    navigate(ADD_PRODUCT)

    // ---- Add Unit ----
    cy.quickAddUnit(unit)
    // ---- Add Category ----
    cy.quickAddCategory(category)
    // ---- Add Type ----
    cy.quickAddProductType(type)

})

Cypress.Commands.add('enterProductMetaAtPurchase',(product_meta:ProductMeta)=>{
    const {unit, type, category} = product_meta
    let add_purchase = navigate(ADD_PURCHASE)
    add_purchase.clickQuickAddProductBtn()
    // ---- Add Unit ----
    cy.quickAddUnit(unit)
    // ---- Add Category ----
    cy.quickAddCategory(category)
    // ---- Add Type ----
    cy.quickAddProductType(type)
})

Cypress.Commands.add('enterProducts',(product_details:ProductDetails)=>{
    const {unit, type, category,products} = product_details
    let products_meta:ProductMeta = {unit,type,category}
    cy.enterProductMetaAtProduct(products_meta)
    let addProduct =  navigate(ADD_PRODUCT)
    products.forEach((product,index)=>{
        cy.fillProductDetails(product)

        if(index+1 < products.length){
            // click the add anotherProduct
            addProduct.clickAddAnotherProduct()
        } else {
            addProduct.clickSaveProduct()
        }
    })

    let manageProduct = navigate(MANAGE_PRODUCT)
    products.forEach((product, index)=>{
        manageProduct.search(product.name)
        manageProduct.confirmProductName(product.name)
        manageProduct.confirmProductStrength(product.strength)
        manageProduct.confirmSellingPrice(product.price.amount)
        manageProduct.confirmProductUnit(product.unit)
        manageProduct.confirmProductShelf(product.shelf)
    })

})

Cypress.Commands.add('quickEnterProductAtPurchase', (product_detals:ProductDetails)=>{
    const {unit, type, category,products} = product_detals
    let products_meta:ProductMeta = {unit,type,category}
    cy.enterProductMetaAtPurchase(products_meta)
    let add_purchase = navigate(ADD_PURCHASE)
    products.forEach((product,index)=>{
        add_purchase.clickQuickAddProductBtn()
        cy.fillProductDetails(product)
        cy.wait(waitTime)
    })
})

// ---- Suppliers ----

Cypress.Commands.add('quickEnterSupplierAtPurchase', (supplier: Supplier):void=>{
    const addPurchase = navigate(ADD_PURCHASE)
    addPurchase.clickQuickAddSupplier()
    cy.wait(1000)
    cy.enterSupplerDetails(supplier)
    // locateSnackBar("Supplier Saved Successfully")
    cy.wait(1000)
})

// Cypress.Commands.add("getRowOfSupplierInListOfAccountsPayable", (supplierName) => {
//     cy.get('[data-testid="supplier-"]').each(($row, index) => {
//         if ($row.find('[data-testid="supplier-"]').text() === supplierName) {
//             return index;
//         }
//     });
// });



// ---- Purchases ----

Cypress.Commands.add('purchaseProducts', (purchase:Purchase):void=>{

    const {productsDetails} = purchase
    cy.quickEnterProductAtPurchase(productsDetails)
    cy.createPurchase(purchase)
})

Cypress.Commands.add('createPurchase',(purchase:Purchase)=>{
    const {products_purchased_details, supplier, invoice_no, purchase_date, expected_payment_date, details, grand_total} = purchase
    cy.quickEnterSupplierAtPurchase(supplier)
    const addPurchase = navigate(ADD_PURCHASE)
    addPurchase.selectSupplier(supplier.name)
    addPurchase.enterInvoiceNumber(invoice_no)
    addPurchase.enterPurchaseDate(purchase_date)
    addPurchase.enterExpectedPaymentDate(expected_payment_date)
    addPurchase.enterDetails(details)

    products_purchased_details.forEach((product_purchased:ProductPurchased,index:number)=>{
        const {product, batchId, expiryDate, expiryLimit, stock, quantity, unitCost, totalCost } = product_purchased

        addPurchase.selectProduct(product,index)
        addPurchase.enterBatchId(batchId,index)
        addPurchase.clickSubmitPurchaseBtn()
        addPurchase.enterExpiryDate(expiryDate,index)
        addPurchase.confirmExpiryLimit(expiryLimit,index)
        addPurchase.confirmStock(stock,index)
        addPurchase.enterQuantityPurchased(quantity.toString(),index)
        addPurchase.enterUnitCost(unitCost.toString(),index)
        addPurchase.confirmTotalCost(totalCost,index)
        if(index < products_purchased_details.length-1){
            addPurchase.clickAddRowBtn()
        }
    })
    addPurchase.confirmPurchaseGrandTotal(grand_total)
    addPurchase.clickSubmitPurchaseBtn()
    locateSnackBar("Purchase Saved Successfully")
    cy.viewPurchaseDetails(purchase)
})



// ---- Customer ----
Cypress.Commands.add('addCustomers',(customers:[Customer])=>{
    let addCustomer = navigate(ADD_CUSTOMER)
    customers.forEach((customer,index)=>{
        cy.addNewCustomer(customer)
        if(index+1 < customers.length){
            // click the addAnotherCustomer
            addCustomer.clickAddAnotherCustomer()
        } else {
            addCustomer.clickSubmitCustomers()
        }
    })
    customers.forEach((customer, index)=>{
        cy.goToCustomerListAndConfirm(customer)
    })

})

Cypress.Commands.add('quickAddCustomer',(customer:Customer)=>{
    cy.addNewCustomer(customer)
    cy.reload()
})

Cypress.Commands.add('addNewCustomer', (customer: Customer) => {
    const {category, name, mobile, email, address, creditLimit} = customer
    const addCustomer = new AddCustomer();
    addCustomer
        .enterCustomerName(name)
        .enterCustomerMobile(mobile)
        .enterCustomerEmail(email)
        .enterCustomerAddress(address)
        .selectCustomerCategory(category)
        .enterCreditLimit(creditLimit.toString())
        .clickSaveCustomer();
});


Cypress.Commands.add('goToCustomerListAndConfirm', (customer: Customer):void=>{
    const {name, address, mobile, creditLimit} = customer

    const customerList = new CustomerListPage()
    customerList.visit()
    customerList.searchCustomerByName(name)
    customerList.confirmCustomerName(name)
    customerList.confirmCustomerAddress(address)
    customerList.confirmCustomerMobile(mobile)
    customerList.confirmCustomerCreditLimit(creditLimit.toString())
})

Cypress.Commands.add('editCustomer',(oldCustomer:Customer, newCustomer:Customer)=>{
    cy.goToCustomerListAndConfirm(oldCustomer)
    let customerListPage = new CustomerListPage()
    customerListPage.clickEditCustomerButton()
    const {category, name, email, address, mobile, creditLimit} = oldCustomer
    let edit = new AddCustomer()
    // edit.confirmCustomerCategory(category)
    edit.confirmCustomerName(name)
    edit.confirmCustomerAddress(address)
    edit.confirmCustomerEmail(email)
    edit.confirmCustomerMobile(mobile)
    edit.confirmCustomerCreditLimit(creditLimit.toString())
    cy.addNewCustomer(newCustomer)
    cy.goToCustomerListAndConfirm(newCustomer)

})



// ---- Sales ----

Cypress.Commands.add('saleProducts', (sales_details)=>{

})

/**
 * Define the `assertReceiptData` command.
 */
Cypress.Commands.add('assertCashReceiptData', (receiptData: CashReceiptData) => {
    const { customer, receivedBy, amountPaid, totalAmount, products } = receiptData;
    const receiptAssertions = new CashSaleReceipt();

    // Assert top-level data
    receiptAssertions
        .assertCustomerName(customer)
        .assertReceivedBy(receivedBy)
        .assertTotalAmount(totalAmount)
        .assertPaidAmount(amountPaid);

    // Assert product data
    products.forEach((product, index) => {
        const { batch, product: productName, quantity, totalPrice } = product;

        receiptAssertions
            .assertProduct(productName, index)
            .assertBatchNo(batch, index)
            .assertQuantity(quantity, index)
            .assertPrice(totalPrice, index);
    });
});
