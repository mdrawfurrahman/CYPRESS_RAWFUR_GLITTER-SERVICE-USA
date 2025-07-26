import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data';
import 'cypress-file-upload';

Cypress.config('defaultCommandTimeout', 90000);

const locator = new locatorsPage();
const data = new allData();



