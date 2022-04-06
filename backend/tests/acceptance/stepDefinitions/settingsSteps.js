const {Given, When, Then} = require('@cucumber/cucumber')

// const { expect } = require("@playwright/test");

When('je saisie ma biographie en respectant les normes', function () {
    await page.locator.error.toBeFalsy();
    return 'passed';
});

When('je clique sur le bouton Update profile', function () {
    await page.locator('form >> button:has-text("Update Profile")').click();
    return 'passed';
});

Then('ma biographie est bien modifiée', function () {
    await page.locator.error.toBeFalsy();
    return 'passed';
});

When('je saisie ma biographie sans respecter les normes', function () {
    await page.locator.error.toBeTruthy();
    return 'passed';
});

Then('ma biographie ne s\'est pas modifiée', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('je suis sur la page Settings', function () {
    await expect(page).toHaveURL("http://localhost:3000/settings")
    return 'passed';
});

When('je saisie un nouveau mot de passe en respectant les normes', function () {
    await page.locator.error.toBeFalsy();
    return 'passed';
});

When('je saisie le même mot de passe dans le champ de confirmation de mot de passe', function () {
    const password = await page.selector.password
    expect('password').toMatch('password');
    return 'passed';
});

When('je clique sur le bouton Update password', function () {
    await page.locator('PasswordSettings >> button:has-text("Update Password")').click();
    return 'passed';
});

Then('mon mot de passe est bien modifié', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je saisie un nouveau mot de passe sans repecter les normes', function () {
    await page.locator.error.toBeTruthy();
    return 'passed';
});

Then('mon mot de passe ne s\'est pas modifié', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('je ne saisie pas le même mot de passe dans le champ de confirmation de mot de passe', function () {
    await page.locator.error.toBeTruthy();
    return 'passed';
});

When('je saisie mon ancien mot de passe', function () {
    await page.locator.error.toBeTruthy();
    return 'passed';
});

Then('je ne vois pas l\'onglet Settings', function () {
    const Settings = await page.locator(
    'sidebar >> item:has-text("Settings")');
    await expect(Settings).toBeNull();
    return 'passed';
});