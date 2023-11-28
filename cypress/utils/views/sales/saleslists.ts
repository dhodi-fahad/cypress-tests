/**
 Implement functions for this class.
export class ReceiptsLists {}
     visit - url is "sales-receipts"
     assert the receipt attributes in the list. here are their data-testids (create a separate assertion function for each attribute)
     here is a sample function you can follow to implement the functions
    //  assertTransactionReceiver = (receiver, row:number=0):this =>{
    //     cy.get(`[data-testid="transaction_receiver-${row}"]`).should('contain.text', receiver)
    //     cy.wait(waitTime)
    //     return  this
    // }
     sale_date
     customer_name
     total_amount
     sale_status
     sale_date
     Also each receipt in the list has the view and edit buttons, here are their data-testids as well; So I need functions to click the view and edit buttons.
     view_receipt
     delete_receipt
 */
import {waitTime} from "../../util";

export class SalesList {
    // Declare properties to store the data-testids of various elements
    private saleDateTestId = 'sale_date';
    private saleNumberTestId = 'sale_number'
    private customerNameTestId = 'customer_name';
    private totalAmountTestId = 'total_amount';
    private dueAmountTestId = 'due_amount';
    private saleStatusTestId = 'sale_status';
    private viewReceiptTestId = 'view_sale';
    private cancelReceiptTestId = 'cancel_sale';
    private searchListTestId = "search_list";
    private receiptNumber = "receipt_number";
    private filterButton = "filter_date"
    private periodFilter = "select_period"
    private fromDate = "from_date"
    private toDate = "to_date"




    public searchList(searchValue:string):this{
        cy.get(`[data-testid="${this.searchListTestId}"]`).type(searchValue)
        cy.wait(waitTime)
        return this
    }

    // Define assertion functions for receipt attributes
    public assertSaleDate(expected: string, row: number = 0): this {
        cy.get(`[data-testid="${this.saleDateTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    public getSaleDate(row: number = 0): Cypress.Chainable<string> {
        return cy.get(`[data-testid="${this.saleNumberTestId}-${row}"]`)
            .invoke('text')

            .then((text: string) => {
                return text.trim();
            });
    }

    public assertSaleNumber(expected: string, row: number = 0): this {
        cy.get(`[data-testid="${this.saleNumberTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    public getSaleNumber(row: number = 0): Cypress.Chainable<string> {
        return cy.get(`[data-testid="${this.saleNumberTestId}-${row}"]`)
            .invoke('text')
            .then((text: string) => {
                return text.trim();
            });
    }


    public assertCustomerName(expected: string, row: number = 0): this {
        cy.get(`[data-testid="${this.customerNameTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }
    public assertReceiptNumber(expected: string, row: number = 0): this {
        cy.get(`[data-testid="${this.receiptNumber}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    public assertTotalAmount(expected: number | string, row: number = 0): this {
        cy.get(`[data-testid="${this.totalAmountTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    public assertDueAmount(expected: number | string, row: number = 0): this {
        cy.get(`[data-testid="${this.dueAmountTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    public assertSaleStatus(expected: string, row: number = 0): this {
        cy.get(`[data-testid="${this.saleStatusTestId}-${row}"]`).should('have.text', expected);
        cy.wait(waitTime)
        return this
    }

    // Define a method to click the view button of a receipt at the given row
    public clickViewReceipt(row: number = 0): this {
        cy.get(`[data-testid="${this.viewReceiptTestId}-${row}"]`).click();
        cy.wait(waitTime)
        return this
    }

    // Define a method to click the delete button of a receipt at the given row
    public clickCancelSale(row: number = 0): this {
        cy.get(`[data-testid="${this.cancelReceiptTestId}-${row}"]`).click();
        cy.wait(waitTime)
        return this
    }

    public selectPeriod = (name:string):this => {
        cy.get(`[data-testid=${this.periodFilter}]`).type(`${name}{enter}`)
        // cy.getDropdownOptions(name)
        cy.wait(waitTime)
        return this
    }


    public enterFromDate = (date:string):this => {
        cy.get(`[data-testid=${this.fromDate}]`).clear().type(date)
        cy.wait(waitTime)
        return this
    }

    public enterToDate = (date:string):this => {
        cy.get(`[data-testid=${this.toDate}]`).clear().type(date)
        cy.wait(waitTime)
        return this
    }

    public filterList = ():this => {
        cy.get(`[data-testid=${this.filterButton}]`).click()
        cy.wait(waitTime)
        return this
    }


}

export class ReceiptsList extends SalesList{
    public visit(): this {
        cy.visit('sales-receipts');
        cy.wait(waitTime)
        return this
    }
}

export class SalesReport extends SalesList{
    public visit(): this {
        cy.visit('sales_report');
        cy.wait(waitTime)
        return this
    }
}

export class InvoiceList extends SalesList{
    public visit(): this {
        cy.visit('manageinvoice');
        cy.wait(waitTime)
        return this
    }
}

export class CustomerReceivables extends SalesList{
    public visit(): this {
        cy.visit('accounting/debtors/report');
        cy.wait(waitTime)
        return this
    }
}


