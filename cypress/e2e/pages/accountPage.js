/// <reference types="Cypress"/>
import BasePage from "./basePage";
import createAccountPage from "./createAccountPage";

class AccountPage extends BasePage{
    constructor(){
        super();
        this.createAccountButton='a[data-name="create"]';
        this.searchTextBox='input[data-name="textFilter"]';
        this.searchIcon='button[title="Search"]';
        this.searchResultRow='.table tbody tr';
        this.searchResultAccountText='.table tbody tr td[data-name="name"] a';        
    }

    clickCreateAccountButton() {
        this.b_clickElement(this.createAccountButton);
        return createAccountPage;
    }

    getSearchRowCount(){
       return this.b_getLocatorCount(this.searchResultRow);
    }

    getSearchResultAccountText(){
       return this.b_getText(this.searchResultAccountText);
    }

    enterSearchTextBox(searchText){
        this.b_fillText(this.searchTextBox,searchText);
        return this;
    }

    clickSearchIcon(){
        this.b_clickElement(this.searchIcon);
        return this;
    }
}

export default new AccountPage()