const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .button-collabcode {
        width: 300px;
        height: 48px;
        text-transform: uppercase;
        background-color: #f25a70;
        color: #fff;
        border-radius: 24px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        margin-top: 45px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = content => {
    module._style();

    return `<button class="button-collabcode">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
