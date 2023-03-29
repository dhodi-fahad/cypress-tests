/// <reference types="cypress" />



export const enter = (sometext:string, at:string) => {
  return cy.get(`[data-testid="${at}"]`).clear().type(at)
}


