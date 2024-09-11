import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage'
import { HomePage } from '../../pages/homePage'
import { SubredditPage } from '../../pages/subredditPage'

let homePage;
let subredditPage;

test.describe('Test Suite 1', () => {

  test.beforeEach(async ({ page }) => {

    const Login = new LoginPage(page)
    homePage = new HomePage(page)
    subredditPage = new SubredditPage(page)
    await Login.gotoWebsite()
    await Login.successfullyLogin("wiyipec288@barakal.com", "0124047218")
    const createPostButton = page.locator('#create-post');
    await createPostButton.waitFor({ state: 'visible', timeout: 10000 });
    await expect(createPostButton).toBeVisible();

  });

  test('Search And Subscribe', async ({ page }) => {

    await homePage.searchMethod('test')
    const join = page.locator('.button-primary.button-medium.button.join-btn.leading-none.px-sm.py-xs')
    const joined = page.locator('.button-bordered.button-medium.button.join-btn.leading-none.px-sm.py-xs')
    await subredditPage.subscribereddit()
    await joined.waitFor({ state: 'visible', timeout: 10000 });
    await expect(joined).toBeVisible();
    await subredditPage.unsubscribereddit()
    await join.waitFor({ state: 'visible', timeout: 10000 });
    await expect(join).toBeVisible();
  });

  test('Create New Post', async ({ page }) => {
    await homePage.searchMethod('test')
    await subredditPage.createNewPost({ title: 'Test Automation', body: 'Saved as draft post!' })

  });
});

