
function exibirLivros(lista) {
    const container = document.getElementById('lista-livros');
    container.innerHTML = ""; 

    lista.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card-livro", "fade-in");
        card.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}" class="livro-img">
            <h2>${livro.titulo}</h2>
            <p>${livro.descricao}</p>
            <a href="${livro.link}" target="_blank">Saiba mais</a>
        `;
        container.appendChild(card);
    });

    const cards = document.querySelectorAll('.card-livro.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    exibirLivros(livros);
});

document.getElementById("filtro-livros").addEventListener("input", function() {
    const termo = this.value.toLowerCase();
    const livrosFiltrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termo)
    );
    exibirLivros(livrosFiltrados);
});
