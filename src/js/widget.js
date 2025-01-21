let activeCard = "quickFact";

function showCard(cardId) {
  // Masquer toutes les cards
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
    card.classList.add('hidden');
  });

  // Afficher la card sélectionnée
  const selectedCard = document.getElementById(cardId);
  selectedCard.classList.add('active');
  selectedCard.classList.remove('hidden');

  // Mettre à jour l'état actif
  activeCard = cardId;
}
