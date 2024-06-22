Framework includes 2 types of autotation tests:
a) UI functional
c) UX (pixel comparison)

Prerequisites:
Node JS (>18)
VS Code
Typescript (>5)
Chrome browser

Steps to follow:
1. Clone project -> 
2. Run 'npm install' - This will install all needed npm packages
3. Run tests locally on chrome with command 'npx playwright test' 

Expected result:
14 tests should pass
2 tests should fail

Hint: 
If you want to use VS code test explorer please install extentions (Cucumber Full Support, DotENV, Playwright Test for VSCode)
If tester changes something within the feature file then he should also run command 'npx bddgen'