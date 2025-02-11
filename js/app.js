// Função de pesquisa: redireciona para a página de resultados com os parâmetros na URL
function pesquisar() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const tipoPesquisa = document.getElementById("tipo-pesquisa").value;

  if (campoPesquisa) {
    window.location.href = `resultados.html?termo=${encodeURIComponent(campoPesquisa)}&tipo=${encodeURIComponent(tipoPesquisa)}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Cria os cards para cada seção
  criarCardsAutoras();
  criarCardsLivros();
  criarCardsCitacoes();

  // Configura o Intersection Observer para aplicar animações nos elementos com a classe "animar"
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  });
  document.querySelectorAll('.animar').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const texto = "bem-vinda ao mundo escrito por mulheres";
  const elemento = document.getElementById("typewriter-text");
  let index = 0;
  
  function type() {
    if (index < texto.length) {
      elemento.innerHTML += texto.charAt(index);
      index++;
      setTimeout(type, 100); 
    }
  }
  
  type();
});


// Função para criar os cards de autoras
function criarCardsAutoras() {
  const autorasContainer = document.querySelector(".autoras .card-container");
  if (!autorasContainer) return;
  
  // Exemplo de dados para autoras
  const autoras = [
    {
      nome: "Clarice Lispector",
      descricao: "Clarice Lispector foi uma das escritoras mais importantes do Brasil, conhecida por sua prosa introspectiva.",
      imagem: "imagens/clarice.jpg",
      link: "resultados.html?termo=Clarice%20Lispector&tipo=autoras"
    },
    {
      nome: "Simone de Beauvoir",
      descricao: "Filósofa e escritora francesa, conhecida por sua obra 'O Segundo Sexo'.",
      imagem: "imagens/simone.jpg",
      link: "https://pt.wikipedia.org/wiki/Simone_de_Beauvoir"
    },
    {
    nome: "Virginia Woolf",
    descricao: "Escritora inglesa, pioneira na técnica do fluxo de consciência e uma figura do modernismo.",
    imagem: "imagens/virginia.jpg",
    link: "https://pt.wikipedia.org/wiki/Virginia_Woolf"
    }
  ];

  autoras.forEach(autora => {
    const card = document.createElement("div");
    card.classList.add("card-item", "animar");
    card.onclick = function() {
      abrirModal(autora.nome, autora.descricao);
    };

    const img = document.createElement("img");
    img.src = autora.imagem;
    img.alt = autora.nome;
    img.classList.add("autora-img");

    card.innerHTML = `
      <h3>${autora.nome}</h3>
      <p>${autora.descricao}</p>
      <a href="${autora.link}" target="_blank">Saiba mais</a>
    `;
    card.insertBefore(img, card.firstChild);
    autorasContainer.appendChild(card);
  });
}

// Função para criar os cards de livros
function criarCardsLivros() {
  const livrosContainer = document.querySelector(".livros .card-container");
  if (!livrosContainer) return;
  
  // Exemplo de dados para livros
  const livros = [
    {
      titulo: "A Hora da Estrela",
      descricao: "Uma das obras mais conhecidas de Clarice Lispector, que explora temas como identidade e sofrimento humano.",
      imagem: "imagens/a_hora_da_estrela.jpg",
      link: "resultados.html?termo=A%20Hora%20da%20Estrela&tipo=livros"
    },
    {
      titulo: "O Segundo Sexo",
      descricao: "Obra fundamental de Simone de Beauvoir, uma análise profunda sobre a condição feminina.",
      imagem: "imagens/o_segundo_sexo.jpg",
      link: "https://pt.wikipedia.org/wiki/O_Segundo_Sexo"
    },
    {
      titulo: "Mrs Dalloway",
      descricao: "Romance de Virginia Woolf, famoso por seu estilo inovador e introspectivo.",
      imagem: "imagens/mrs_dalloway.jpg",
      link: "https://pt.wikipedia.org/wiki/Mrs_Dalloway"
  }
  ];

  livros.forEach(livro => {
    const card = document.createElement("div");
    card.classList.add("card-item", "animar");
    card.onclick = function() {
      abrirModal(livro.titulo, livro.descricao);
    };

    const img = document.createElement("img");
    img.src = livro.imagem;
    img.alt = livro.titulo;
    img.classList.add("livro-img");

    card.innerHTML = `
      <h3>${livro.titulo}</h3>
      <p>${livro.descricao}</p>
      <a href="${livro.link}" target="_blank">Saiba mais</a>
    `;
    card.insertBefore(img, card.firstChild);
    livrosContainer.appendChild(card);
  });
}

// Função para criar os cards de citações
function criarCardsCitacoes() {
  const citacoesContainer = document.querySelector(".citacoes-container .card-container");
  if (!citacoesContainer) return;
  
  // Exemplo de dados para citações
  const citacoes = [
    {
      texto: "Não se nasce mulher: torna-se.",
      autor: "Simone de Beauvoir",
      link: "https://pt.wikipedia.org/wiki/Simone_de_Beauvoir"
    },
    {
      texto: "As mulheres, durante séculos, serviram de espelho aos homens por possuírem o poder mágico e delicioso de refletirem uma imagem do homem duas vezes maior que o natural.",
      autor: "Virginia Woolf",
      link: "#"
    },
    {
    texto: 'Pés, para que os quero, se tenho asas para voar?',
    autor: "Frida Kahlo",
    link: "#"
    }
  ];

  citacoes.forEach(citacao => {
    const card = document.createElement("div");
    card.classList.add("card-item", "animar");
    card.onclick = function() {
      abrirModal("Citação", citacao.texto);
    };

    card.innerHTML = `
      <blockquote>"${citacao.texto}"</blockquote>
      <p><em>- ${citacao.autor}</em></p>
      <a href="${citacao.link}" target="_blank">Saiba mais</a>
    `;
    citacoesContainer.appendChild(card);
  });
}

// Funções para abrir e fechar o modal
function abrirModal(titulo, descricao) {
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-descricao').innerText = descricao;
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.addEventListener('click', function(e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    fecharModal();
  }
});

// Seleciona o botão "Voltar ao Topo"
const btnTopo = document.getElementById('voltar-topo');

// Mostra ou esconde o botão conforme o usuário rola a página
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});

// Adiciona scroll suave ao clicar no botão
btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Código para o efeito de fade-in na seção "Sobre Nós"
document.addEventListener("DOMContentLoaded", function() {
  const sobreNosSection = document.getElementById("sobre-nos");
  if (sobreNosSection) {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.2 });
      observer.observe(sobreNosSection);
  }
});
