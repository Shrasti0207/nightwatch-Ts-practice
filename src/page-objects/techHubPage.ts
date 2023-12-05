import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const techHubCommands = {
    enterCredentials(this: EnhancedPageObject){
        return this
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', 'testemployee')
        .pause(1000)
        .setValue('@passwordInput', 'testemployee')
        .pause(1000)
    },

    signIn(this: EnhancedPageObject) {
      return this
          .click("@signIn")
    },

    elementClick(this: EnhancedPageObject, selector: string) {
      return this
          .waitForElementVisible(selector)
          .click(selector)
    },

    displayAllTechHub(this: EnhancedPageObject) {
      return this
          .waitForElementVisible('@allTechHubs')
          .isVisible('@allTechHubs')
    },

    displayPendingpage(this: EnhancedPageObject) {
      return this
          .waitForElementVisible('@pending')
          .isVisible('@pending')
    },

    displayTemplatePage(this: EnhancedPageObject) {
      return this
          .waitForElementVisible('@templates')
          .isVisible('@templates')
    },

    disableSubmitButtonInRequestRepo(this: EnhancedPageObject) {
      return this
          .waitForElementVisible('@requestRepoBranch')
          .click('@requestRepoBranch')
          .waitForElementVisible('@repoName')
          .setValue('@repoName', 'TestingTestingHub')
    },

};

const techHubPage: PageObjectModel = {
    url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",
    commands: [techHubCommands],
    elements: {
      emailInput: '#username',
      passwordInput: '#password',
      signIn: "#kc-login",
      settings: 'i[class="material-icons user-icon"]',
      profile: 'div[class = "d-flex py-1 mt-1"]',
      techHub: "li[class*='nav-item ']:nth-child(4)",
      allTechHubs: 'a[class="cursor-pointer newTabs"]',
      pending: 'a[class="cursor-pointer"]',
      templates: 'div[class="studio-member-card cursor-pointer my-4 px-2 py-3"]',
      requestRepoBranch: 'span.addRewardTxt',
      searchBar: 'input[class="ng-untouched ng-pristine ng-valid"]',
      submitButton: 'button[type="submit"]',
      repoName: 'input[formcontrolname="name"]',
      errorMessage: 'span[class = "errorMessage"]',
      submissionPopupAlert: "div[role='alert']",
    },
};

export default techHubPage;

export interface TechHubPage extends EnhancedPageObject<
typeof techHubCommands, 
typeof techHubPage.elements>{ }