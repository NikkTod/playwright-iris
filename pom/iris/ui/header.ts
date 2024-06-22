import type { test } from '../../base/fixtures';
import { Page } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import { CommonInteractions } from './common';


export @Fixture<typeof test>('header')
class Header {

    page: Page;
    commonInteractions: CommonInteractions;

    constructor(page: Page, commonInteractions: CommonInteractions) {
        this.page = page;
        this.commonInteractions = commonInteractions;
    }

    showUserOptions = () => this.page.locator('rsp-user-info');

    @When('I select user option {string}')
    async clickButton(option: string) {
        await this.showUserOptions().click();
        await this.commonInteractions.menuItem(option).click();
    }   
}