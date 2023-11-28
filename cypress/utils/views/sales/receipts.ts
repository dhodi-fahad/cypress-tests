import {waitTime} from "../../util";
export class CashSaleReceipt{
    private productNameTestId = "product_name";
    private saleNumberTestId = "sale_number";
    private customerTestId = "customer";
    private batchTestId = "batch";
    private quantityTestId = "quantity";
    private rateTestId = "rate";
    private totalRateTestId = "total_rate";
    private totalAmountTestId = "total_amount";
    private paidAmountTestId = "paid_amount";

    assertReceiptNumber = (num: string) => {
        cy.get(`[data-testid='${this.saleNumberTestId}']`).should(
            "contain.text",
            num
        );
        cy.wait(waitTime);
        return this;
    };

    assertCustomer = (customerName: string) => {
        cy.get(`[data-testid='${this.customerTestId}']`).should(
            "contain.text",
            customerName
        );
        cy.wait(waitTime);
        return this;
    };

    assertProductName = (name: string, row = 0) => {
        cy.get(`[data-testid='${this.productNameTestId}-${row}']`).should(
            "contain.text",
            name
        );
        cy.wait(waitTime);
        return this;
    };

    assertBatch = (batch: string, row = 0) => {
        cy.get(`[data-testid='${this.batchTestId}-${row}']`).should(
            "contain.text",
            batch
        );
        cy.wait(waitTime);
        return this;
    };

    assertQuantity = (qty: string, row = 0) => {
        cy.get(`[data-testid='${this.quantityTestId}-${row}']`).should(
            "contain.text",
            qty
        );
        cy.wait(waitTime);
        return this;
    };

    assertRate = (amount: string, row = 0) => {
        cy.get(`[data-testid='${this.rateTestId}-${row}']`).should(
            "contain.text",
            amount
        );
        cy.wait(waitTime);
        return this;
    };

    assertTotalRate = (amount: string, row = 0) => {
        cy.get(`[data-testid='${this.totalRateTestId}-${row}']`).should(
            "contain.text",
            amount
        );
        cy.wait(waitTime);
        return this;
    };

    assertTotalAmount = (amount: string) => {
        cy.get(`[data-testid='${this.totalAmountTestId}']`).should(
            "contain.text",
            amount
        );
        cy.wait(waitTime);
        return this;
    };

    assertAmountPaid = (amount: string) => {
        cy.get(`[data-testid='${this.paidAmountTestId}']`).should(
            "contain.text",
            amount
        );
        cy.wait(waitTime);
        return this;
    };

}
