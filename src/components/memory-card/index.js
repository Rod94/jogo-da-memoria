/*const createMemoryCard = () => `
  <article class = "memory-card">
    <img
    class="icon"
    src="img/icon-collabcode.png"
    alt="Gueio mascote Collabcode"
    onclick="handleClick()">
  </article>
  `;

const createMemoryCardFront = () => `
  <article class = "memory-card -front">
    <img
    class="icon"
    src="img/icon-bug.png"
    alt="Icone bug"
    onclick="handleClick()">
  </article>
  `;
*/
function handleClick() {
  console.log("ae");
}

const createMemoryCard = isFront => {
  if (isFront !== true) {
    return `
      <article class = "memory-card">
        <img
        class="icon"
        src="img/icon-collabcode.png"
        alt="Gueio mascote Collabcode"
        onclick="handleClick()">
      </article>
  `;
  } else {
    return `
      <article class = "memory-card -front">
        <img
        class="icon"
        src="img/icon-bug.png"
        alt="Icone bug"
        onclick="handleClick()">
      </article>
  `;
  }
};
