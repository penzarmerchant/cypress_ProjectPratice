/// <reference types="Cypress"/>
import BasePage from "./basePage";
import createAccountPage from "./createAccountPage";

class AccountPage extends BasePage{
    constructor(){
        super();
        this.createAccountButton='a[data-name="create"]';
    }

    clickCreateAccountButton() {
        this.b_clickElement(this.createAccountButton);
        return createAccountPage;
    }
}

export default new AccountPage()