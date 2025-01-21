function showCard(cardId) {
  // 1. Mettre à jour l'état actif sur les onglets
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active'); // Retirer l'état actif de tous les boutons
  });

  // Trouver le bouton associé et lui ajouter la classe active
  const activeButton = document.querySelector(`nav button[onclick="showCard('${cardId}')"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // 2. Masquer toutes les cartes
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
    card.classList.add('hidden');
  });

  // 3. Afficher la carte sélectionnée
  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.classList.add('active');
    selectedCard.classList.remove('hidden');
  }
}

let currentIndex = 0; // Index du sujet actuel

function afficherSujet() {
  // Récupérer le sujet actuel
  const sujet = sujets[currentIndex];
  // Mettre à jour le titre du sujet
  document.querySelector("#current-sujet h2").textContent = sujet.sujet;
}

function changerSujet() {
  // Passer au sujet suivant
  currentIndex = (currentIndex + 1) % sujets.length; // Boucle sur les sujets
  afficherSujet(); // Mettre à jour l'affichage
}

// Initialiser le premier sujet au chargement
document.addEventListener("DOMContentLoaded", afficherSujet);

