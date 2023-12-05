import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { AmazonPage } from "../page-objects/amazonPage";

describe('amazon Test cases',()=>{

    beforeEach((browser: NightwatchBrowser)=>{
        var googleSearchBar = browser.page.amazonPage()
        googleSearchBar
        .navigate()
        .enterAmazonWebsite()
        .clickAmazonSite()
    })

    it('Verify user should be able to see fresh button',() => {
       var freshButton = browser.page.amazonPage()
       freshButton
       .clickFreshButton()
       .isVisible('@freshButton')
       .end()
    });

    it('Verify user should be able to enter pincode',() => {
        var enterCode = browser.page.amazonPage()
        enterCode
        .clickFreshButton()
        .enterPinCode()
        .isVisible('@applyOnFreshBitton')
        .end()
    });

    it('Verify user should be able to see the amazon mini tv',() => {
        var miniTV = browser.page.amazonPage()
        miniTV
        .amazonMiniTv()
        .isVisible('@amazonMiniTvIcon')
        .end()
    });


    it('Verify user should be able to see selling page', () => {
        var sellButton = browser.page.amazonPage()
        sellButton
        .sellingPage()
        .isVisible('@sellingPage')
        .end()
    });



})