$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Check KSRTC Dropdown;",
  "description": "",
  "id": "check-ksrtc-dropdown;",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Write BENG in FROM dropdown and check BEGALURU AIRPORT in dropdown",
  "description": "",
  "id": "check-ksrtc-dropdown;;write-beng-in-from-dropdown-and-check-begaluru-airport-in-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enters \"BENG\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check whether it has BENGALURU AIRPORT in dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 30124353014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BENG",
      "offset": 17
    }
  ],
  "location": "StepDefination.the_user_enters_something(String)"
});
formatter.result({
  "duration": 289471597,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_it_has_bengaluru_airport_in_dropdown()"
});
formatter.result({
  "duration": 2768322512,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "write CHENNAI in TO dropdown",
  "description": "",
  "id": "check-ksrtc-dropdown;;write-chennai-in-to-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user enters \"CHE\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "check whether it has CHENNAI in dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 33186482890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHE",
      "offset": 17
    }
  ],
  "location": "StepDefination.the_user_enters_something(String)"
});
formatter.result({
  "duration": 214836606,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_it_has_chennai_in_dropdown()"
});
formatter.result({
  "duration": 415508624,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Enter the travel details",
  "description": "",
  "id": "check-ksrtc-dropdown;;enter-the-travel-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user enters travel information",
  "rows": [
    {
      "cells": [
        "BENGALURU INTERNATION AIPORT",
        "CHENNAI"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 24425192831,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_user_enters_travel_information(DataTable)"
});
formatter.result({
  "duration": 339189620,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_filled_in_the_form()"
});
formatter.result({
  "duration": 2141600553,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Parametrization",
  "description": "",
  "id": "check-ksrtc-dropdown;;parametrization",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters \u003cFrom\u003e and \u003cTo\u003etravel information",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "check-ksrtc-dropdown;;parametrization;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 28,
      "id": "check-ksrtc-dropdown;;parametrization;;1"
    },
    {
      "cells": [
        "BENGALURU INTERNATION AIPORT",
        "CHENNAI"
      ],
      "line": 29,
      "id": "check-ksrtc-dropdown;;parametrization;;2"
    },
    {
      "cells": [
        "CHENNAI",
        "VELLORE"
      ],
      "line": 30,
      "id": "check-ksrtc-dropdown;;parametrization;;3"
    },
    {
      "cells": [
        "BENGALURU INTERNATION AIPORT",
        "COIMBATORE"
      ],
      "line": 31,
      "id": "check-ksrtc-dropdown;;parametrization;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Parametrization",
  "description": "",
  "id": "check-ksrtc-dropdown;;parametrization;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters BENGALURU INTERNATION AIPORT and CHENNAItravel information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 24271931812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BENGALURU INTERNATION AIPORT",
      "offset": 16
    },
    {
      "val": "CHENNAI",
      "offset": 49
    }
  ],
  "location": "StepDefination.the_user_enters_and_travel_information(String,String)"
});
formatter.result({
  "duration": 384365716,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_filled_in_the_form()"
});
formatter.result({
  "duration": 2390771383,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Parametrization",
  "description": "",
  "id": "check-ksrtc-dropdown;;parametrization;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters CHENNAI and VELLOREtravel information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 31447638909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHENNAI",
      "offset": 16
    },
    {
      "val": "VELLORE",
      "offset": 28
    }
  ],
  "location": "StepDefination.the_user_enters_and_travel_information(String,String)"
});
formatter.result({
  "duration": 196679852,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_filled_in_the_form()"
});
formatter.result({
  "duration": 133818224,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Parametrization",
  "description": "",
  "id": "check-ksrtc-dropdown;;parametrization;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is in KSRTC Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters BENGALURU INTERNATION AIPORT and COIMBATOREtravel information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_in_ksrtc_home_page()"
});
formatter.result({
  "duration": 24062443269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BENGALURU INTERNATION AIPORT",
      "offset": 16
    },
    {
      "val": "COIMBATORE",
      "offset": 49
    }
  ],
  "location": "StepDefination.the_user_enters_and_travel_information(String,String)"
});
formatter.result({
  "duration": 341006541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_filled_in_the_form()"
});
formatter.result({
  "duration": 2103505238,
  "status": "passed"
});
formatter.before({
  "duration": 23736773704,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Facebook Login",
  "description": "",
  "id": "check-ksrtc-dropdown;;facebook-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Facebook"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is in fb login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the user enters username and pwd",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "check whether logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks.user_is_in_fb_login_page()"
});
formatter.result({
  "duration": 27671426,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.the_user_enters_username_and_pwd()"
});
formatter.result({
  "duration": 199576656,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.click_login_button()"
});
formatter.result({
  "duration": 1376507116,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.check_whether_logged_in()"
});
formatter.result({
  "duration": 4644628,
  "status": "passed"
});
formatter.after({
  "duration": 2106599895,
  "status": "passed"
});
formatter.uri("SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "Check Background;",
  "description": "",
  "id": "check-background;",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser trigerred to KSRTC website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check whether browser is opened.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.browser_details()"
});
formatter.result({
  "duration": 1985022481,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.browser_trigerred_to_ksrtc_website()"
});
formatter.result({
  "duration": 22096396137,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_browser_is_opened()"
});
formatter.result({
  "duration": 17372517,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Write BENG in FROM dropdown and check BEGALURU AIRPORT in dropdown",
  "description": "",
  "id": "check-background;;write-beng-in-from-dropdown-and-check-begaluru-airport-in-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the browser opens",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user enters \"BENG\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "check whether it has BENGALURU AIRPORT in dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_browser_opens()"
});
formatter.result({
  "duration": 84578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BENG",
      "offset": 17
    }
  ],
  "location": "StepDefination.the_user_enters_something(String)"
});
formatter.result({
  "duration": 172887697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_it_has_bengaluru_airport_in_dropdown()"
});
formatter.result({
  "duration": 344020774,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser trigerred to KSRTC website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check whether browser is opened.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.browser_details()"
});
formatter.result({
  "duration": 1979667246,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.browser_trigerred_to_ksrtc_website()"
});
formatter.result({
  "duration": 31093697563,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_browser_is_opened()"
});
formatter.result({
  "duration": 12135086,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "write CHENNAI in TO dropdown",
  "description": "",
  "id": "check-background;;write-chennai-in-to-dropdown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the browser opens",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user enters \"CHE\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check whether it has CHENNAI in dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_browser_opens()"
});
formatter.result({
  "duration": 50973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHE",
      "offset": 17
    }
  ],
  "location": "StepDefination.the_user_enters_something(String)"
});
formatter.result({
  "duration": 180986816,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_it_has_chennai_in_dropdown()"
});
formatter.result({
  "duration": 272872367,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "browser details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser trigerred to KSRTC website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check whether browser is opened.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.browser_details()"
});
formatter.result({
  "duration": 1961073252,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.browser_trigerred_to_ksrtc_website()"
});
formatter.result({
  "duration": 22270827387,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_browser_is_opened()"
});
formatter.result({
  "duration": 7610907,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter the travel details",
  "description": "",
  "id": "check-background;;enter-the-travel-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "the browser opens",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user enters travel information",
  "rows": [
    {
      "cells": [
        "BENGALURU INTERNATION AIPORT",
        "CHENNAI"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check whether filled in the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_browser_opens()"
});
formatter.result({
  "duration": 679269,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_user_enters_travel_information(DataTable)"
});
formatter.result({
  "duration": 315538303,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.check_whether_filled_in_the_form()"
});
formatter.result({
  "duration": 2090497184,
  "status": "passed"
});
});