import type { Page } from 'playwright';
import { loanInfo } from "../tests/testdata"

export class HomeLoansPage {   
    
    constructor(private page: Page) {

    }
     // Page objects below
    public refinanceCalculatorLink = this.page.locator('text="Refinance calculator"');
    public iFrame = this.page.frameLocator('iframe[title="Refinance calculator"]');
    public propertyValueTxt = this.iFrame.locator('xpath=//div[contains(@wiwo-label,"propertyValue")]/following-sibling::div//input');
    public loanBalanceTxt = this.iFrame.locator('xpath=//div[contains(@wiwo-label,"loanAmount")]/following-sibling::div//input');
    public propertyTypeBtn = this.iFrame.locator('text='+loanInfo.propertyType);
    public loanTermTxt = this.iFrame.getByLabel('Remaining loan term', { exact: true });
   // public currentRate = this.iFrame.locator('xpath=//div[contains(@wiwo-label,"interestRate")]/following-sibling::div//input');
    public currentRateTxt = this.iFrame.getByLabel('Current interest rate', { exact: true });
    public interestRateType = this.iFrame.getByText(loanInfo.interestRateType);
    public calculateSavingsBtn = this.iFrame.locator('xpath=//button[contains(@wiwo-label,"teaserCalcButton")]');    
    public youCanSaveMsg = this.iFrame.locator('text="You can save up to"');

    
  
    async navigateToRefinanceCalculators() {       
       await this.refinanceCalculatorLink.click();
    }

    async enterLoanDetails() {   
        await this.propertyValueTxt.fill(loanInfo.propertyValue);
        await this.propertyTypeBtn.click();       
        await this.loanTermTxt.pressSequentially(loanInfo.remainingLoanTerm);
        await this.loanBalanceTxt.fill(loanInfo.loanBalance);
        //await this.loanTermTxt.first().press('Tab');
       // await this.currentRateTxt.click();
        await this.currentRateTxt.pressSequentially(loanInfo.currentRate);
        await this.interestRateType.click();
    }

    async clickCalculateSavings() {           
        await this.calculateSavingsBtn.click();
    }


    async verifyRefinanceCalculator() {           
        await this.youCanSaveMsg.waitFor({ state: 'visible' });
        return await this.youCanSaveMsg.isVisible();
    }

}