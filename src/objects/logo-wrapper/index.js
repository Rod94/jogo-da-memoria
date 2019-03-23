const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .logo-wrapper{
      position: absolute;
      top: 180px;
      left: 50%;
      transform: translateX(-50%);
    }
    .logo-collabcode{
      width: 175px;
      height: 175px;
    }
    .title-collabcode{
      display: flex;
      justify-content: center;
      color: #f25a70;
      font-size: 24px;   
      text-transform: uppercase;
      margin-top: 10px;
    }`;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "") => {
    module._style();

    return `
      <div class="logo-wrapper">
        <img class="logo-collabcode" src="img/icon-collabcode.png" alt="gueio">
        <h1 class="title-collabcode">${content}</h1>
      </div>`;
  };
  return {
    render: module.render
  };
})();
