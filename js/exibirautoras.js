// Função para exibir todas as autoras
function exibirTodasAsAutoras() {
    const listaAutoras = document.getElementById("lista-autoras");

    // Limpa a seção (se necessário)
    listaAutoras.innerHTML = "";

    // Itera sobre o array de autoras para criar os cards
    autoras.forEach(autora => {
        const div = document.createElement("div");
        div.classList.add("card-autora");

        div.innerHTML = `
            <img src="${autora.imagem}" alt="${autora.nome}">
            <h2>${autora.titulo}</h2>
            <p>${autora.descricao}</p>
            <a href="${autora.link}" target="_blank">Saiba mais</a>
        `;

        listaAutoras.appendChild(div);
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", exibirTodasAsAutoras);
