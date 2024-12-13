/// <reference types="Cypress"/>
import BasePage from "./basePage";
import contactInfoPage from "./contactInfoPage";

class CreateContactPage extends BasePage {
    constructor() {
        super();
        this.salutationDropDown = '[data-name="name"] div .has-items .item';
        this.firstNameTextBox = 'input[data-name="firstName"]';
        this.lastNameTextBox = 'input[data-name="lastName"]';
        this.emailTextBox = 'input[type="email"]';
        this.phoneTextBox = '.phone-number';
        this.streetAddress = 'textarea[data-name="addressStreet"]';
        this.cityAddress = 'input[data-name="addressCity"]';
        this.countyAddress = 'input[data-name="addressState"]';
        this.postalCodeAddress = 'input[data-name="addressPostalCode"]';
        this.countryAddress = 'input[data-name="addressCountry"]';
        this.description = 'textarea[data-name="description"]';
        this.accountsDropdown = 'div[data-name="accounts"] button[data-action="selectLink"] span';
        this.firstSearchAccountResult = '(//td[@data-name="name"]//child::a)[1]';
        this.assignedUser = 'input[data-name="assignedUserName"]';
        this.assignedUserList = (userName) => `//div[@class="autocomplete-suggestion autocomplete-selected" and text()="${userName}"]`;
        this.teams = '(//div[@data-name="teams"])[2]';
        this.teamsList = (teamsOption) => `//div[@class="autocomplete-suggestion autocomplete-selected" and text()="${teamsOption}"]`;
        this.photoUpload = 'label[title="Attach File"]';
        this.accountSearchResultNameText = '(//td[@data-name="name"])[6]';
        this.searchBarTextBox = 'input[data-name="textFilter"]';
        this.searchIcon = 'button[data-action="search"]';
        this.saveButton = 'button[data-name="save"]';
    }

    selectSalutationValue(salutationText) {
        this.b_selectDynamicDropDown(this.salutationDropDown, salutationText);
        return this;
    }

    enterFirstName(firstNameText) {
        this.b_fillText(this.firstNameTextBox, firstNameText);
        return this;
    }

    enterLastName(lastNameText) {
        this.b_fillText(this.lastNameTextBox, lastNameText);
        return this;
    }

    enterEmail(emailIdText) {
        this.b_fillText(this.emailTextBox, emailIdText);
        return this;
    }

    enterPhone(phoneNumberText) {
        this.b_fillText(this.phoneTextBox, phoneNumberText);
        return this;
    }

    enterStreetAddress(streetText) {
        this.b_fillText(this.streetAddress, streetText);
        return this;
    }

    selectCity(cityText) {
        this.b_selectDynamicDropDown(this.cityAddress, cityText);
        return this;
    }

    enterCounty(countyText) {
        this.b_fillText(this.countyAddress, countyText);
        return this;
    }

    enterPostalCode(postalCodeText) {
        this.b_fillText(this.postalCodeAddress, postalCodeText);
        return this;
    }

    enterCountry(countryText) {
        this.b_fillText(this.countryAddress, countryText);
        return this;
    }

    enterDescription(descriptionText) {
        this.b_fillText(this.description, descriptionText);
        return this;
    }

    selectAccount() {
        this.b_clickElementWithForce(this.accountsDropdown);
        const searchNameText = this.b_getText(this.accountSearchResultNameText, BasePage.LocatorTypes.XPATH);
        this.b_fillText(this.searchBarTextBox, 'AFP Supply');
        this.b_clickElement(this.searchIcon);
        cy.wait(3000)
        this.b_clickElement(this.firstSearchAccountResult, BasePage.LocatorTypes.XPATH);
        return this;
    }

    selectAssignedUser(userNameText) {
        this.b_clickElement(this.assignedUser);
        this.b_clickElement(this.assignedUserList(userNameText), BasePage.LocatorTypes.XPATH);
        return this;
    }

    selectTeams(teamsNameText) {
        this.b_clickElement(this.teams, BasePage.LocatorTypes.XPATH);
        this.b_clickElement(this.teamsList(teamsNameText), BasePage.LocatorTypes.XPATH);
        return this;
    }

    uploadUserImage(path) {
        this.b_uploadContent(this.photoUpload, path);
        cy.wait(5000)
        return this;
    }

    clickSaveButton() {
        this.b_clickElement(this.saveButton);
        return contactInfoPage;
    }

    createCompleteContact(contactDetailsArray) {
        this.selectSalutationValue(contactDetailsArray[0])
            .enterFirstName(contactDetailsArray[1])
            .enterLastName(contactDetailsArray[2])
            .enterEmail(contactDetailsArray[3])
            .enterPhone(contactDetailsArray[4])
            .enterStreetAddress(contactDetailsArray[5])
            .selectCity(contactDetailsArray[6])
            .enterCounty(contactDetailsArray[7])
            .enterPostalCode(contactDetailsArray[8])
            .enterCountry(contactDetailsArray[9])
            .enterDescription(contactDetailsArray[10])
            .selectAccount()
            .selectAssignedUser(contactDetailsArray[11])
            .uploadUserImage(contactDetailsArray[13])
            .selectTeams(contactDetailsArray[12])
            .clickSaveButton()
        return contactInfoPage;
    }

}
export default new CreateContactPage()