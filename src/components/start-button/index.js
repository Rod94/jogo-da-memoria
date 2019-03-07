const startButton = (function() {
  const module = {};
  module.create = () => {
    return `
    <input class="start-button" type="button" value="start">
    `;
  };
  return {
    create: module.create
  };
})();
