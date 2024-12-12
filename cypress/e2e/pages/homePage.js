/// <reference types="Cypress"/>
import accountPage from "./accountPage";
import BasePage from "./basePage";
import contactPage from "./contactPage";

class HomePage extends BasePage{
    constructor(){
        super();
        this.accountsButton='li[data-name="Account"]';
        this.contactButton='li[data-name="Contact"]';
    }

    clickAccountButton(){
        this.b_clickElement(this.accountsButton);
        return accountPage;
    }

    clickContactButton(){
        this.b_clickElement(this.contactButton)
        return contactPage;
    }
}

export default new HomePage()