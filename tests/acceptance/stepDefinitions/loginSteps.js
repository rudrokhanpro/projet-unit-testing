const {Given, When, Then} = require('@cucumber/cucumber')

const { expect } = require("@playwright/test");

Then('je ne vois pas le bouton Sign in', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je suis sur la page Login sans être connecté', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je saisis mon nom d\'utilisateur', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('mon mot de passe', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je clique sur le bouton Sign in', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('je suis redirigé vers la page Feed', async function () {
    await expect(page).toHaveURL('http://localhost:3000/feed');
});

When('je saisis un nom d\'utilisateur inexistant', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('un mot de passe', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('je ne suis pas connecté', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('un mauvais mot de passe', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('j\'ai un nouveau mot de passe', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('mon nouveau mot de passe', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je saisis mon email', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je saisis un email inexistant', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});