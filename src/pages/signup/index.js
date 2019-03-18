(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render("Sign up");

  $root.insertAdjacentHTML("beforeend", $flatButton);
})();
