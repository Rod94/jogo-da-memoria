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
    .memory-card.-active .card{
      display: none;
    }
    .memory-card.-active .card.-front{
      display: flex;
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
function handleClick($component) {
  const $cardsActivated = document.querySelectorAll(".memory-card.-active");

  if ($cardsActivated.length < 2) {
    $component.classList.toggle("-active");
  }

  if ($cardsActivated.length === 2) {
    setTimeout(() => {
      $cardsActivated.forEach(e => e.classList.remove("-active"));
    }, 2000);
  }
}
//nome do parametro poderia ser qualquer um!
//if ternário, se for verdade a condição antes do `?` entao atribui o valor depois do ?
//caso seja mentira, será atribuido o que estiver depois do :

//parametros pegos da page, sendo atribuidos
