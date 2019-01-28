const $root = document.querySelector("#root");
const $container = document.createElement("section");
const $memoryTurned = `<article class="memory-turned">
<img class="icon" 
src="img/icon-bug.png" 
alt="Bug icon">
</article>`;
const $memoryCard = `<article class="memory-card">
<img class="icon" 
src="img/icon-collabcode.png" 
alt="Mascote Collabcode">
</img>
</article>`;

$container.classList.add("container");

$root.insertBefore($container, null);
$container.insertAdjacentHTML("afterbegin", $memoryTurned);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
$container.insertAdjacentHTML("beforeend", $memoryCard);
