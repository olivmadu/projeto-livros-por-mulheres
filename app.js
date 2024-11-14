function pesquisar() {
  // Obtém o elemento da seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertendo para minúsculas para uma pesquisa case-insensitive

  // Limpa os resultados anteriores
  section.innerHTML = "";

  // Itera sobre cada elemento dentro da lista de dados
  for (let dado of dados) {
    // Verifica se 'dado.titulo' é uma string antes de usar includes()
    if (dado.titulo && dado.titulo.toLowerCase().includes(campoPesquisa)) {
      // Adiciona um item de resultado à seção HTML, contendo o título, a descrição e o link
      section.innerHTML += `
      <div class="item-resultado">
        <h2> 
          <a href="#" target="_blank"> ${dado.titulo} </a> <!-- Título do resultado com um link -->
        </h2>
        <p class="descricao-meta"> ${dado.descricao} </p> <!-- Descrição do resultado -->
        <a href="${dado.link}" target="_blank"> mais informações</a> <!-- Link para mais informações -->
      </div>
      `;
    }
  }
}
