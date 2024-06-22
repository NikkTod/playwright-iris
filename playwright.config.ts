import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';


const testDir = defineBddConfig({
importTestFrom: 'pom/base/fixtures.ts',
paths: ['features/**/*.feature'],
});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 require('dotenv').config({path: './.env'});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir,
  timeout: 20_000,
  expect: {
    timeout: 10_000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [ 
    ['html', {open:'never', outputFolder: 'playwright-report/report'} ],
    ['junit', {outputFile: 'playwright-report/junitReport.xml'}],
    cucumberReporter('html', { outputFile: 'playwright-report/cucumberReport.html' }),
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  /* Configure projects */
  projects: [
    {
      name: 'UI tests',
      grep: /@UI/,
      use: {
        baseURL: "https://rspace.iris.ai",
        channel: 'chrome',
        headless: false,
        actionTimeout: 10_000,
        viewport: {width:1920, height:1080},
      },
    },
  ],
});