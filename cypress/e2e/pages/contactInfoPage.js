/// <reference types="Cypress"/>
import BasePage from './basePage'

class ContactInfoPage extends BasePage
{
    constructor() {
        super();
        this.contactNameTitle = '.header-title .title'
        
    }
         getContactTitleText() {
        return this.b_getText(this.contactNameTitle)
      }
}
export default new ContactInfoPage();