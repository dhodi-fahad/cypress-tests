export const adminUsername = 'admin@mara.com'
export const adminPassword = '123456'

export const waitTime = 500

export interface Message {
  title:string,
  body:string
}


export const locateSnackBar = (message: string) => {
  cy.get('#client-snackbar').should('contain.text', message)
}

/**
 * @classdesc This class has actions for the generic dialogue box
 */
export class DialogueBoxUtil {

  /**
   * Asserts the message in the dialogue box
   * @param {object} message - Dialogue Message. Should have message title and message body
   * @returns {this} object instance of DailogueBoxUtil class.
   */
  confirmDialogueMessage = (message: Message): this => {
    const {title, body} = message

    return this
  }

  /**
   * Clicks close button on dialogue box
   * @returns {this} object instance of DialogueBoxUtil class.
   */
  clickCloseDialogueBox = (): this => {
    return this
  }

  /**
   * Clicks Confirm button on dialogue box
   * @returns {this} object instance of DialogueBoxUtil class.
   */
  clickConfirmBtn = (): this => {
    cy.get('[data-testid="yesBtn"]').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks Cancel button on dialogue box
   * @returns {this} object instance of DialogueBoxUtil class.
   */
  clickCancelBtn = (): this => {
    cy.get('[data-testid="noBtn"]').click()
    cy.wait(waitTime)
    return this
  }
}



/**
 * List Utils Class
 * Contains functions that apply on all lists within the app
 */
export class ListUtils extends DialogueBoxUtil{

  /**
   * Searches for item from the List
   * @param {string} value - search value
   * @returns {this} - object instance of ListUtils class.
   */
  search = (value: string): this => {
    cy.get('input[placeholder="Search"]').clear().type(value)
    cy.wait(5000)
    return this
  }

  /**
   * Clicks the export Excel button.
   * @returns {this} object instance of ListUtils class.
   */
  clickExportExcelBtn = (): this => {
    cy.get('.btn-group').find('button').first().should('contain.text', 'Excel').click()
    cy.wait(waitTime)
    return this
  }

  /**
   * Clicks the export PDF button.
   * @returns {this} object instance of ListUtils class.
   */
  clickExportPdfBtn = (): this => {
    cy.get('.btn-group').find('button').last().should('contain.text', 'PDF').click()
    cy.wait(waitTime)
    return this
  }
}


