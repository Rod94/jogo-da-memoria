const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "Gueio mascote CollabCode",
  "img/icon-collabcode.png"
);
const $memoryCardBug = createMemoryCard(
  "Icone de Bug",
  "img/icon-bug.png",
  "-front"
);
const $memoryCardJS = createMemoryCard("Icone JS", "img/icon-js.png", "-front");
const $memoryCardC = createMemoryCard("Icone do C", "img/icon-c.png", "-front");
const $memoryCardPHP = createMemoryCard(
  "Icone do PHP",
  "img/icon-php.png",
  "-front"
);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

//caminho dos parametros na ordem `alt, src, nameClass`
//page passa informação para o components
