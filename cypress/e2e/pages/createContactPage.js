/// <reference types="Cypress"/>
import BasePage from "./basePage";

class CreateContactPage extends BasePage{
    constructor(){
        super();
        this.salutationDropDown='[data-name="name"] div .has-items .item';
        this.firstNameTextBox='input[data-name="firstName"]';
        this.lastNameTextBox='input[data-name="lastName"]';
        this.emailTextBox='input[type="email"]';
        this.phoneTextBox='.phone-number';
        this.streetAddress='textarea[data-name="addressStreet"]';
        this.cityAddress='input[data-name="addressCity"]';
        this.countyAddress='input[data-name="addressState"]';
        this.postalCodeAddress='input[data-name="addressPostalCode"]';
        this.countryAddress='input[data-name="addressCountry"]';
        this.description='textarea[data-name="description"]';
        this.accountsDropdown='div[data-name="accounts"] button[data-action="selectLink"]';
        
    }
}
export default new CreateContactPage()