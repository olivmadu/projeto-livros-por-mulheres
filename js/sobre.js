document.addEventListener("DOMContentLoaded", function() {
  // Aplica efeito fade-in aos elementos com a classe .fade-in
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeElements.forEach(el => observer.observe(el));

  // Alterna a exibição do conteúdo dos grupos ao clicar no marcador
  const centuryMarkers = document.querySelectorAll('.century-marker');
  centuryMarkers.forEach(marker => {
    marker.addEventListener('click', function() {
      // O pai (timeline-century) alterna a classe active
      this.parentElement.classList.toggle('active');
    });
  });
});