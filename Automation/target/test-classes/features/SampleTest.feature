Feature: Check Background;

Background:
Given browser details
When browser trigerred to KSRTC website
Then check whether browser is opened.


Scenario: Write BENG in FROM dropdown and check BEGALURU AIRPORT in dropdown
Given the browser opens
When the user enters "BENG"
Then check whether it has BENGALURU AIRPORT in dropdown


Scenario: write CHENNAI in TO dropdown
Given the browser opens
When the user enters "CHE"
Then check whether it has CHENNAI in dropdown


Scenario: Enter the travel details
Given the browser opens
When the user enters travel information
| BENGALURU INTERNATION AIPORT | CHENNAI |
Then check whether filled in the form


