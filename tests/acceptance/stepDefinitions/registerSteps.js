const {Given, When, Then} = require('@cucumber/cucumber')

const { expect } = require("@playwright/test");

Then('je ne vois pas le bouton Register', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je suis sur la page Register sans être connecté', async function () {
    await page.goto('http://localhost:3000/feed');
    await page.locator('text=Register').click();
    await expect(page).toHaveURL('http://localhost:3000/login/register');
});

Given('j’ai remplis tous les champs du formulaire en respectant les normes', async function () {
    await page.locator('[placeholder="Username"]').fill('test1');
    await page.locator('[placeholder="Username"]').press('Tab');
    await page.locator('[placeholder="Email"]').fill('test1@test.ts');
    await page.locator('[placeholder="Email"]').press('Tab');
    await page.locator('[placeholder="Password"]').fill('password');
    await page.locator('[placeholder="Password"]').press('Tab');
    await page.locator('[placeholder="Confirm password"]').fill('password');
});

When('je clique sur le bouton Register', async function () {
    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:3000/feed' }*/),
        page.locator('text=Join usRegisterI already have an account >> button').click()
    ]);
});

Given('je saisis un nom d\'utilisateur déjà existant', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je remplis correctement les autres champs du formulaire', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je saisis un email déjà existant', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je n’ai pas remplis tous les champs du formulaire', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('j’ai des champs invalides dans le formulaire', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('je ne suis pas inscrit', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});