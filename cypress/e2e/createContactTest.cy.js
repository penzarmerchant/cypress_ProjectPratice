/// <reference types="Cypress"/>

import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import contactInfoPage from './pages/contactInfoPage';


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

        contactInfoPage.getContactTitleText().should(
            (contactTitleText) => {
                expect(contactTitleText).to.equal(this.ContactData.contactdetails[1]+" " + this.ContactData.contactdetails[2]);
            })
    })
})