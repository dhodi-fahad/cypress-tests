import { waitTime } from "../../util";

export class CashSaleReceipt {

    cancelReceipt = () => {
        cy.get('[data-testid="cancel_sale"]').click()
        cy.wait(waitTime)
        return this
    }
}
