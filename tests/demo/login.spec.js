import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { HomePage } from '../../pages/homePage'



test.describe('Test Suite 1', () => {

  test.beforeEach(async ({ page }) => {

    const Login = new LoginPage(page)
    await Login.gotoWebsite()
    await Login.successfullyLogin("wiyipec288@barakal.com","0124047218")
    
  });
  
  test('search', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.searchMethod('test')
    await homePage.subscribereddit()
  });

  test('post', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.searchMethod('test')
    await homePage.createNewPost('Test Automation','Saved as draft post!')
    
    
  });
});




 // await new Promise(() => { });