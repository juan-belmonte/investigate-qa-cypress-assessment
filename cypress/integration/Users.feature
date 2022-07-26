Feature: User endpoints

    @users
    @pagination
    Scenario: Paging
        Given the client has a valid token
        When the client requests all users
        Then a paged response is returned
            | currentPage | pageSize |
            | 1           | 10       |
        And the current page has at most 10 items
