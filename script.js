// Função para o Quiz
function calculateResult() {
  const quizForm = document.getElementById('quizForm');
  const formData = new FormData(quizForm);
  let score = {
      virtude: 0,
      prazer: 0,
      utilidade: 0
  };

  formData.forEach((value) => {
      score[value]++;
  });

  let resultText = '';
  if (score.virtude > score.prazer && score.virtude > score.utilidade) {
      resultText = 'Você valoriza amizades por virtude! Estas são baseadas em valores e moralidade.';
  } else if (score.prazer > score.virtude && score.prazer > score.utilidade) {
      resultText = 'Você valoriza amizades por prazer! Você busca diversão e alegria com seus amigos.';
  } else {
      resultText = 'Você valoriza amizades por utilidade! Praticidade e apoio mútuo são essenciais para você.';
  }

  document.getElementById('result').innerHTML = `<h3>Resultado:</h3><p>${resultText}</p>`;
}

// Função para a Simulação
function simulateResult() {
  const simForm = document.getElementById('simulacaoForm');
  const simData = new FormData(simForm);
  let score = {
      virtude: 0,
      prazer: 0,
      utilidade: 0
  };

  simData.forEach((value) => {
      score[value]++;
  });

  let resultText = '';
  if (score.virtude > score.prazer && score.virtude > score.utilidade) {
      resultText = 'Suas escolhas indicam que você valoriza amizades por virtude!';
  } else if (score.prazer > score.virtude && score.prazer > score.utilidade) {
      resultText = 'Suas escolhas indicam que você valoriza amizades por prazer!';
  } else {
      resultText = 'Suas escolhas indicam que você valoriza amizades por utilidade!';
  }

  document.getElementById('simulationResult').innerHTML = `<h3>Resultado da Simulação:</h3><p>${resultText}</p>`;
}

// Função para o Feedback
document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Pega o texto do feedback
  const feedbackText = document.getElementById('feedbackInput').value;
  if (feedbackText.trim() === "") {
      alert("Por favor, insira um relato.");
      return;
  }

  // Cria um novo elemento para o relato
  const feedbackList = document.getElementById('feedbackList');
  const newFeedback = document.createElement('p');
  newFeedback.innerText = feedbackText;

  // Adiciona o novo relato à lista
  feedbackList.appendChild(newFeedback);

  // Limpa o campo de entrada
  document.getElementById('feedbackInput').value = "";

  alert("Obrigado por compartilhar seu relato!");
});
