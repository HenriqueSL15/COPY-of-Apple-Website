const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const minuaturaImagem0 = document.getElementById('0-imagem-miniatura');
const minuaturaImagem1 = document.getElementById('1-imagem-miniatura');
const minuaturaImagem2 = document.getElementById('2-imagem-miniatura');

// Objetos com todas as cores(e seus respectivos nomes/pastas)
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

// Array guardando todos os objetos
const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];

// Array guardando todos os tamanhos
const opcoesTamanhos = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

// Função que troca de imagem
function trocarImagem(){
  // Pega o primeiro caractere do ID da opção com NAME = "opcao-imagem" que estiver selecionada(checked)
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);

  // Atualiza na variável de imagem selecionada
  imagemSelecionada = idOpcaoSelecionada;

  // Troca a visualização com a variável acima além de escolher a pasta corretamente usando outro array
  imagemVisualizacao.src=  "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada + '.jpeg';
}

// Troca tamanho com base na opção com NAME="opcao-tamanho" que estiver selecionada(checked)
function trocarTamanho(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
  tamanhoSelecionado = idOpcaoSelecionada;
  tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome +' para caixa de ' + opcoesTamanhos[tamanhoSelecionado];

  // Altera os tamanhos com base no selecionada e vice-versa
  if(opcoesTamanhos[tamanhoSelecionado] === '41 mm'){
    imagemVisualizacao.classList.add('caixa-pequena');
  }else{
    imagemVisualizacao.classList.remove('caixa-pequena');
  }
}


// Troca a cor com base na opção selecionada
function trocarCor(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  corSelecionada = idOpcaoSelecionada;
  
  // Altera texto informativo
  tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome +' para caixa de ' + opcoesTamanhos[tamanhoSelecionado];
  nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

  // Atualiza as 3 fotos com base na cor selecionada e suas respectivas pastas
  minuaturaImagem0.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
  minuaturaImagem1.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
  minuaturaImagem2.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

  // Altera a visualização da foto atual
  imagemVisualizacao.src=  "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada + '.jpeg';
}