// Função para exibir todos os livros
function exibirTodosOsLivros() {
    const listaLivros = document.getElementById("lista-livros");

    // Limpa a seção (se necessário)
    listaLivros.innerHTML = "";

    // Itera sobre o array de livros para criar os cards
    livros.forEach(livro => {
        const div = document.createElement("div");
        div.classList.add("card-livro");

        // Adiciona a imagem, o título, a descrição e o link
        div.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}" class="livro-img">
            <h2>${livro.titulo}</h2>
            <p>${livro.descricao}</p>
            <a href="${livro.link}" target="_blank">Saiba mais</a>
        `;

        listaLivros.appendChild(div);
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", exibirTodosOsLivros);
