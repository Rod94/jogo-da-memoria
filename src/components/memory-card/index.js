function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 145px;
      height: 145px;
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px 0 #00000029;
      position: relative;
      margin: 5px;
      cursor: pointer;
    }
    .memory-card.-front {
      background-color: #fff;
    }
    .memory-card.-front::before {
      position: absolute;
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
    }
    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }
    .memory-card.-front > .icon {
      position: absolute;
      width: 100px;
      height: 100px;
      transform: translateY(-12px);
    }
  `;
  $head.insertBefore($style, null);
  //está retornando o createMemoryCard da pages
  return ({ src, nameClass, alt }) => ` 
  <article class = "memory-card ${nameClass}">
    <img
    class="icon"
    src="${src}" 
    alt="${alt}"
    onclick="handleClick()">
  </article>
`;
}

const handleClick = () => console.log("ae");

//nome do parametro poderia ser qualquer um!
//if ternário, se for verdade a condição antes do `?` entao atribui o valor depois do ?
//caso seja mentira, será atribuido o que estiver depois do :

//parametros pegos da page, sendo atribuidos
