const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const minuaturaImagem0 = document.getElementById('0-imagem-miniatura');
const minuaturaImagem1 = document.getElementById('1-imagem-miniatura');
const minuaturaImagem2 = document.getElementById('2-imagem-miniatura');

const azulInverno = {
  nome: 'Azul-inverno',
  pasta: 'imagens-azul-inverno'
};

const verdeCipreste = {
  nome: 'Verde-cipreste',
  pasta: 'imagens-verde-cipreste'
};

const meiaNoite = {
  nome: 'Meia-noite',
  pasta: 'imagens-meia-noite'
};

const estelar = {
  nome: 'Estelar',
  pasta: 'imagens-estelar'
};

const rosaClaro = {
  nome: 'Rosa-claro',
  pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];
const opcoesTamanhos = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);;
  imagemSelecionada = idOpcaoSelecionada;
  imagemVisualizacao.src=  "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada + '.jpeg';
}

function trocarTamanho(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
  tamanhoSelecionado = idOpcaoSelecionada;
  tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome +' para caixa de ' + opcoesTamanhos[tamanhoSelecionado];
  if(opcoesTamanhos[tamanhoSelecionado] === '41 mm'){
    imagemVisualizacao.classList.add('caixa-pequena');
  }else{
    imagemVisualizacao.classList.remove('caixa-pequena');
  }
}

function trocarCor(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  corSelecionada = idOpcaoSelecionada;
  tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome +' para caixa de ' + opcoesTamanhos[tamanhoSelecionado];
  nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
  minuaturaImagem0.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
  minuaturaImagem1.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
  minuaturaImagem2.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

  imagemVisualizacao.src=  "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada + '.jpeg';
}