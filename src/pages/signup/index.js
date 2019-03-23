(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login"); //content que está no flatbutton
  const $signupButton = flatButton.render("Sign up", true); //content que está no flatbutton

  const $logoCollabCode = logoCollabCode.render();
  const $welcomeTitle = titleCollabCode.render("Welcome!");
  const $helloTitle = titleCollabCode.render("Hello!");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoCollabCode);
  $root.insertAdjacentHTML("beforeend", $welcomeTitle);
})();
