import { Page, expect } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import type { test } from '../../base/fixtures';
import { DataTable } from '@cucumber/cucumber'


export @Fixture<typeof test>('commonInteractions')
class CommonInteractions {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Used to select common components/locators accross the pages 

    label = (labelFieldName: string) => this.page.getByLabel(labelFieldName, { exact: true });
    link = (linkText: string) => this.page.getByRole('link', { name: linkText });
    button = (buttonName: string) => this.page.getByRole('button', { name: buttonName, exact: true });
    checkbox = (checkboxText: string) => this.page.locator('mat-checkbox').getByText(checkboxText);
    dropdown = (dropdownName: string) => this.page.locator(".mat-mdc-form-field-type-mat-select").getByText(dropdownName);
    dropdownOption = (option: string) => this.page.getByRole('option', { name: option, exact: true });
    menuItem = (menuItemName:string) => this.page.getByRole('menuitem', { name: menuItemName })
    validationError = () => this.page.locator('mat-error').first();

    @Then('I expect text {string} is visible')
    async verifyText(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    @Then('I expect validation error {string} is visible')
    async verifyValidationError(text: string) {
        await expect(this.validationError()).toHaveText(text);
    }

    @When('I populate the form with the following data')
    async populateSignInForm(data: DataTable) {
        for (const row of data.hashes()) {
            switch (row.Type) {
                case "input": {
                    switch (row.Value) {
                        case 'leave empty': {
                            await this.label(row.Label).fill('');
                            break;
                        }
                        case 'empty space': {
                            await this.label(row.Label).fill(' ');
                            break;
                        }
                        default: {
                            await this.label(row.Label).fill(row.Value);
                            break;
                        }
                    }
                    await this.label(row.Label).blur();
                    break;
                }
                case "dropdown": {
                    await this.dropdown(row.Label).click();
                    await this.dropdownOption(row.Value).click();
                    break;
                }
            }
        }
    }

    @When('I click on button {string}')
    async clickButton(buttonName: string) {
        await this.button(buttonName).click();
    }

    @When('I expect button {string} to be {string}')
    async buttonState(buttonName: string, state: string) {
        switch (state) {
            case "enabled": {
                await expect(this.button(buttonName)).toBeEnabled();
            }
            case "disabled": {
                await expect(this.button(buttonName)).toBeDisabled();
            }
        }
    }

    @When('I click on link {string}')
    async clickLink(linkText: string) {
        await this.link(linkText).click();
    }

    @When('I {string} checkbox with text {string}')
    async checkBox(action: string, text: string) {
        switch (action) {
            case "check": {
                await this.checkbox(text).check();
                break;
            }
            case "uncheck": {
                await this.checkbox(text).uncheck();
                break;
            }
        }
    }

}