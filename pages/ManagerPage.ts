import { Page } from "@playwright/test";

export class ManagerPage {
    // Page instance
     page:Page; 

    // Constructor
    constructor(page:Page){
        this.page = page;
    }

 async clickAddAccount(): Promise<void> {
    await this.page.getByRole("link", { name: "New Account" }).click();
};

}