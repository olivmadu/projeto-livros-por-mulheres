
function exibirAutoras(lista) {
    const container = document.getElementById('lista-autoras');
    container.innerHTML = ""; 
    lista.forEach(autora => {
        const card = document.createElement("div");

        card.classList.add("card-autora", "fade-in");
        card.innerHTML = `
            <img src="${autora.imagem}" alt="${autora.titulo}">
            <h2>${autora.titulo}</h2>
            <p>${autora.descricao}</p>
            <a href="${autora.link}" target="_blank">Saiba mais</a>
        `;
        container.appendChild(card);
    });

    const cards = document.querySelectorAll('.card-autora.fade-in');
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


exibirAutoras(autoras);


document.getElementById("filtro-autoras").addEventListener("input", function() {
    const termo = this.value.toLowerCase();
    const autorasFiltradas = autoras.filter(autora => 
        autora.titulo.toLowerCase().includes(termo)
    );
    exibirAutoras(autorasFiltradas);
});
