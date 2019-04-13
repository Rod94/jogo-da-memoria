(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login"); //content que está no flatbutton
  const $signupButton = flatButton.render("Sign up", true); //content que está no flatbutton

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $labelCollabcode = labelCollabcode.render("E-mail");
  const $inputCollabcode = inputCollabcode.render();
  const $userCollabcode = labelCollabcode.render("Username");
  const $inputUserCollabcode = inputCollabcode.render();
  const $passwordCollabcode = labelCollabcode.render("Password");
  const $inputPasswordCollabcode = inputCollabcode.render();
  const $confirmCollabcode = labelCollabcode.render("Confirm Password");
  const $inputconfirmCollabcode = inputCollabcode.render();
  const $btnCollabcode = btnCollabcode.render("Submit");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $userCollabcode);
  $root.insertAdjacentHTML("beforeend", $inputUserCollabcode);
  $root.insertAdjacentHTML("beforeend", $labelCollabcode);
  $root.insertAdjacentHTML("beforeend", $inputCollabcode);
  $root.insertAdjacentHTML("beforeend", $passwordCollabcode);
  $root.insertAdjacentHTML("beforeend", $inputPasswordCollabcode);
  $root.insertAdjacentHTML("beforeend", $confirmCollabcode);
  $root.insertAdjacentHTML("beforeend", $inputconfirmCollabcode);
  $root.insertAdjacentHTML("beforeend", $btnCollabcode);
})();
