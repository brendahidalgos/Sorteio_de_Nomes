let nomesDisponiveis = [];

const textarea = document.getElementById('nomes');
const btnSortear = document.getElementById('btnSortear');
const btnLimpar = document.getElementById('btnLimpar');
const resultado = document.getElementById('resultado');

btnSortear.addEventListener('click', () => {
  // Inicializa lista se estiver vazia
  if (nomesDisponiveis.length === 0) {
    const input = textarea.value.trim();
    if (!input) {
      alert('Por favor, insira ao menos um nome.');
      return;
    }

    nomesDisponiveis = input
      .split('\n')
      .map(nome => nome.trim())
      .filter(nome => nome.length > 0);

    if (nomesDisponiveis.length === 0) {
      alert('Por favor, insira ao menos um nome válido.');
      return;
    }
  }

  // Sorteia um índice aleatório e remove o nome sorteado
  const indice = Math.floor(Math.random() * nomesDisponiveis.length);
  const vencedor = nomesDisponiveis.splice(indice, 1)[0];

  resultado.textContent = `🎉 O escolhido da vez é: ${vencedor}!🍀`;

  if (nomesDisponiveis.length === 0) {
    resultado.textContent += '\n\nUfa! Todos já foram sorteados! 👏👏';
    btnSortear.disabled = true;
  } else {
    setTimeout(() => {
      resultado.textContent += '\n\nE aí, quem será o próximo? 😎';
    }, 1500);
  }
});

btnLimpar.addEventListener('click', () => {
  textarea.value = '';
  resultado.textContent = '';
  nomesDisponiveis = [];
  btnSortear.disabled = false;
});
