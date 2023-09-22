

const contents = {
  inicio: {
    title: `Bem vindo ao meu primeiro projeto em react`,
    text: `Olá, me chamo Guilherme, e esta página que você está agora é o meu primeiro projeto pessoal desenvolvido totalmente em React. Depois de muito tempo fervendo o cérebro pra fazer com que tudo funcione, e perder muito, mas muito tempo mesmo estilizando com o CSS, esse é o resultado.
    
    Sei que não ficou perfeito, e tem muitas coisas que ainda devo melhorar, mas me da um desconto por ser a minha primeira página :)
    
    Enfim, neste texto que você vai ler agora, vou tentar deixar detalhado tudo o que eu fiz nesta página, o que serve principalmente para mim, porque acredito que assim eu posso ter uma clareza muito maior do que eu fiz, então bora lá...`
  },
  conteudo: [
    {
      title: 'O cabeçalho da página',
      text: `Bem, o cabeçalho não tem muito o que falar, Eu simplesmente criei um componente em react para o Header, depois disso eu criei um h1 com o texto "Hello World", e depois eu guardei meu nome em uma variável, e concatenei ele com o "Seja bem vindo..." utilizando template literals, pra finalizar foi um monte de CSS. `
    },
    {
      title: 'Os cards da página',
      text: `Essa foi a primeira seção que desenvolvi aqui nessa página, não vamos contar o cabeçãlho pq ele é literalmente 2 textos. 
      Esses cards foram separados em 2 componentes, o Card e o Cards, o Componente Card recebe valores via props, e com esses valores ele faz organização dos elementos do Card.
      O Componente Cards, recebe os dados dos cards através de um arquivo data, e com esses dados eu faço a desestruturação e passo para o Card via props, e isso acontece dentro de um map, para que os cards apareçam na tela dinâmicamente.
      E todos os Cards estão dentro de um tag "a", para que eles sejam clicáveis
      `
    },
    {
      title: 'As Seções de texto',
      text: `Essa é a Seção que você está lendo agora, o funcionamento dela é bem parecido com o dos cards, eu criei 4 componentes, o componente AboutSection, que é responsável por fazer a renderização de todas as seções, e os componentes Title, SubTitle e Text, esses três componentes recebem valores via props através do AboutSection, e tudo o que eles fazem é imprimir o texto passado via props.
      O AboutSection, recebe um array de objetos contendo todos os textos e títulos da seção, e através de um map ele renderiza esses conteúdos na tela dinâmicamente.
      `
    },
  ]
}

export default contents