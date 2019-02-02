const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "Gueio mascote CollabCode",
  "img/icon-collabcode.png"
);
const $memoryCardFront = createMemoryCard(
  "Icone de Bug",
  "img/icon-bug.png",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

//caminho dos parametros na ordem `alt, src, nameClass`
//page passa informação para o components
