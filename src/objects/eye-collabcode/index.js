const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .eye-collabcode {
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        display: block;
        text-indent: -9999px;
        width: 24px;
        height: 15px;
        cursor: pointer;
      }
    
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = () => {};

  module.render = () => {
    module._style();

    return `<label class="eye-collabcode" onClick=eyeCollabcode.handleClick()>Mostrar senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
