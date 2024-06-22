import type { test } from '../../base/fixtures';
import { Page, expect } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import { CommonInteractions } from './common';

export @Fixture<typeof test>('home')
class Home {

    page: Page;
    commonInteractions: CommonInteractions;
    baseURL?: string;

    constructor(page: Page, baseURL: string, commonInteractions: CommonInteractions, ) {
        this.page = page;
        this.commonInteractions = commonInteractions;
        this.baseURL = baseURL;
    }

    @When('I open iris.ai homepage')
    async openHomePage() {
        await this.page.goto(this.baseURL!);
    }
}