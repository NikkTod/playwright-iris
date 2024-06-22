import type { test } from '../../base/fixtures';
import { Page, expect } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import { CommonInteractions } from './common';

export @Fixture<typeof test>('signUp')
class SignUp {

    page: Page;
    commonInteractions: CommonInteractions;

    constructor(page: Page, commonInteractions: CommonInteractions) {
        this.page = page;
        this.commonInteractions = commonInteractions;
    }

    signUpForm = () => this.page.locator('div').filter({ hasText: 'Sign upAlready have an' }).nth(1)

    @Then('I validate Sign Up UX elements')
    async validateUX() {
        await expect(this.signUpForm()).toHaveScreenshot(['signUp', 'signUpForm.png'], { maxDiffPixels: 0 })
    }
}