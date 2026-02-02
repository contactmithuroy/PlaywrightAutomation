import { Page } from "@playwright/test";

export class LoginPage{
    page:Page;  

    private usernameInput = "#username";
    private passwordInput = "#password";
    private submitButton = "#login";

    constructor(page:Page){
        this.page = page;
    }

    async navigateToLoginPage(url:string):Promise<void>{
        await this.page.goto(url);
    }   
    
    async login(username:string, password:string):Promise<void>{
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }
}