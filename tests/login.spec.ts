import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Config} from "./models/Config";

test("Login with valid credentials", async ({ page }) => {
  //Exercise 7: Use Config interface
  const config: Config = {
    url: "https://practicetestautomation.com/practice-test-login/",
    retries: 3,
    timeout: 5000
  };
  // Create an instance of LoginPage
  const loginPage = new LoginPage(page);

    // Use the methods from LoginPage to perform login and submit the form and use config values
    await loginPage.navigateToLoginPage(config.url);
    await loginPage.login("student ", "Password123");
    await loginPage.submitLoginForm();
});