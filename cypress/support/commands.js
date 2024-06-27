import * as credentials from '../support/credentials.js'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://dev.omni-dispatch.com/login');
    cy.get('#input-0').type(credentials.adminCredentials.admin_email)
    cy.get('#input-2').type(credentials.adminCredentials.admin_password)
    cy.get('button[type=button]').click()
    cy.visit('https://dev.omni-dispatch.com/fleets/trucks')
    cy.get('div.v-avatar').should('be.visible')
})