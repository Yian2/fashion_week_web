// cercador
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-bar");
  const menuLinks = document.querySelectorAll(".main-menu a");

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.toLowerCase().trim();
      let found = false;

      menuLinks.forEach((link) => {
        const sectionName = link.textContent.toLowerCase();
        if (sectionName.includes(query)) {
          found = true;
          const href = link.getAttribute("href");
          window.location.hash = href; // Canvia l'URL a l'enllaç de la secció
        }
      });

      if (!found) {
        alert("No s'ha trobat cap secció.");
      }
    }
  });
});














//TENDENCIES

document.addEventListener('DOMContentLoaded', () => {
  // Seleccionem totes les imatges de les galeries
  const allImages = document.querySelectorAll('.rectangle-gallery .conntingut img');

  // Afegim efecte de transició al passar el ratolí per sobre
  allImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.5s ease-in-out';
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });

    // Ampliar la imatge al fer clic (lightbox)
    img.addEventListener('click', () => {
      // Crear overlay
      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.style.position = 'fixed';
      lightboxOverlay.style.top = '0';
      lightboxOverlay.style.left = '0';
      lightboxOverlay.style.width = '100vw';
      lightboxOverlay.style.height = '100vh';
      lightboxOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      lightboxOverlay.style.display = 'flex';
      lightboxOverlay.style.justifyContent = 'center';
      lightboxOverlay.style.alignItems = 'center';
      lightboxOverlay.style.zIndex = '1000';

      // Crear imatge ampliada
      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.style.maxWidth = '90%';
      enlargedImg.style.maxHeight = '90%';
      enlargedImg.style.borderRadius = '10px';
      enlargedImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';

      lightboxOverlay.appendChild(enlargedImg);
      document.body.appendChild(lightboxOverlay);

      // Tancar el lightbox en fer clic fora de la imatge
      lightboxOverlay.addEventListener('click', () => {
        document.body.removeChild(lightboxOverlay);
      });
    });
  });

  // Efecte de scroll horitzontal
  const galleries = document.querySelectorAll('.rectangle-gallery');
  galleries.forEach((gallery) => {
    gallery.style.overflowX = 'auto'; // Permetre l'scroll horitzontal
    gallery.style.display = 'flex'; // Disposar els elements en línia

    // Afegir scroll suau amb les tecles (opcional)
    gallery.addEventListener('wheel', (event) => {
      event.preventDefault();
      gallery.scrollBy({ left: event.deltaY * 2, behavior: 'smooth' });
    });
  });
});














//CIUTATS CLAU
// Afegim un event listener a totes les imatges dins de la galeria
document.querySelectorAll('.galeria a').forEach((enllaç) => {
  enllaç.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el clic redirigeixi l'usuari
    const imgSrc = enllaç.querySelector('img').src;

    // Crear un contenidor per al zoom
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Crear la imatge amb zoom
    const zoomImg = document.createElement('img');
    zoomImg.src = imgSrc;
    zoomImg.style.maxWidth = '90%';
    zoomImg.style.maxHeight = '90%';
    zoomImg.style.borderRadius = '10px';
    zoomImg.style.boxShadow = '0 0 20px rgba(246, 187, 223, 0.8)';

    overlay.appendChild(zoomImg);
    document.body.appendChild(overlay);

    // Tancar quan es fa clic fora de la imatge
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});











//CARRUSEL

window.onload = function () {
  // Seleccionem totes les imatges del carrusel
  const imatges = document.querySelectorAll('.carousel img');
  let imgAct = 0; // Índex de la imatge actual

  // Botons de navegació
  const botoPrev = document.getElementById("botoPrev");
  const botoNext = document.getElementById("botoNext");

  // Funció per actualitzar la imatge visible
  function mostraImatge(index) {
    imatges.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none'; // Només mostra la imatge actual
    });
  }

  // Mostrem la primera imatge al carregar
  mostraImatge(imgAct);

  // Navegació a la imatge anterior
  botoPrev.addEventListener("click", function (e) {
    e.preventDefault();
    imgAct = imgAct > 0 ? imgAct - 1 : imatges.length - 1; // Si és la primera, torna a l'última
    mostraImatge(imgAct);
  });

  // Navegació a la imatge següent
  botoNext.addEventListener("click", function (e) {
    e.preventDefault();
    imgAct = imgAct < imatges.length - 1 ? imgAct + 1 : 0; // Si és l'última, torna a la primera
    mostraImatge(imgAct);
  });
};
