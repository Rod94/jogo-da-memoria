const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }  
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelCollabcode = labelCollabcode.render("Username ou e-mail");
    const $inputCollabcode = inputCollabcode.render({
      placeholder: "example@gmail.com",
      type: "email"
    });

    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $passwordCollabcode = labelCollabcode.render("Password");
    const $inputPasswordCollabcode = inputCollabcode.render({
      id: "password",
      placeholder: "********",
      type: "password"
    });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forget Password ?"
    });

    const $btnCollabcode = btnCollabcode.render("Login");

    return `
      ${$labelCollabcode}
      ${$inputCollabcode}

      ${$passwordCollabcode}
      ${$inputPasswordCollabcode}
      ${$eyeCollabcode}
      
      ${$linkCollab}

      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
