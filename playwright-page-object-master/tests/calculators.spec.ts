import { test, expect } from '@playwright/test';

import { loanInfo } from './testdata';
import { HomePage } from '../pages/home-page';
import { HomeLoansPage } from '../pages/home-loans-page';


test('Refinance calculator', async ({ page }) => {
    const homepage = new HomePage(page);    
    await homepage.open();
    //test.info().annotations.push({ type: 'something', description: 'some description' });
    await homepage.goToCalculators();
    await new HomeLoansPage(page).navigateToRefinanceCalculators();
    await new HomeLoansPage(page).enterLoanDetails();
    await new HomeLoansPage(page).clickCalculateSavings();             
    await new HomeLoansPage(page).verifyRefinanceCalculator();
  });
