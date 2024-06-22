import { test as base } from 'playwright-bdd';
import { SignIn } from '../iris/ui/signIn';
import { SignUp } from '../iris/ui/signUp';
import { Home } from '../iris/ui/home';
import { Header } from '../iris/ui/header';
import { CommonInteractions } from '../iris/ui/common';


type Fixtures = {
    signIn: SignIn;
    signUp: SignUp;
    home: Home;
    header: Header;
    commonInteractions: CommonInteractions;
};

export const test = base.extend<Fixtures>({
    signIn: async ({ page, commonInteractions }, use) => { use(new SignIn(page, commonInteractions)); },
    signUp: async ({ page, commonInteractions }, use) => { use(new SignUp(page, commonInteractions)); },
    home: async ({ page, baseURL, commonInteractions }, use) => { use(new Home(page, baseURL!, commonInteractions)); },
    header: async ({ page, commonInteractions }, use) => { use(new Header(page, commonInteractions)); },
    commonInteractions: async ({ page }, use) => { use(new CommonInteractions(page)); },
});