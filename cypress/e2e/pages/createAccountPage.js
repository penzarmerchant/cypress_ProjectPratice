/// <reference types="Cypress"/>
import accountInfoPage from "./accountInfoPage";
import BasePage from "./basePage";


class CreateAccountPage extends BasePage{
    constructor(){
        super();
        this.nameTextBox='input[data-name="name"]';
        this.websiteTextBox='input[data-name="website"]';
        this.emailTextBox='input[type="email"]';
        this.phoneTextBox='input.phone-number[type="input"]';
        this.streetBillingAddTextBox='textarea[data-name="billingAddressStreet"]';
        this.cityBillingAddTextBox='input[data-name="billingAddressCity"]';
        this.countyBillingAddTextBox='input[data-name="billingAddressState"]';
        this.postalCodeBillingAddTextBox='input[data-name="billingAddressPostalCode"]';
        this.countryBillingAddTextBox='input[data-name="billingAddressCountry"]';
        this.copyButton='Copy Billing';
        this.typeOfAccount='div[data-name="type"]:nth-child(2)';
        this.typeOfIndustry='(//div[@data-name="industry"])[2]';
        this.descriptionTextBox='textArea[data-name="description"]';
        this.assignedUser='input[data-name="assignedUserName"]';
        this.assignedUserList=(userName)=>`//div[@class="autocomplete-suggestion autocomplete-selected" and text()="${userName}"]`;
        this.teams='(//div[@data-name="teams"])[2]';
        this.teamsList=(teamsOption)=>`//div[@class="autocomplete-suggestion autocomplete-selected" and text()="${teamsOption}"]`;
        this.saveButton='button[data-name="save"]';
        this.errorMessage='#notification';
    }

    enterName(nameTextToEnter){
        this.b_fillText(this.nameTextBox,nameTextToEnter);
        return this;
    }

    enterWebsite(websiteToEnter){
        this.b_fillText(this.websiteTextBox,websiteToEnter);
        return this;
    }

    enterEmail(emailToEnter){
        this.b_fillText(this.emailTextBox,emailToEnter);
        return this;
    }

    enterPhoneNumber(phoneNumberToEnter){
        this.b_fillText(this.phoneTextBox,phoneNumberToEnter);
        return this;
    }

    enterStreetOfBillingAdd(streetNameToEnter){
        this.b_fillText(this.streetBillingAddTextBox,streetNameToEnter)
        return this;
    }

    selectCityOfBillingAdd(cityToSelect){
        this.b_selectDynamicDropDown(this.cityBillingAddTextBox,cityToSelect);
        return this;
    }

    enterCountyOfBillingAdd(countyNameToEnter){
        this.b_fillText(this.countyBillingAddTextBox,countyNameToEnter);
        return this;
    }

    enterPostalCode(postalCodeToEnter){
        this.b_fillText(this.postalCodeBillingAddTextBox,postalCodeToEnter);
        return this;
    }

    enterCountryOfBillingAdd(countrytoEnter){
        this.b_fillText(this.countryBillingAddTextBox,countrytoEnter);
        return this;
    }

    clickCopyBillingAdd(){
        this.b_clickElement(this.copyButton,BasePage.LocatorTypes.TEXT);
        return this;
    }

    enterDescription(descriptionToEnter){
        this.b_fillText(this.descriptionTextBox,descriptionToEnter);
        return this;
    }

    selectTypeOfAccount(accountTypeText){
        this.b_selectDynamicDropDown(this.typeOfAccount,accountTypeText);
        return this;
    }

    selectTypeOfIndustry(industryTypeText){
        this.b_selectDynamicDropDown(this.typeOfIndustry,industryTypeText,BasePage.LocatorTypes.XPATH);
        return this;
    }

    selectAssignedUser(userNameText){
            this.b_clickElement(this.assignedUser);
            this.b_clickElement(this.assignedUserList(userNameText),BasePage.LocatorTypes.XPATH);
        return this;
    }

    selectTeams(teamsNameText){
        this.b_clickElement(this.teams,BasePage.LocatorTypes.XPATH);
        this.b_clickElement(this.teamsList(teamsNameText),BasePage.LocatorTypes.XPATH);
        return this;
    }

    getErrorMessageText(){
       return this.b_getText(this.errorMessage);
    }

    clickSaveButton(){
        this.b_clickElement(this.saveButton);
        return accountInfoPage;
    }

    completeCreateAccountCreation(accountDetailsArray){
        this.enterName(accountDetailsArray[0])
        .enterWebsite(accountDetailsArray[1])
        .enterEmail(accountDetailsArray[2])
        .enterPhoneNumber(accountDetailsArray[3])
        .enterStreetOfBillingAdd(accountDetailsArray[4])
        .selectCityOfBillingAdd(accountDetailsArray[5])
        .enterCountyOfBillingAdd(accountDetailsArray[6])
        .enterPostalCode(accountDetailsArray[7])
        .enterCountryOfBillingAdd(accountDetailsArray[8])
        .clickCopyBillingAdd()
        .selectTypeOfAccount(accountDetailsArray[9])
        .selectTypeOfIndustry(accountDetailsArray[10])
        .enterDescription(accountDetailsArray[11])
        .selectAssignedUser(accountDetailsArray[12])
        .selectTeams(accountDetailsArray[13])
        .clickSaveButton()
        return accountInfoPage;
    }
}

export default new CreateAccountPage()