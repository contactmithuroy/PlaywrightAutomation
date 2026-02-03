import { Page } from "@playwright/test";

export class LoginPage{
    // Page instance
    page:Page;  

    // Locators
    private usernameInput = '[name="uid"]';
    private passwordInput = '[name="password"]';
    private submitButton = '[name="btnLogin"]';

    // Constructor
    constructor(page:Page){
        this.page = page;
    }
    // Navigation method
    async navigateToLoginPage(url:string):Promise<void>{
        await this.page.goto(url);
    }   
    //Exercise 5: Login method
    async login(username:string, password:string):Promise<void>{
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }

    //Exercise 6: Submit login form
    async submitLoginForm():Promise<void>{
        await this.page.click(this.submitButton);
    }

    // Exercise 7: Method to verify submission status
    isSubmit = async (): Promise<boolean> => {
    console.log("Login form submitted");
    return true;
    };

    isLoginSuccessful = async (): Promise<boolean> => true;

    //Exercise 8: Simple add method using arrow function
    add = (a: number, b: number): number => a +b ;

    
}
