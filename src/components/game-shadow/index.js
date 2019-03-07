const gameShadow = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .game-shadow{
        width: 100%;
        height: 100%;
        background-color: #e9e9e9;
        position: fixed;
        top: 0;
        opacity: 0.7;
      }
      .game-shadow.-active{
        display: none;
      }`;
    $head.insertBefore($style, null);
  };
  module.create = () => {
    module._style();
    return `
      <div class="game-shadow"></div>
    `;
  };
  return {
    create: module.create
  };
})();
