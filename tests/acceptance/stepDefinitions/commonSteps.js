const {Given, When, Then} = require('@cucumber/cucumber')

const { expect } = require("@playwright/test");

Given('je suis connecté', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je suis sur la page Feed', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je suis sur la page Feed sans être connecté', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.goto('http://localhost:3000/feed');
});

When('je clique sur un post d\'un autre utilisateur', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('je suis redirigé vers la page Login', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});