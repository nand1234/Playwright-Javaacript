const base = require('@playwright/test');
import { homepage } from '../pages/homepage'

exports.test = base.test.extend({
    homepage: async ({ page }, use) => {
        await use(new homepage(page))
    }
})

exports.expect = base.expect;