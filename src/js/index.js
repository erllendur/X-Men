const personagemSelecionadoEsquerda = document.querySelector('.personagem-selecionado');
const personagemSelecionadoDireita = document.querySelector('.personagem-selecionado-direita');
const personagens = document.querySelectorAll('.personagem');
let mouseEnterAtivo = true;
let travarLadoEsquerdo = false;
let travarTudo = false;
let travarLadoDireito = false

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', mouseEnterHandler);
  personagem.addEventListener('click', () => {
    if(travarLadoEsquerdo){
      travarLadoDireito = true
      travarTudo = true
    }
    travarLadoEsquerdo = true
    
    // mouseEnterHandler(event);
    // desativarMouseEnter();
  });
});

function mouseEnterHandler(event) {
  if (travarTudo) {
    return
  }
  if (mouseEnterAtivo) {
    const personagem = event.currentTarget;

    atualizarInformacoes(personagem, travarLadoEsquerdo);

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const ladoSelecionado = travarLadoEsquerdo ? personagemSelecionadoEsquerda : personagemSelecionadoDireita;
    const outroLado = travarLadoEsquerdo ? personagemSelecionadoDireita : personagemSelecionadoEsquerda;

    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove('selecionado');
    }
    personagem.classList.add('selecionado');
  }
}

function atualizarInformacoes(personagem, side) {
  const imagemGrandeEsquerda = personagemSelecionadoEsquerda.querySelector('.personagem-grande');
  const nomePersonagemEsquerda = personagemSelecionadoEsquerda.querySelector('.nome-personagem');
  const descricaoPersonagemEsquerda = personagemSelecionadoEsquerda.querySelector('.descricao-personagem');


  const imagemGrandeDireita = personagemSelecionadoDireita.querySelector('.personagem-grande');
  const nomePersonagemDireita = personagemSelecionadoDireita.querySelector('.nome-personagem');
  const descricaoPersonagemDireita = personagemSelecionadoDireita.querySelector('.descricao-personagem');

  const idPersonagem = personagem.getAttribute('id');
  const nomePersonagem = personagem.getAttribute('data-name');
  const descricaoPersonagem = personagem.getAttribute('data-description');

  if (side == false) {
    imagemGrandeEsquerda.src = `src/imagens/card-${idPersonagem}.png`;
    nomePersonagemEsquerda.innerText = nomePersonagem;
    descricaoPersonagemEsquerda.innerText = descricaoPersonagem;
  } else {
    imagemGrandeDireita.src = `src/imagens/card-${idPersonagem}.png`;
    nomePersonagemDireita.innerText = nomePersonagem;
    descricaoPersonagemDireita.innerText = descricaoPersonagem;
    travarLadoDireito = true
    
  }
}

// function desativarMouseEnter() {
//   mouseEnterAtivo = false;
// }

// function ativarMouseEnter() {
//   mouseEnterAtivo = true;
// }


 document.addEventListener('keydown', (event) => {
 if (event.key === 'Escape') {
     ativarMouseEnter();
   }
 });

 const botaoEsquerdo = document.querySelector('.botao-esquerda');
const botaoDireito = document.querySelector('.botao-direita');

botaoEsquerdo.addEventListener('click', () => {
  travarLadoEsquerdo = false;
  travarLadoDireito = true; // Opcional: bloquear o lado direito quando o esquerdo for destravado
  travarTudo = false; // Garante que o bloqueio total seja desfeito
});

botaoDireito.addEventListener('click', () => {
  travarLadoDireito = false;
  travarLadoEsquerdo = true; // Opcional: bloquear o lado esquerdo quando o direito for destravado
  travarTudo = false; // Garante que o bloqueio total seja desfeito
});

