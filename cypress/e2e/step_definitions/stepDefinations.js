import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data';
import 'cypress-file-upload';

Cypress.config('defaultCommandTimeout', 60000);

const locator = new locatorsPage();
const data = new allData();



///////////////////////
// Navigation Steps
///////////////////////

When('Open Browser and Visit Website', () => {
    cy.visit(data.glitterserviceusa_url);
    cy.wait(3000);
});

When('navigate to Contact Us Page', () => {
    cy.visit(data.Contact_Page);
    cy.wait(3000);
});

When('Click contact_us button and navigate Contact_US page', () => {
    cy.get(locator.contact_us, { timeout: 20000 })
        .first()
        .scrollIntoView()
        .should('be.visible')
        .click();
    cy.url().should('include', '/contact-us');
});



/////////////////////////
// URL & Title Checks
/////////////////////////

Then('the URL should be {string}', (expectedUrl) => {
    cy.url().then((actualUrl) => {
        const cleanUrl = actualUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
        const cleanExpected = expectedUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
        expect(cleanUrl).to.include(cleanExpected);
    });
});

Then('the page title should be {string}', (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});



//////////////////////////////
// Contact Form Visibility
//////////////////////////////

When('should be landed on contact page', () => {
    cy.wait(2000);
    cy.visit(data.Contact_Page);
});

Then('contact form is visible', () => {
    cy.contains('Contact Us Now').should('be.visible');
});


Then('all function is active', () => {
    cy.get(locator.name).should('be.enabled');
    cy.get(locator.email).should('be.enabled');
    cy.get(locator.phone).should('be.enabled');
    cy.get(locator.message).should('be.enabled');
});



///////////////////////////
// Valid Form Submission
///////////////////////////

Then('Enter a vaild Name', () => {
    cy.get(locator.name).should('be.enabled').type(data.validName, { force: true });
});

Then('Enter a vaild Email Address', () => {
    cy.get(locator.email).type(data.validEmail, { force: true });
});

Then('Enter a vaild Contact Number', () => {
    cy.get(locator.phone).type(data.validPhone, { force: true });
});

Then('Enter a Message', () => {
    cy.get(locator.message).type(data.validMessage, { force: true });
});

Then('Click on the Send Message Button', () => {
    cy.get(locator.submit).should('be.visible').click({ force: true });
});




///////////////////////////////
// Negative & Edge Case Steps
///////////////////////////////

Then('Enter invalid email', () => {
    cy.get(locator.email).type('invalid-email', { force: true });
});

Then('Enter invaild Contact Number', () => {
    cy.get(locator.phone).type('abc@123!', { force: true });
});

Then('Enter a long Name', () => {
    cy.get(locator.name).type('A'.repeat(255), { force: true });
});

Then('Enter a long Message', () => {
    cy.get(locator.message).type('Test message '.repeat(200), { force: true });
});

Then('Enter name with special characters', () => {
    cy.get(locator.name).type('@#John!$%', { force: true });
});

Then('Enter numbers in name field', () => {
    cy.get(locator.name).type('John123', { force: true });
});

Then('Enter number of exceeding limit', () => {
    cy.get(locator.phone).type('012345678901234567890', { force: true });
});

Then('Enter a Email without domain extension', () => {
    cy.get(locator.email).type('email@domain', { force: true });
});

Then('Enter contact with only special characters', () => {
    cy.get(locator.phone).type('!@#$%^', { force: true });
});

Then('submission via Enter key', () => {
    cy.get(locator.message).type('{enter}', { force: true });
});
