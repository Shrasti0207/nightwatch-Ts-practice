import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { TechHubPage } from '../page-objects/techHubPage';

const techHubTest: NightwatchTests = {
    'login search test': (browser: NightwatchBrowser) => {
        const techHub = browser.page.techHubPage();
        techHub
            .navigate()
            .enterCredentials()
            .signIn()
            .elementClick('@settings')
            .elementClick('@profile')
            .elementClick('@techHub')

        browser.end();
    },

    'verify all the fields in techhub page': (browser: NightwatchBrowser) => {
        var fields = browser.page.techHubPage()
        fields
            .navigate()
            .enterCredentials()
            .signIn()
            .elementClick('@settings')
            .elementClick('@profile')
            .pause(10000)
            .elementClick('@techHub')
            .displayAllTechHub()
            .assert.textContains('@allTechHubs', 'All TechHubs')
            .displayPendingpage()
            .assert.textContains('@pending', 'Pending')
            .displayTemplatePage()
            .isVisible('@requestRepoBranch')
            .assert.textContains('@requestRepoBranch', 'Request A Repo/Branch')
            .isVisible('@searchBar')
            .end()
    },
};

export default techHubTest;