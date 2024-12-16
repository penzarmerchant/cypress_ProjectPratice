/// <reference types="Cypress"/>

import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import contactInfoPage from './pages/contactInfoPage';
import contactPage from './pages/contactPage';
import createContactPage from './pages/createContactPage';

var contactName;
const errorMessage = 'Not valid';
describe('Create Contact Test', function () {

    before(function () {
        cy.task('generateContactsMockDataTask');
    })

    beforeEach(function () {
        cy.fixture('espoCRMContacts').as('ContactData');
    })

    it('Contact Creation', function () {
        cy.visit('/');
        loginPage.clickLogin();
        homePage.clickContactButton()
            .clickCreateContactButton()
            .createCompleteContact(this.ContactData.contactdetails);

        contactName = this.ContactData.contactdetails[1] + " " + this.ContactData.contactdetails[2];

        contactInfoPage.getContactTitleText().should('equal', contactName);
        contactInfoPage.getContactTitleText().should('equal', contactName);
    })

    it('Contact Search', function () {
        cy.visit('/');
        loginPage.clickLogin();
        homePage.clickContactButton()
            .enterSearchTextBox(contactName)
            .clickSearchIcon()


        contactPage.getSearchResultAccountText().should('equal', contactName)

        contactPage.getSearchRowCount().should('equal', 1)

    })

    it('Check Mandatory Fields', function () {
        cy.visit('/');
        loginPage.clickLogin();
        homePage.clickContactButton()
            .clickCreateContactButton()
            .clickSaveButton()

        createContactPage.getErrorMessageText().should('equal', errorMessage)

    })

})
