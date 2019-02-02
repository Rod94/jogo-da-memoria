const createMemoryCard = (alt, src, nameClass) => ` 
  <article class = "memory-card ${nameClass}">
    <img
    class="icon"
    src="${src}" 
    alt="${alt}"
    onclick="handleClick()">
  </article>
`;

const handleClick = () => console.log("ae");

//nome do parametro poderia ser qualquer um!
//if ternário, se for verdade a condição antes do `?` entao atribui o valor depois do ?
//caso seja mentira, será atribuido o que estiver depois do :

//parametros pegos da page, sendo atribuidos
