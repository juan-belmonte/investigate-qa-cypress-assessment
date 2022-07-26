Feature: Post endpoints

    @posts
    Scenario: Post a new message
        Given the client has a valid token
        And the current user is "Investigate Assessment"
        When the user posts a new message
            | title      | body                             |
            | Some title | A super interesting message here |
        Then the message is created
