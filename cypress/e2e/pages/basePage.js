/// <reference types="Cypress"/>

class BasePage {
    static LocatorTypes = {
        CSS: "css",
        XPATH: "xpath",
        TEXT: "text"
    }

    // Method to navigate to the given URL
    b_navigateTo(url) {
        cy.visit(url);
    }

    // Method to click an element
    b_clickElement(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        this.#waitForElement(locator, typeOfLocator).click();
    }

    b_clickElementWithForce(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        this.#waitForElement(locator, typeOfLocator).click({force:true});
    }

    // Method to fill the textbox
    b_fillText(locator, textToEnter, typeOfLocator = BasePage.LocatorTypes.CSS) {
        this.#waitForElement(locator, typeOfLocator).type(textToEnter);
    }

    // Method to get the text from element
    b_getText(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        return this.#waitForElement(locator, typeOfLocator).invoke('text').then((text) => {
            return text.trim();
        });
    }

    // Method to wait for element to be visible
    b_waitForElementToBeVisible(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        this.#getlocator(locator, typeOfLocator).should('be.visible');
    }

    // Method to check if the element is visible
    b_isElementVisible(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        return this.b_waitForElementToBeVisible(locator, typeOfLocator);
    }

     b_selectDynamicDropDown(dropdownLocator,dropDownText,typeOfLocator=BasePage.LocatorTypes.CSS){
        this.b_clickElement(dropdownLocator,typeOfLocator);
        this.b_clickElement(dropDownText,BasePage.LocatorTypes.TEXT);
      }

      b_uploadContent(locator,path){
        cy.get(locator).selectFile(path);
      }

      b_getLocatorCount(locator){
        return cy.get(locator).then((element)=>{
                return element.length;
        })
      }

    #getlocator(locator, typeOfLocator = BasePage.LocatorTypes.CSS) {
        switch (typeOfLocator) {
            case BasePage.LocatorTypes.XPATH:
                return cy.xpath(locator);
                break;
            case BasePage.LocatorTypes.TEXT:
                return cy.contains(locator);
                break;
            case BasePage.LocatorTypes.CSS:
                return cy.get(locator);
                break;
            default:
                cy.log('Please pass appropriate locator type')
        }
    }

    #waitForElement(locator, typeOfLocator = BasePage.LocatorTypes.CSS){
        const element=this.#getlocator(locator, typeOfLocator);
        element.should('be.visible',{timeout:10000});
        return element;
    }

}

export default BasePage;