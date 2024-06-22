import type { test } from '../../base/fixtures';
import { Page, expect } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import { CommonInteractions } from './common';


export @Fixture<typeof test>('signIn')
class SignIn {

    page: Page;
    commonInteractions: CommonInteractions;

    constructor(page: Page, commonInteractions: CommonInteractions) {
        this.page = page;
        this.commonInteractions = commonInteractions;
    }

    //Locators applicable only to this page
    signInForm = () => this.page.locator('div').filter({ hasText: 'Sign inDon\'t have an account?' }).nth(1);

    @Then('I validate Sign In UX elements')
    async validateUX() {
        await expect(this.signInForm()).toHaveScreenshot(['signIn', 'signInForm.png'], { maxDiffPixels: 0 })
    }
}