import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("HomePage class test", async () => {
  const homePage = new HomePage("m.roy", 3343);
  homePage.display();
});
