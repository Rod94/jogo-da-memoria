const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .btn-collabcode {
        width: 100%;
        height: 48px;
        text-transform: uppercase;
        background-color: #f25a70;
        color: #fff;
        border-radius: 24px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    window.location.hash = `#/${path}`;
  }

  module.render = ({content = "", path = ""}) => {
    module._style();

    return `<input
     class="btn-collabcode" 
     type="submit"
     value=${content}
     onClick="btnCollabcode.handleClick(event, '${path}')">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
