// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Feed @teddit", () => {
  test("feed_test_01", async ({ page }) => {
    // Go to http://localhost:3000/feed
    await page.goto("http://localhost:3000/feed");
    // Click text=Register
    await page.locator("text=Register").click();
    await expect(page).toHaveURL("http://localhost:3000/login/register");
    await page.locator('[placeholder="Username"]').fill("test");
    // Press Tab
    await page.locator('[placeholder="Username"]').press("Tab");
    // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill("test@email.com");
    // Press Tab
    await page.locator('[placeholder="Email"]').press("Tab");
    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill("password");
    // Press Tab
    await page.locator('[placeholder="Password"]').press("Tab");
    // Fill [placeholder="Confirm password"]
    await page.locator('[placeholder="Confirm password"]').fill("password");
    // Press Tab
    await page.locator('[placeholder="Confirm password"]').press("Tab");
    // Click text=Join usRegisterI already have an account >> button
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/feed' }*/),
      page
        .locator("text=Join usRegisterI already have an account >> button")
        .click(),
    ]);
    // Click text=NewProfileSettings >> div >> nth=0
    await page.locator("text=NewProfileSettings >> div").first().click();
    await expect(page).toHaveURL("http://localhost:3000/new");
    // Click textarea[name="content"]
    await page.locator('textarea[name="content"]').click();
    // Fill textarea[name="content"]
    await page.locator('textarea[name="content"]').fill("This is a test tweed");
    // Click input[name="image"]
    await page.locator('input[name="image"]').click();
    // Upload nunu_workshop.jpg
    await page
      .locator('input[name="image"]')
      .setInputFiles("nunu_workshop.jpg");
    // Click text=Share
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/post/7' }*/),
      page.locator("text=Share").click(),
    ]);
    // Click div:has-text("Feed") >> nth=4
    await page.locator('div:has-text("Feed")').nth(4).click();
    await expect(page).toHaveURL("http://localhost:3000/feed");
    // Click text=@testThis is a test tweed99 Likes
    await page.locator("text=@testThis is a test tweed99 Likes").click();
  });
});
