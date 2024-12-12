/// <reference types="Cypress"/>
import BasePage from './basePage'

class AccountInfoPage extends BasePage
{
    constructor() {
        super();
        this.accountNameTitle = '.header-title .title'
        
    }
         getAccountTitleText() {
        return this.b_getText(this.accountNameTitle)
      }
}
export default new AccountInfoPage();