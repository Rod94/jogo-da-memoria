const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  (nameClass = ""),
  (alt = "Gueio mascote CollabCode"),
  (src = "img/icon-collabcode.png")
);
const $memoryCardBug = createMemoryCard(
  (alt = "Icone de Bug"),
  (src = "img/icon-bug.png"),
  (nameClass = "-front")
);
const $memoryCardJS = createMemoryCard(
  (nameClass = "-front"),
  (src = "img/icon-js.png"),
  (alt = "Icone JS")
);
const $memoryCardC = createMemoryCard(
  (nameClass = "-front"),
  (alt = "Icone do C"),
  (src = "img/icon-c.png")
);
const $memoryCardPHP = createMemoryCard(
  (nameClass = "-front"),
  (alt = "Icone do PHP"),
  (src = "img/icon-php.png")
);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

//caminho dos parametros na ordem `alt, src, nameClass`
//page passa informação para o components
