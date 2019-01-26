const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `<img 
      class='icon' 
      src='img/icon-collabcode.png' 
      alt='Mascote Collabcode'>
      </img>`;

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
