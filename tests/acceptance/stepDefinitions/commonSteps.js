require("dotenv").config();
const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

if (
  !(
    process.env.TEST_USERNAME &&
    process.env.TEST_EMAIL &&
    process.env.TEST_PASSWORD
  )
) {
  console.log("Test user not provided in .env file");
  console.log("TEST_USERNAME, TEST_EMAIL & TEST_PASSWORD required");

  process.exit();
}

async function SignIn({ page }) {
  // Go to login page
  await page.goto("http://localhost:3000/login/sign-in");

  // Click [placeholder="Username or email"]
  await page.locator('[placeholder="Username or email"]').click();
  // Fill [placeholder="Username or email"]
  await page
    .locator('[placeholder="Username or email"]')
    .fill(process.env.TEST_EMAIL);
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page
    .locator('[placeholder="Password"]')
    .fill(process.env.TEST_PASSWORD);

  // Click on Sign in
  await page.locator('form >> button:has-text("Sign in")').click();

  await page.waitForLoadState("networkidle");
}

Given("je suis connecté", async function () {
  await SignIn({ page });

  const logoutBtn = await page.locator('button:has-text("Logout")');
  await expect(logoutBtn).toBeTruthy();

  return "passed";
});

Given("je suis sur la page Feed", async function () {

  await SignIn({ page });

  await expect(page).toHaveURL("http://localhost:3000/feed");

  return "passed";
});

Given("je suis sur la page Feed sans être connecté", async function () {
  const signIntBtn = await page.locator('button:has-text("Sign in")');
  const registerBtn = await page.locator('button:has-text("Register")');
  await expect(signIntBtn).toBeTruthy();
  await expect(registerBtn).toBeTruthy();

  await page.goto("http://localhost:3000/feed");
});

When("je clique sur un post d'un autre utilisateur", async function () {
  await page
    .locator(`text=/@(!${process.env.TEST_USERNAME})([a-z0-9]+)/i`)
    .click();
});

Then("je suis redirigé vers la page Login", async function () {
  await expect(page).toHaveURL("http://localhost:3000/login/sign-in");
});
