document.getElementById('btnSortear').addEventListener('click', () => {
  const input = document.getElementById('nomes').value.trim();
  if (!input) {
    alert('Por favor, insira ao menos um nome.');
    return;
  }
  
  const nomes = input
    .split('\n')
    .map(nome => nome.trim())
    .filter(nome => nome.length > 0);

  if (nomes.length === 0) {
    alert('Por favor, insira ao menos um nome válido.');
    return;
  }

  const indice = Math.floor(Math.random() * nomes.length);
  const vencedor = nomes[indice];

  document.getElementById('resultado').textContent = `🎉 Nome sorteado: ${vencedor}`;
});