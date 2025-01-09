// cercador
(function() {
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

    //Img en zoom 
    const zoomImg = document.createElement('img');
    zoomImg.src = imgSrc;
    zoomImg.style.maxWidth = '90%';
    zoomImg.style.maxHeight = '90%';
    zoomImg.style.borderRadius = '10px';
    zoomImg.style.boxShadow = '0 0 20px rgba(246, 187, 223, 0.8)';

    overlay.appendChild(zoomImg);
    document.body.appendChild(overlay);

    // Tancar quan es fa clic fora de la ft
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});











//CARRUSEL

window.onload = function () {
  // totes les fts
  const imatges = document.querySelectorAll('.carousel img');
  let imgAct = 0; //ft actual

  // Botons de navegació
  const botoPrev = document.getElementById("botoPrev");
  const botoNext = document.getElementById("botoNext");

  // Funció per actualitzar la imatge visible
  function mostraImatge(index) {
    imatges.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none'; // Només mostra la imatge actual
    });
  }

  // cridar la img 
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
