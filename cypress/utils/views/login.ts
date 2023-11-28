/// <reference types="cypress" />
import { waitTime } from "../util"
import {LOGIN} from "../urls";


/**
 * Login view class
 */
class Login{
    protected url = LOGIN

    /**
     * Visits the Url for the login page.
     * @returns {this} object instance of Login class.
     */
    visit = () => {
        cy.visit(this.url)
        cy.wait(1000)
        return this
    }

    enterUsername = (userName) => {
        cy.get("#useremail").clear().type(userName)
        cy.wait(waitTime)
        return this
    }

    enterPassword = (password) => {
        cy.get("#userpassword").clear().type(password)
        cy.wait(waitTime)
        return this
    }

    clickLoginBtn = () => {
        cy.get("#login_btn").click()
        cy.wait(waitTime)
        return this
    }

    locateErrorAlert = () => {
        cy.get(".alert-danger").should('contain.text', 'Username or Password is Incorrect!')
        return this
    }

}

export default Login