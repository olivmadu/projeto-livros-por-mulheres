document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal-autora");
  const closeModal = document.querySelector(".modal .close");
  
  document.getElementById("lista-autoras").addEventListener("click", function(e) {
    let card = e.target.closest(".card-autora");
    if (card) {
      const titulo = card.querySelector("h2").innerText;
      const descricao = card.getAttribute("data-descricao");
      const link = card.getAttribute("data-link");
      document.getElementById("modal-titulo").innerText = titulo;
      document.getElementById("modal-descricao").innerText = descricao;
      document.getElementById("modal-link").href = link;
      modal.style.display = "flex";
    }
  });
  
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
