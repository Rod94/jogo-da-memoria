const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .input-collabcode{
        font-size: 18px;
        padding-bottom: 12px;
        border-bottom: 1px solid #9c9fa0;
        display: block;
        width: 100%;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `<input class="input-collabcode" type="email">`;
  };

  return {
    render: module.render
  };
})();
