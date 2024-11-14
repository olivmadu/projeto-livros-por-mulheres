function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  section.innerHTML = "";

  let encontrou = false;

  for (let dado of dados) {
      if (dado.titulo && dado.titulo.toLowerCase().includes(campoPesquisa)) {
          encontrou = true;
          section.innerHTML += `
          <div class="item-resultado">
              <h2> 
                  <a href="${dado.link}" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">mais informações</a>
          </div>
          `;
      }
  }

  if (!encontrou) {
      section.innerHTML = `<p>Nenhum livro encontrado para "${campoPesquisa}".</p>`;
  }
}
