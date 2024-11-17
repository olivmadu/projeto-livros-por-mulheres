function pesquisar() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const tipoPesquisa = document.getElementById("tipo-pesquisa").value;

  if (campoPesquisa) {
      // Redireciona para a página de resultados com o termo e o tipo de pesquisa na URL
      window.location.href = `resultados.html?termo=${encodeURIComponent(campoPesquisa)}&tipo=${encodeURIComponent(tipoPesquisa)}`;
  }
}

//autoras//
document.addEventListener("DOMContentLoaded", function () {
  const autorasContainer = document.querySelector(".autoras");

  autoras.forEach(autora => {
      const card = document.createElement("div");
      card.classList.add("card-item");

      // Inserindo a imagem com as classes para estilizar
      const img = document.createElement("img");
      img.src = autora.imagem;
      img.alt = autora.nome;
      img.classList.add("autora-img");

      card.innerHTML = `
          <p>${autora.nome}</p>
          <p>${autora.descricao}</p>
          <a href="${autora.link}" target="_blank">Saiba mais</a>
      `;

      // Adiciona a imagem ao card
      card.insertBefore(img, card.firstChild);

      // Adiciona o card no container
      autorasContainer.appendChild(card);
  });
});

//livros

document.addEventListener("DOMContentLoaded", function () {
  const livrosContainer = document.querySelector(".livros");

  livros.forEach(livro => {
      const card = document.createElement("div");
      card.classList.add("card-item");

      // Criando a imagem e inserindo-a no card
      const img = document.createElement("img");
      img.src = livro.imagem;
      img.alt = livro.titulo;
      img.classList.add("livro-img");  // Usando uma classe específica para os livros

      card.innerHTML = `
          <h3>${livro.titulo}</h3>
          <p>${livro.descricao}</p>
          <a href="${livro.link}" target="_blank">Saiba mais</a>
      `;

      // Adiciona a imagem no início do card
      card.insertBefore(img, card.firstChild);

      // Adiciona o card na seção
      livrosContainer.appendChild(card);
  });
});

//citações
document.addEventListener("DOMContentLoaded", function () {
  const citacoesContainer = document.querySelector(".citações-container");

  citacoes.forEach(citacao => {
      const card = document.createElement("div");
      card.classList.add("card-item");

      card.innerHTML = `
          <blockquote>"${citacao.texto}"</blockquote>
          <p><em>- ${citacao.autor}</em></p>
          <a href="${citacao.link}" target="_blank">Saiba mais</a>
      `;

      citacoesContainer.appendChild(card);
  });
});




