import { Page,expect } from "@playwright/test";

export class AddAccountPage {
    // Page instance
     page:Page; 

    // Constructor
    constructor(page:Page){
        this.page = page;
    }

isAddNewAccount = async (customerId: string, accountType: string, amount: number): Promise<void> => {
  // Check if Customer ID field is visible
  await this.page.locator('[name="cusid"]').click();
  const isDisplayed = await this.page.getByLabel(customerId).isVisible();

  // Customer ID
  await this.page.locator('[name="cusid"]').fill(accountType);

  //Exercise 15:  
  // Account Type
  await this.page.locator('[name="selaccount"]').selectOption("Savings");

  // Initial Deposit
  await this.page.locator('[name="inideposit"]').fill(amount.toString());

  // Submit
  await this.page.getByRole("button", { name: "submit" }).click();

   await expect(
    this.page.getByText("Account Generated Successfully")
  ).toBeVisible();

};

}