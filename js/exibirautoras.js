document.addEventListener("DOMContentLoaded", function() {

    function exibirAutoras(lista) {
      const container = document.getElementById("lista-autoras");
      container.innerHTML = "";
      lista.forEach(autora => {
        const card = document.createElement("div");
        card.classList.add("card-autora", "fade-in");

        card.setAttribute("data-descricao", autora.descricao);
        card.setAttribute("data-link", autora.link);
        card.innerHTML = `
          <img src="${autora.imagem}" alt="${autora.titulo}">
          <h2>${autora.titulo}</h2>
          <p>${autora.descricao.substring(0, 100)}...</p>
          <a href="${autora.link}" target="_blank">Saiba mais</a>
        `;
        container.appendChild(card);
      });
      
      const cards = document.querySelectorAll('.card-autora.fade-in');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        cards.forEach(card => observer.observe(card));
      } else {
        cards.forEach(card => card.classList.add("visible"));
      }
    }
    
    exibirAutoras(autoras);
    
    document.getElementById("filtro-autoras").addEventListener("input", function() {
      const termo = this.value.toLowerCase();
      const filtradas = autoras.filter(autora => 
        autora.titulo.toLowerCase().includes(termo)
      );
      exibirAutoras(filtradas);
    });
    
    // Filtro Avançado por Categoria
    const filtroBtns = document.querySelectorAll(".filtro-btn");
    filtroBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        filtroBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        const categoria = this.getAttribute("data-category");
        if (categoria === "todas") {
          exibirAutoras(autoras);
        } else {
          const filtradas = autoras.filter(autora => autora.categoria === categoria);
          exibirAutoras(filtradas);
        }
      });
    });
  });
  setTimeout(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => el.classList.add("visible"));
  }, 1000);
    