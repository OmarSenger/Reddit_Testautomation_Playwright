import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { HomePage } from '../../pages/homePage'


let homePage;

test.describe('Test Suite 1', () => {

  test.beforeEach(async ({ page }) => {

    const Login = new LoginPage(page)
    homePage = new HomePage(page);
    await Login.gotoWebsite()
    await Login.successfullyLogin("wiyipec288@barakal.com", "0124047218")
    await expect(page).toHaveURL(/reddit.com/);
  });

  test('Search And Subscribe', async ({ page }) => {

    await homePage.searchMethod('test')
    await homePage.subscribereddit()
    await homePage.unsubscribereddit()
  });

  test('Create New Post', async ({ page }) => {
    await homePage.searchMethod('test')
    await homePage.createNewPost({ title: 'Test Automation', body: 'Saved as draft post!' })
  });
});

