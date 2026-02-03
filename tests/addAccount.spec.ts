import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Config } from "../models/Config";
import { ManagerPage } from "../pages/ManagerPage";
import { AddAccountPage } from "../pages/AddAccountPage";

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto("/V3/index.php", { 
        waitUntil: "domcontentloaded",
        timeout: 60000  
    });
    await loginPage.login("mngr652043", "UmEguba");
    await loginPage.submitLoginForm();

    await page.waitForURL(/manager/, { timeout: 10000 });
});

test("Add new Account", async ({ page }) => {
  const managerPage = new ManagerPage(page);
  const addAccountPage = new AddAccountPage(page);

  await managerPage.clickAddAccount();

  const isAccountAdded = await addAccountPage.isAddNewAccount("12345", "Savings", 5000);
  console.log(`Is new account added? ${isAccountAdded}`);
});
 