import { test } from "@playwright/test";


test("WebElements  ", async ({ page }) => {
    page.goto("https://the-internet.herokuapp.com/");


    //Checkboxes
    await page.getByRole('link', { name: 'Checkboxes', exact: true }).click();
    await page.locator('#checkboxes input[type="checkbox"]').first().check();

    await page.goto("https://the-internet.herokuapp.com/");

    //Dropdown
    await page.getByText("Dropdown").click();
    await page.locator("#dropdown").click();
    await page.locator('#dropdown').selectOption('1');

     await page.goto("https://the-internet.herokuapp.com/");

    //Radio Buttons
    await page.getByText("Radio Buttons").click();
    await page.locator('input[type="radio"][value="blue"]').check();

    //Frames
    await page.goto("https://iframetester.com/");
    await page.getByText("Frames").click();
    await page.getByText("iFrame").click();
    const frame = page.frameLocator('#mce_0_ifr');
    await frame.locator('#tinymce').fill('Hello, this is a test message!');
});
