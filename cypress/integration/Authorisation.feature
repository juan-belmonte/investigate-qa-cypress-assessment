Feature: API authentication

    @authorisation
    Scenario: Client does not have a token
        Given the client has not configured a token
        When the client tries to create a new user
        Then the request is rejected as unauthorized
