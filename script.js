document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const clearButton = document.querySelector('.clear-button');
  const formMessage = document.getElementById('formMessage');

  // Adiciona um "ouvinte" para o evento de submissão do formulário
  form.addEventListener('submit', (e) => {
    // Impede o envio padrão do formulário, que recarrega a página
    e.preventDefault();

    // Pega os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Por favor, preencha todos os campos.';
      formMessage.classList.remove('success');
      formMessage.classList.add('error');
    } else {
      // Se todos os campos estiverem preenchidos, mostre uma mensagem de sucesso
      formMessage.textContent = 'Formulário enviado com sucesso!';
      formMessage.classList.remove('error');
      formMessage.classList.add('success');

      // Limpa o formulário após 2 segundos
      setTimeout(() => {
        form.reset();
        formMessage.textContent = '';
      }, 2000);
    }
  });

  // Adiciona um "ouvinte" para o botão "Limpar"
  clearButton.addEventListener('click', () => {
    form.reset();
    formMessage.textContent = '';
  });
});