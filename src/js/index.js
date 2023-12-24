const personagemSelecionadoEsquerda = document.querySelector('.personagem-selecionado');
const personagemSelecionadoDireita = document.querySelector('.personagem-selecionado-direita');
const personagens = document.querySelectorAll('.personagem');
let mouseEnterAtivo = true;
let travarLadoEsquerdo = true;

function atualizarInformacoes(personagem) {
  const imagemGrandeEsquerda = personagemSelecionadoEsquerda.querySelector('.personagem-grande');
  const imagemGrandeDireita = personagemSelecionadoDireita.querySelector('.personagem-grande');

  const nomePersonagemEsquerda = personagemSelecionadoEsquerda.querySelector('.nome-personagem');
  const nomePersonagemDireita = personagemSelecionadoDireita.querySelector('.nome-personagem');

  const descricaoPersonagemEsquerda = personagemSelecionadoEsquerda.querySelector('.descricao-personagem');
  const descricaoPersonagemDireita = personagemSelecionadoDireita.querySelector('.descricao-personagem');

  const idPersonagem = personagem.getAttribute('id');
  const nomePersonagem = personagem.getAttribute('data-name');
  const descricaoPersonagem = personagem.getAttribute('data-description');

  imagemGrandeEsquerda.src = `src/imagens/card-${idPersonagem}.png`;
  imagemGrandeDireita.src = `src/imagens/card-${idPersonagem}.png`;

  nomePersonagemEsquerda.innerText = nomePersonagem;
  nomePersonagemDireita.innerText = nomePersonagem;

  descricaoPersonagemEsquerda.innerText = descricaoPersonagem;
  descricaoPersonagemDireita.innerText = descricaoPersonagem;
}

function mouseEnterHandler(event) {
  if (mouseEnterAtivo) {
    const personagem = event.currentTarget;
    atualizarInformacoes(personagem);

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

function desativarMouseEnter() {
  mouseEnterAtivo = false;
}

function ativarMouseEnter() {
  mouseEnterAtivo = true;
}

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', mouseEnterHandler);
  personagem.addEventListener('click', () => {
    mouseEnterHandler(event);
    desativarMouseEnter();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    ativarMouseEnter();
  }
});
