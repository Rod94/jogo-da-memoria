function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      width: 145px;
      height: 145px;
      position: relative;
    }
    .memory-card .card {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px 0 #00000029;
      margin: 5px;
      cursor: pointer;
      position: absolute;
    }
    .memory-card.-active .card,
    .memory-card.-acerto .card,
    .memory-card.-erro .card{
      display: none;
    }
    .memory-card.-active .card.-front,
    .memory-card.-acerto .card.-front,
    .memory-card.-erro .card.-front{
      display: flex;
    }
    .memory-card.-acerto .card.-front{
      border-top: 3px inset #238E23;
      border-left: 3px inset #238E23;
    }
    .memory-card.-erro .card.-front{
      border-bottom: 3px outset #B22222;
      border-right: 3px outset #B22222;
    }
    .memory-card .card.-front {
      background-color: #fff;
    }
    .memory-card .card.-front::before {
      position: absolute;
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
    }
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;
  $head.insertBefore($style, null);

  //está retornando o JSON do createMemoryCard da pages
  return ({ src, alt }) => ` 
  <div class = "memory-card" onClick= "handleClick(this)">
    <article class = "card -front">
      <img
      class="icon"
      src="${src}" 
      alt="${alt}">
    </article>
    <article class = "card">
      <img
      class="icon"
      src="img/icon-collabcode.png" 
      alt="Mascote Gueio da CollabCode">
    </article>
  </div> 
`;
}
const handleClick = $component => {
  if (!$component.classList.contains("-active")) {
    if (qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
    if (qtdActiveMemoryCard == 1) {
      checkedCards();
    }
  }
};
const checkedCards = () => {
  const $checkCards = Array.from(
    //passando para Array, se nao tiver o metodo Array.from(), é pego como NodeList.
    document.querySelectorAll(".memory-card.-active")
  );

  const check = [
    ...new Set( //objeto Set permite armazenar valores, nesse caso está mapeando e pegando o "src"
      $checkCards.map((
        card //arrow function
      ) => card.querySelector(".-front .icon").getAttribute("src"))
    )
  ];
  if (check.length == 1) {
    console.log("Acertou, muito bem!");
    $checkCards.forEach(card => {
      //arrow function
      card.classList.add("-acerto");
      card.classList.remove("-active");
    });
  } else {
    console.log("Errou! Tente novamente");
    setTimeout(() => {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );
      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.add("-erro");
      });
      qtdActiveMemoryCard = 0;
    }, 700);
  }
};

//nome do parametro poderia ser qualquer um!
//if ternário, se for verdade a condição antes do `?` entao atribui o valor depois do ?
//caso seja mentira, será atribuido o que estiver depois do :

//parametros pegos da page, sendo atribuidos

// metodo forEach percorre um array.
