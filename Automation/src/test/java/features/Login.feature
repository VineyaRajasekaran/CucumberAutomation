Feature: Check KSRTC Dropdown;


Scenario: Write BENG in FROM dropdown and check BEGALURU AIRPORT in dropdown
Given User is in KSRTC Home Page
When the user enters "BENG"
Then check whether it has BENGALURU AIRPORT in dropdown

Scenario: write CHENNAI in TO dropdown
Given User is in KSRTC Home Page
When the user enters "CHE"
Then check whether it has CHENNAI in dropdown


Scenario: Enter the travel details
Given User is in KSRTC Home Page
When the user enters travel information
| BENGALURU INTERNATION AIPORT | CHENNAI |
Then check whether filled in the form


Scenario Outline:Parametrization
Given User is in KSRTC Home Page
When the user enters <From> and <To>travel information
Then check whether filled in the form

Examples:
|From|To|
|BENGALURU INTERNATION AIPORT|CHENNAI|
|CHENNAI|VELLORE|
|BENGALURU INTERNATION AIPORT|COIMBATORE|

@Facebook
Scenario: Facebook Login
Given User is in fb login page
When the user enters username and pwd
And click login button
Then check whether logged in


