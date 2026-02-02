import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage("https://practicetestautomation.com/practice-test-login/");
    await loginPage.login("student ", "Password123");
});