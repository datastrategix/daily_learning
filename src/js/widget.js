// Liste des sujets (assurez-vous que ce fichier est bien chargé via data.js)
let currentIndex = 0; // Index du sujet actuel

function afficherSujet() {
  // Vérifie que la liste "sujets" est bien définie
  if (typeof sujets !== "undefined" && sujets.length > 0) {
    const sujet = sujets[currentIndex];
    if (sujet) {
      // Mettre à jour le nom du sujet dans #current-sujet
      document.querySelector("#current-sujet h2").textContent = sujet.sujet;
    } else {
      console.error("Aucun sujet trouvé à l'index actuel.");
    }
  } else {
    console.error("La liste des sujets n'est pas disponible ou est vide.");
  }
}


function changerSujet() {
  // Passer au sujet suivant
  if (typeof sujets !== "undefined" && sujets.length > 0) {
    currentIndex = (currentIndex + 1) % sujets.length; // Boucler sur les sujets
    afficherSujet(); // Mettre à jour l'affichage du sujet

    // Mettre à jour le contenu de la carte active
    const sujet = sujets[currentIndex];
    if (sujet) {
      document.querySelector("#apprentissage p").textContent = sujet.saviezVous; // Mise à jour du contenu de "Apprentissage"
      document.querySelector("#astuces p").textContent = sujet.astuce; // Mise à jour du contenu de "Astuces"
      document.querySelector("#reflexion p").textContent = sujet.reflexion; // Mise à jour du contenu de "Réflexion"
    }
  }
}


function showCard(cardId) {
  // 1. Mettre à jour l'état actif sur les onglets
  document.querySelectorAll("nav button").forEach((button) => {
    button.classList.remove("active"); // Retirer l'état actif de tous les boutons
  });

  // Trouver le bouton associé et lui ajouter la classe active
  const activeButton = document.querySelector(
    `nav button[onclick="showCard('${cardId}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  // 2. Masquer toutes les cartes
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
    card.classList.add("hidden");
  });

  // 3. Afficher la carte sélectionnée
  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.classList.add("active");
    selectedCard.classList.remove("hidden");
  }
}

// Initialiser le premier sujet au chargement
document.addEventListener("DOMContentLoaded", afficherSujet);
