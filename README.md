# Playwright Test Suite

This repository contains a suite of automated tests for a Reddit web application using Playwright. The tests cover various functionalities, including login, searching, subscribing, creating posts and saving into drafts.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Playwright](https://playwright.dev/) (installed via npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OmarSenger/Reddit_Testautomation_Playwright

# Configuration
Before running the tests, you may need to configure some environment variables or settings. Ensure you have the following setup:

Login Credentials: Update your login credentials in the LoginPage class to match your test environment.

# Running Tests
To run the tests, use the following command:

```bash
   npx playwright test
```
This command will execute all the tests defined in the test directory.

# Test Suite
The test suite includes the following tests:

Test Suite 1
1. Test: Login ( I used beforeEach hook to run before each test case to make my test cases Nondependent )
   - Description: log in with my static credentials to the website
   - Assertions:
     Verify that the user already logged in
3. Test: Search And Subscribe
    - Description: Searches for a subreddit, subscribes to it, and then unsubscribes.
    - Assertions:
    Check that the subscription and unsubscription actions are reflected correctly on the page.
3. Test: Create New Post
    - Description: Creates a new post and verifies its presence in the drafts.

# GitHub Actions
The repository includes a GitHub Actions workflow to automatically run the PageSpeed Insights check and other tests on each push to the main branch or on pull requests.

