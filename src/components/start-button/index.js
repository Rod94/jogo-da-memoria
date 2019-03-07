const startButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button{
        position: absolute;
        width: 90px;
        height: 90px;
        text-transform: uppercase;
        border-radius: 50%;
        background-color: #00ff00;
        color: #fff;
        cursor: pointer;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);        
      }
    `;
    $head.insertBefore($style, null);
  };
  module.create = () => {
    module._style();
    return `
    <button class="start-button">start</button>
    `;
  };
  return {
    create: module.create
  };
})();
