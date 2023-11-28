// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
import './commands'
import {Product, ProductDetails, ProductMeta, ProductUnit, SelectProduct} from "../utils/dataGenerators/product";
import {Supplier} from "../utils/dataGenerators/supplier";
import {Purchase} from "../utils/dataGenerators/purchase";
import {Customer} from "../utils/dataGenerators/customer";
import {CashReceiptData} from "../utils/dataGenerators/sales";
// Alternatively you can use CommonJS syntax:
// require('./commands')


declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to log in a user.
             * @example cy.login('email', 'password')
             */
            login(email: string, password: string): Chainable<void>
            // ---- Product ----

            /**
             * Custom command to Enter product metadata at point of adding a new product(Unit, Type, and Category)
             * @param {ProductMeta} enterProductMetaAtProduct - product meta
             * @example cy.enterProductMetaAtProduct(enterProductMetaAtProduct)
             */
            enterProductMetaAtProduct(product_meta:ProductMeta):Chainable<void>

            /**
             * Custom command to Enter product metadata at point of adding a new product purchase (Unit, Type, and Category)
             * @example cy.enterProductMetaAtPurchase(enterProductMetaAtProduct)
             * @param product_meta
             */
            enterProductMetaAtPurchase(product_meta:ProductMeta):Chainable<void>
            /**
             * Custom command to Enter products at point of adding a new product
             * @example cy.enterProductMetaAtPurchase(enterProductMetaAtProduct)
             * @param productDetails
             */
            enterProducts(productDetails:ProductDetails):Chainable<void>
            /**
             * Custom command to Quick Add Product Unit.
             * @param {string} unit - product type to add
             * @example cy.quickAddUnit('unit')
             */
            quickAddUnit(unit: string): Chainable<void>

            /**
             * Custom command to Quick Add Product Category.
             * @example cy.quickAddCategory('category')
             */
            quickAddCategory(category: string): Chainable<void>

            /**
             * Custom command to Quick Add Product Type.
             * @param {string} type - product type to add
             * @example cy.quickAddProductType(type)
             */
            quickAddProductType(type: string): Chainable<void>

            /**
             * Custom command to Add Product .
             * @example cy.addProduct(product)
             * @param products
             */
            addProduct(products: ProductDetails): Chainable<void>

            /**
             * Custom command to Enter Product details.
             * @param {Product} product - product details to add
             * @example cy.addProduct(product)
             */
            fillProductDetails(product: Product): Chainable<void>

            /**
             * Custom command to Quick Enter Supplier at creating new Purchase.
             * @param {Supplier} supplier - supplier to add
             * @example cy.quickEnterSupplierAtPurchase('supplier')
             */
            quickEnterSupplierAtPurchase(supplier: Supplier): Chainable<void>

            /**
             * Custom command to Quick Add Product.
             * @param {ProductDetails} products_details - products details to add
             * @example cy.quickEnterProductAtPurchase('supplier')
             */
            quickEnterProductAtPurchase(products_details: ProductDetails): Chainable<void>

            /**
             * Custom command to Add Supplier.
             * @param {Supplier} supplier - supplier to add
             * @example cy.addSupplier('supplier')
             */
            addSupplier(supplier: Supplier): Chainable<void>

            /**
             * Custom command to Enter Supplier's details.
             * @param {Supplier} supplier - product details to add
             * @example cy.enterSupplerDetails(supplier)
             */
            enterSupplerDetails(supplier: Supplier): Chainable<void>


            /**
             * Custom command to Create a products and Purchase them at the
             * same time.
             * @param {Purchase} purchase - purchase details to add
             * @example cy.purchaseProducts(purchase_details)
             */
            purchaseProducts(purchase: Purchase): Chainable<void>
            /**
             * Custom command to Create Purchase for exist products
             * @param {Purchase} purchase - purchase details to add
             * @example cy.createPurchase(purchase_details)
             */
            createPurchase(purchase: Purchase): Chainable<void>

            /**
             * Custom command to View Purchase added.
             * @param {Purchase} purchase - purchase details to add
             * @example cy.viewPurchaseDetails(purchase_details)
             */
            viewPurchaseDetails(purchase: Purchase): Chainable<void>

            /**
             * Custom command to select item in the dropdown.
             * @example cy.getDropdownOptions('option')
             * @param options
             */
            getDropdownOptions(options: string): Chainable<void>

             /**
             * Custom command to select item in products in tables.
             * @param {SelectProduct} product - product to select
             * @param {number} row - table row
             * @example cy.selectProduct(product, 1)
             */
            selectProduct(product:SelectProduct,row:number): Chainable<void>

            /**
             * Custom command to select item in products in tables.
             * @param {SelectProduct} product - product to select
             * @param {number} row - table row
             * @example cy.saleProducts(product, 1)
             */
            saleProducts(product:SelectProduct,row:number): Chainable<void>

            /**
             * Custom Cypress command to assert that the data in a cash receipt matches the data in a given object.
             * @param data An object containing the receipt data to assert.
             */
            assertCashReceiptData(data: CashReceiptData): Chainable;

            /**
             * Adds a new customer with the provided details.
             *
             * @example
             * cy.addNewCustomer({
             *     name: 'John Doe',
             *     mobile: '1234567890',
             *     email: 'johndoe@example.com',
             *     address: '123 Main St, Anytown USA',
             *     category: 'VIP customer',
             *     creditLimit: '5000'
             * });
             *
             * @param {Customer} customer - The customer details to add.
             *
             */
            addNewCustomer(customer:Customer): Chainable<void>

            /**
             * Adds a new customer with the provided details
             * at the add customer page
             *
             * @example
             * cy.addCustomers([{
             *     name: 'John Doe',
             *     mobile: '1234567890',
             *     email: 'johndoe@example.com',
             *     address: '123 Main St, Anytown USA',
             *     category: 'VIP customer',
             *     creditLimit: '5000'
             * }]);
             *
             * @param {Customer[]} customers - The customer details to add.
             *
             */
            addCustomers(customers:Customer[]): Chainable<void>

            /**
             * Quick Adds a new customer with the provided details at
             * point of creating a sale.
             *
             * @example
             * cy.addCustomer({
             *     name: 'John Doe',
             *     mobile: '1234567890',
             *     email: 'johndoe@example.com',
             *     address: '123 Main St, Anytown USA',
             *     category: 'VIP customer',
             *     creditLimit: '5000'
             * });
             *
             * @param {Customer} customer - The customer details to add.
             *
             */
            quickAddCustomer(customer:Customer): Chainable<void>
            /**
             * Goes to the customer list page and confirms that a customer with the given details has been added to the list.
             *
             * @param {Customer} customer - The customer details to confirm.
             *
             * @example
             * cy.goToCustomerListAndConfirm({
             *   name: 'John Doe',
             *   address: '123 Main St',
             *   mobile: '555-1234',
             *   creditLimit: 1000
             * })
             */

            goToCustomerListAndConfirm(customer:Customer): Chainable<void>

            /**
             * Command to edit a customer's details, including name, address, mobile, and credit limit.
             * @param {Customer} oldCustomer -  An object containing the old values for the customer's details to confirm and edit.
             * @param {Customer} newCustomer - An object containing the new values to enter for the customer's details.
             * @returns The updated customer list page object.
             *  @example
             *  cy.editCustomer(oldCustmer, newCustomer)
             */
            editCustomer(oldCustomer:Customer, newCustomer:Customer): Chainable<void>
        }
    }
}
