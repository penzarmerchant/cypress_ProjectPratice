/// <reference types="Cypress"/>

import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import accountInfoPage from './pages/accountInfoPage';

describe('Create Account Test', function () {

    before(function () {
        cy.task('generateMockDataTask');
    })

    beforeEach(function () {
        cy.fixture('espoCRMAccounts').as('AccountData');
    })

    it('Account Creation', function () {
        cy.visit('/');
        loginPage.clickLogin();
        homePage.clickAccountButton()
            .clickCreateAccountButton()
            .completeCreateAccountCreation(this.AccountData.accountdetails);

        accountInfoPage.getAccountTitleText().should(
            (accountTitleText) => {
                expect(accountTitleText).to.equal(this.AccountData.accountdetails[0]);
            })
    })
})