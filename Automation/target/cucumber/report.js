$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Check KSRTC Dropdown;",
  "description": "",
  "id": "check-ksrtc-dropdown;",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7278035687,
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
  "duration": 118168566,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.the_user_enters_username_and_pwd()"
});
formatter.result({
  "duration": 245270701,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.click_login_button()"
});
formatter.result({
  "duration": 914218839,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.check_whether_logged_in()"
});
formatter.result({
  "duration": 6999977,
  "status": "passed"
});
formatter.after({
  "duration": 2217020454,
  "status": "passed"
});
});