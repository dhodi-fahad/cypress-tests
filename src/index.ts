/// <reference types="cypress" />



export const enter = (sometext:string, at:string) => {
  return cy.get(`[data-testid="${at}"]`).clear().type(at)
}

export const select = (sometext:string, at:string) => {
  cy.get(`[data-testid="${at}"]`).type(sometext)
  selectDropDownOption(sometext)
}

export const selectDropDownOption = (option:string) => {
  return cy.get('.MuiAutocomplete-popper [role="listbox"] [role="option"]', {
    timeout: 10000,
  }).contains(option).first().click();
}

