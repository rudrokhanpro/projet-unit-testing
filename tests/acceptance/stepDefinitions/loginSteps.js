const { Given, When, Then } = require("@cucumber/cucumber");
const { randomNumber } = require("../../utils");
const { expect } = require("@playwright/test");

Then("je ne vois pas le bouton Sign in", async function () {
  await page.waitForTimeout(1000);
  const signInButton = await page.locator(
    'header >> button:has-text("Sign in")'
  );

  await expect(signInButton).toBeNull();

  return "passed";
});

Given("je suis sur la page Login sans être connecté", async function () {
  expect(page).toHaveURL("http://localhost:3000/login/sign-in");

  return "passed";
});

When("je saisis mon nom d'utilisateur", async function () {
  // Write code here that turns the phrase above into concrete actions
  await page
    .locator('[placeholder="Username or email"]')
    .fill(process.env.TEST_USERNAME);

  return "passed";
});

When("mon mot de passe", async function () {
  await page
    .locator('[placeholder="Password"]')
    .fill(process.env.TEST_PASSWORD);

  return "passed";
});

When("je clique sur le bouton Sign in", async function () {
  // Write code here that turns the phrase above into concrete actions

  await page.locator('form >> button:has-text("Sign in")').click();

  return "passed";
});

Then("je suis redirigé vers la page Feed", async function () {
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveURL("http://localhost:3000/feed");
});

When("je saisis un nom d'utilisateur inexistant", async function () {
  const rand = randomNumber();
  const username = `username${rand}`;
  await page.locator('[placeholder="Username or email"]').fill(username);

  return "passed";
});

When("un mot de passe", async function () {
  const rand = randomNumber();
  const password = `password${rand}`;
  await page.locator('[placeholder="Password"]').fill(password);

  return "passed";
});

Then("je ne suis pas connecté", async function () {
  const signInButton = await page.locator(
    'header >> button:has-text("Sign in")'
  );
  await expect(signInButton).toBeTruthy();

  return "pending";
});

When("un mauvais mot de passe", async function () {
  const rand = randomNumber();
  const password = `password${rand}`;
  await page.locator('[placeholder="Password"]').fill(password);
  return "passed";
});

Given("j'ai un nouveau mot de passe", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("mon nouveau mot de passe", async function () {
  // Write code here that turns the phrase above into concrete actions

  return "pending";
});

When("je saisis mon email", async function () {
  // Write code here that turns the phrase above into concrete actions
  await page
    .locator('[placeholder="Username or email"]')
    .fill(process.env.TEST_EMAIL);
  return "passed";
});

When("je saisis un email inexistant", async function () {
  const rand = randomNumber();
  const email = `email${rand}@email.com`;
  await page.locator('[placeholder="Username or email"]').fill(email);

  return "pending";
});
