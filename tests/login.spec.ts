import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Config } from "../models/Config";

/**
 * -------------------------------------------------------
 * beforeEach
 * -------------------------------------------------------
 */
test.beforeEach(async ({ page }) => {
  // Exercise 7: Use Config interface
  const config: Config = {
    url: "https://demo.guru99.com/V3/index.php",
    retries: 3,
    timeout: 5000
  };

  // Create LoginPage instance
  const loginPage = new LoginPage(page);

  // Navigate to login page
  await page.goto(config.url);

  // Perform login
  await loginPage.login("mngr652043", "UmEguba");
  await loginPage.submitLoginForm();

  // Verify successful redirect after login
  await expect(page).toHaveURL(/manager/);
});

/**
 * -------------------------------------------------------
 * Verify successful login redirect
 * -------------------------------------------------------
 */
test("Login with invalid credentials and alert assertion", async ({ page }) => {
  const loginPage = new LoginPage(page);

  //Exercise 12: Handle alert on invalid login
  page.once("dialog", async dialog => {
    expect(dialog.message()).toContain("not valid");
    await dialog.accept();
  });

  await loginPage.login("wrong", "wrong");
  await loginPage.submitLoginForm();

});

/**
 * -------------------------------------------------------
 * Exercise 13: Verify page title after login
 * -------------------------------------------------------

 */
test("Manager page title verification", async ({ page }) => {
  const title = await page.title();
  console.log(`Page title is: ${title}`);

  // Assertion: Page title check
  expect(title).toContain("Guru99 Bank");
});

/**
 * -------------------------------------------------------
 * Exercise 8: Utility and arrow function practice
 * -------------------------------------------------------
 */
test("Validate utility methods in LoginPage", async ({ page }) => {
  // Create LoginPage instance (already logged in from beforeEach)
  const loginPage = new LoginPage(page);

  // Verify submission status (learning purpose)
  const isSubmitted = await loginPage.isSubmit();
  console.log(`Is the login form submitted? ${isSubmitted}`);

  // Verify login success (learning purpose)
  const isLoginSuccessful = await loginPage.isLoginSuccessful();
  console.log(`Is login successful? ${isLoginSuccessful}`);

  // Validate add method
  const sum = loginPage.add(5, 10);
  console.log(`The sum of 5 and 10 is: ${sum}`);

  // Assertion for learning utility (simple truth check)
  expect(sum).toBe(15);
});
