exports.LoginPage = class LoginPage {
    constructor(page) {

        this.page = page
        this.loginButton = page.locator('#login-button')
        this.userNameField = page.locator('input[name="username"]')
        this.passwordField = page.locator('input[name="password"]')
        this.signInButton = page.getByRole('button', { name: 'Log In' })
    }

    async gotoWebsite() {
        await this.page.goto('https://www.reddit.com/')
    }


    async successfullyLogin(username, password) {
        try {

            await this.loginButton.click();

            await this.userNameField.fill(username);

            await this.passwordField.fill(password);

            await this.signInButton.click();

        } catch (error) {

            console.error('Login failed: ', error);

            throw error;

        }
    }
}
