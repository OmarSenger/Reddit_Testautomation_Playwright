exports.SubredditPage = class SubredditPage {
    constructor(page) {

        this.page = page
        this.subscribeButton = page.locator('.button-primary.button-medium.button.join-btn.leading-none.px-sm.py-xs')
        this.unsubscribeButton = page.locator('.button-bordered.button-medium.button.join-btn.leading-none.px-sm.py-xs')
        this.createPostButton = page.getByTestId('create-post')
        this.titleField = page.getByRole('textbox', { name: 'Title *' })
        this.bodyField = page.getByRole('paragraph')
        this.saveDraftButton = page.getByRole('button', { name: 'Save Draft' })
        this.draftButton = page.getByRole('button', { name: 'Drafts' })
       
    }


    async subscribereddit() {

        await this.subscribeButton.click()

    }

    async unsubscribereddit() {

        await this.unsubscribeButton.click()

    }

    async createNewPost({ title, body }) {
        await this.createPostButton.click();
        await this.fillPostDetails(title, body);
        await this.saveDraft();
    }


    async fillPostDetails(title, body) {
        await this.titleField.fill(title);
        await this.bodyField.fill(body);
    }


    async saveDraft() {
        await this.saveDraftButton.click();
        await this.draftButton.click();
    }

}