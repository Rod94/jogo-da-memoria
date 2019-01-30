function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `<img
  src="img/icon-collabcode.png"
  alt="Gueio mascote Collabcode"
  class="icon"
  onclick="handleClick()">
  `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconBug = `<img
  src="img/icon-bug.png"
  alt="Icone bug"
  class="icon"
  onclick="handleClick()">
  `;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconBug);
}
function handleClick() {
  console.log("ae");
}
