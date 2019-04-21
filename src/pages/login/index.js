(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login", true); //content que está no flatbutton
  const $signupButton = flatButton.render("Sign up"); //content que está no flatbutton

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
})();
