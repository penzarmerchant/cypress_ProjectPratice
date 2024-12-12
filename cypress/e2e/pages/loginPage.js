/// <reference types="Cypress"/>
import BasePage from "./basePage";
import homePage from "./homePage";

class LoginPage extends BasePage{
    constructor(){
        super();
        this.loginButton='#btn-login'
    }

    clickLogin() {
        this.b_clickElement(this.loginButton);
        return homePage;
    }
}

export default new LoginPage()