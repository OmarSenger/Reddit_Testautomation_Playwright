exports.HomePage = class HomePage {
    constructor(page) {

        this.page = page
        this.searchField = page.locator('#search-input')
        this.searchForSubreddit = page.getByRole('textbox').nth(0)
        this.menuItem = page.getByRole('menuitem', { name: 'r/test 24K members', visible: true, isEnabled: true })
        this.subscribeButton  = page.locator('.button-primary.button-medium.button.join-btn.leading-none.px-sm.py-xs')
        this.unsubscribeButton  = page.locator('.button-bordered.button-medium.button.join-btn.leading-none.px-sm.py-xs')
        this.createPost = page.getByTestId('create-post')
        this.titleField = page.getByRole('textbox', { name: 'Title *' })
        this.bodyField = page.getByRole('paragraph')
        this.saveDraftButton = page.getByRole('button', { name: 'Save Draft' })
        this.draftButton = page.getByRole('button', { name: 'Drafts' })
        
    }


    async searchMethod (subreddit){
        
        await this.searchField.click()
        await this.searchForSubreddit.fill(subreddit)
        await this.menuItem.click()
    }

    async subscribereddit(){

            await this.subscribeButton.click()
        
    }

    async unsubscribereddit(){

        await this.unsubscribeButton.click()
    
}

    async createNewPost(title,body){
            await this.createPost.click()
            await this.titleField.fill(title)
            await this.bodyField.fill(body)
            await this.saveDraftButton.click()
            await this.draftButton.click()
    }

   
}