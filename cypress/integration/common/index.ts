/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../../model/types';

// Auth
Given('the client has a valid token', () => {
    // ? Configure the API token to be sent in all requests according to the API documentation.
});

Given('the client has not configured a token', () => {
    // ? Make sure the API token is not sent on every request to cover this misconfiguration scenario.
});

Then('the request is rejected as unauthorized', () => {
    // ? Check the expected response.
});



// Users
And('the current user is {string}', (username) => {
    /**
     * ! gorest.co.in frequently removes users and posts.
     * If at this moment there are no users with the given name,
     * please create it using the provided Postman collection.
     * 
     * NOTE: be sure that you are using the same token in both
     * your Postman request and in your Cypress tests.
     */
    // ? Take all required actions to make all future requests in this test
    // ? scenario to contain the specified user ID.
});

When('the client requests all users', () => {
    // ? Get all users from the API.
});

Then('a paged response is returned', (datatable) => {
    // ? Check the expected response.
});

And('the current page has at most {int} items', (maxItems) => {
    // ? Check the expected response.
});

When('the client tries to create a new user', () => {
    // ? Create a new user 
});



// Posts
When('the user posts a new message', function (datatable) {
    const postContents = datatable.hashes()[0];
    // ? Create a new message with the contents of `postContents`
});

Then('the message is created', () => {
    // ? Check the expected response.
});

