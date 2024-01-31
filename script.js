const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const verdeCipreste = {
  nome: 'Verde-cipestre',
  pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
  nome: "Azul-Inverno",
  pasta: "imagens-azul-inverno"
};

const meiaNoite = {
  nome: "Meia-Noite",
  pasta: "imagens-meia-noite"
};

const estelar = {
  nome: "Estelar",
  pasta: 'imagens-estelar'
};

const rosaClaro = {
  nome: "Rosa-Claro",
  pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];

let imagemSelecionada = 1;

function trocarImage(){
  const idOpcaoSelecionada = document.querySelector('[name:"opcao-imagem"]:checked');
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';
}