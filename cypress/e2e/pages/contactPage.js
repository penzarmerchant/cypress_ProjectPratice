/// <reference types="Cypress"/>
import BasePage from "./basePage";
import createContactPage from "./createContactPage";


class ContactPage extends BasePage{
    constructor(){
        super();
        this.createContactButton='a[data-name="create"]'
    }

    clickCreateContactButton(){
        this.b_clickElement(this.createContactButton);
        return createContactPage;
    }
}

export default new ContactPage()