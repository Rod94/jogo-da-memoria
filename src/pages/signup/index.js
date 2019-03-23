(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login"); //content que está no flatbutton
  const $signupButton = flatButton.render("Sign up", true); //content que está no flatbutton

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
