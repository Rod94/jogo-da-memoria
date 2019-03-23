const pointBar = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .point-bar{
        background-color: #00bfff;
        height: 40px;
        text-align: center;
        font-family: "Roboto", sans-serif;
      }
      .point-bar > .number {
        color: #fff;
        line-height: 40px;
        font-weight: bold;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
      <header class="point-bar">
        <span class="number">Score: 0</span>
      </header>
    `;
  };
  return {
    create: module.create
  };
})();
