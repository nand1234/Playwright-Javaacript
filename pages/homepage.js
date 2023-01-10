
export class homepage {

    constructor(page) {
        this.page = page;
    }

    async navigate_to_url() {
        await this.page.goto('https://www.google.com/?gws_rd=ssl')

    }

}