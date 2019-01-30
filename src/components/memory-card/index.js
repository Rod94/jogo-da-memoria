function createMemoryCard() {
  const $memoryCard = `
  <article class = "memory-card">
    <img
    class="icon"
    src="img/icon-collabcode.png"
    alt="Gueio mascote Collabcode"
    onclick="handleClick()">
  </article>
  `;
  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCard = `
  <article class = "memory-card -front">
    <img
    class="icon"
    src="img/icon-bug.png"
    alt="Icone bug"
    onclick="handleClick()">
  </article>
  `;

  return $memoryCard;
}
function handleClick() {
  console.log("ae");
}
