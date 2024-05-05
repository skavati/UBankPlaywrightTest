import type { Page } from 'playwright';


export class HomePage {
    constructor(private page: Page) {
        
    }
   
    public calculatorsAndToolsLnk = this.page.locator('text="Calculators & tools"');
  
    async open() {
       await this.page.goto('https://www.ubank.com.au/');
    }

    async goToCalculators() {
        await this.calculatorsAndToolsLnk.click();
    }

   
}
