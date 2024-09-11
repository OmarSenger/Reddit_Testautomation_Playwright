exports.HomePage = class HomePage {
    constructor(page) {

        this.page = page
        this.searchField = page.locator('#search-input')
        this.searchForSubreddit = page.getByRole('textbox').nth(0)
        this.menuItem = page.getByRole('menuitem', { name: 'r/test 24K members'})
       
    }


    async searchMethod(subreddit) {

        await this.searchField.click()
        await this.searchForSubreddit.fill(subreddit)
        await this.menuItem.click()
    }

}