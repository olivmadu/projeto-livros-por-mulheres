// Função para obter o parâmetro de pesquisa da URL
function obterParametroPesquisa(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para exibir os resultados da pesquisa
function exibirResultados() {
    const termoPesquisa = obterParametroPesquisa("termo").toLowerCase();
    const tipoPesquisa = obterParametroPesquisa("tipo");
    const sectionResultados = document.getElementById("resultados-pesquisa");

    if (termoPesquisa && tipoPesquisa) {
        // Combina os dados das autoras e dos livros
        const todosDados = [...autoras, ...livros];

        // Filtra os dados com base no termo de pesquisa e no tipo
        const resultadosFiltrados = todosDados.filter(item =>
            item.tipo === tipoPesquisa && item.titulo.toLowerCase().includes(termoPesquisa)
        );

        // Limpa os resultados anteriores
        sectionResultados.innerHTML = "";

        // Exibe os resultados na seção de resultados
        if (resultadosFiltrados.length > 0) {
            resultadosFiltrados.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("item-resultado");
                div.innerHTML = `
                    ${item.imagem ? `<img src="${item.imagem}" alt="${item.titulo}" class="imagem-resultado">` : ''}
                    <h2>${item.titulo}</h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    <a href="${item.link}" target="_blank">mais informações</a>
                `;
                sectionResultados.appendChild(div);
            });
        } else {
            sectionResultados.innerHTML = `<p>Nenhum resultado encontrado para "${termoPesquisa}".</p>`;
        }
    }
}

// Chama a função para exibir os resultados ao carregar a página
document.addEventListener("DOMContentLoaded", exibirResultados);


