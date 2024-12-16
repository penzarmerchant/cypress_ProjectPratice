/// <reference types="Cypress"/>

import loginPage from './pages/loginPage';
import homePage from './pages/homePage';
import accountInfoPage from './pages/accountInfoPage';
import accountPage from './pages/accountPage';

describe('Create Account Test', function () {

    var accountName;
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

        accountName = this.AccountData.accountdetails[0];

        accountInfoPage.getAccountTitleText().should('equal',accountName);  
    })

    it('Account Search', function () {
        cy.visit('/');
        loginPage.clickLogin();
        homePage.clickAccountButton()
            .enterSearchTextBox(accountName)
            .clickSearchIcon()


        accountPage.getSearchResultAccountText().should('equal', accountName)

        accountPage.getSearchRowCount().should('equal', 1)

    })
})