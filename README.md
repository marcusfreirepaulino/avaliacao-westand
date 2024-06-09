# Teste de Conhecimentos em Angular/React, TypeScript, SQL e Node.js

## 1. TypeScript

### Perguntas Teóricas

1. Explique a diferença entre `interface` e `type` em TypeScript.
`A função de uma interface é a determinar a estrutura de um objeto e é boa prática utililiza-lo com essa finalidade. Já o type pode ser usado para definir a tipagem de objetos, union, funções, etc, e acaba sendo mais flexível que uma interface.`
2. O que são generics e como eles são utilizados?
`Um generic é um tipo que permite que uma mesma funcionalidade possa ser aplicada para diferentes tipagens. Exemplo: O mẽtodo de array "map" permite que determinemos qual vai ser a tipagem do array que ele vai retornar. `
3. O que é um `Union Type` e como ele pode ser usado em TypeScript?
`Um Union Type é um tipo que permite que você determine que um valor pode ter mais de um tipo. Exemplo:  "type Color = 'red' | 'blue' | 'green'"`

### Desafios de Código

1. Escreva uma função em TypeScript que recebe uma lista de números e retorna o maior número da lista.
2. Crie uma interface `Person` com as propriedades `name` (string) e `age` (number). Escreva uma função que recebe um array de `Person` e retorna o nome da pessoa mais velha.

## 2. Angular/React

### Perguntas Teóricas

**Angular**

1. Explique a diferença entre `ngOnInit` e `constructor` em Angular.
`O constructor é o inicializador da classe do componente em si, que acontece em tempo de execução do código, já o ngOnInit é baseado no ciclo de vida do componente e depende do Angular para ser chamado.`
2. O que são `Services` e `Dependency Injection` em Angular?
3. Como funciona o `Data Binding` em Angular?
`Data Binding é o que nos permite comunicarmos os dados para o template HTML. As principais formas de Data Binding são: Interpolation, permite inserir os valores das propriedades do componente no template usando {{}}. Propery Binding: permite que você atribua dinamicamente valores de propriedades de elementos HTML no template a expressões do componente usando []. Event Binding, permite que você responda a envetos do DOM execuntando o mẽtodo passado pelo componente usando (). Two-way-binding, permite que você atualize tanto as propriedades do componente quanto os valores de entrada do DOM simultaneamente usando [()].`

**React**

1. Explique a diferença entre `Component` e `PureComponent` em React.
`PureComponent é uma extensão da classe Component que serve para pullar re-renders desnecessários, ou seja: se as props, state ou context de um componente não mudaram ele não re-renderizar. O equivalente disso em um componente funcional seria usar "memo" no componente.`
2. O que são `Hooks` e por que eles são usados?
`Hooks são funções que permitem que os commponentes funcionais utilizarem as funcionalidades do React como state, context e controle do ciclo de vida.`
3. Como funciona o `State` e o `Props` em React?
`O State serve para controlar e guardar dados mũtaveis internos a um componente, já as Props servem para passar dados de um componente pai para o filho.  `

### Desafios de Código

**Angular**

1. Crie um serviço simples em Angular que busca dados de uma API e injete-o em um componente.
2. Implemente um formulário reativo em Angular que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

**React**

1. Crie um componente funcional em React que busca dados de uma API e exibe esses dados em uma lista.
2. Implemente um formulário controlado em React que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

## 3. SQL

### Perguntas Teóricas

1. O que é uma `JOIN` e quais são os tipos principais de `JOIN` em SQL?
`A JOIN permite que você consulte dados de diferentes tabelas em uma única consulta. Ela combina linhas de diferentes tabelas de acordo com uma relação entre elas. Tipos de JOIN: INNER JOIN, LEFT JOIN, RIGHT JOIN e CROSS JOIN.`
2. Explique a diferença entre `WHERE` e `HAVING` em uma consulta SQL.
`HAVING serve para filtrar grupos de linhas após uma operação de agregação ter sido realizada, já que o WHERE não pode fazer o mesmo.`
3. O que são índices e por que são importantes?
`Ĩndices são utilizados para recuperar dados de uma tabela de maneira mais veloz. É muito importante utilzar eles em dados que são procurados frequentemente.`

### Desafios de Código

1. Escreva uma consulta SQL para encontrar todos os clientes que fizeram pedidos no último mês.
2. Dada a tabela `Employees` com colunas `id`, `name` e `salary`, escreva uma consulta SQL para encontrar os 5 funcionários com os maiores salários.

## 4. Node.js

### Perguntas Teóricas

1. O que é o `Event Loop` em Node.js e como ele funciona?
`O event loop é o que permite que o node.js realize operações assíncronas terceirizando essas operações para o kernel.`
2. Explique a diferença entre `require` e `import` em Node.js.
`require é a forma do Node.js importar módulos em CommonJS, que é o sistema padrão do node. Já o import é a maneira que o ES6 importa módulos. Ẽ uma maneira mais moderna e que ainda não é 100% suportada nativamente no node.`
3. O que é `middleware` em Express.js e como ele é usado?
`Um middleware é uma função intermediária que pode interceptar e modificar requisições e respostas. Exemplo: um middleware que verifica se existe um JWT válido no header da requisição. Um middleware que trata erros e retorna uma mensagem pro client.`

### Desafios de Código

1. Crie uma API simples em Node.js usando Express que tem uma rota GET que retorna "Hello, World!".
2. Implemente um middleware em Express que registra todas as requisições recebidas com o método HTTP e a URL solicitada.
