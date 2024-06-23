const btnCopiarEmail = document.getElementById('copiarEmail');
const emailParaCopiar = 'emailxxx@gmail.com'; // Substitua por seu e-mail

btnCopiarEmail.addEventListener('click', () => {
  navigator.clipboard.writeText(emailParaCopiar)
    .then(() => {
      console.log('E-mail copiado para a área de transferência!');
    })
    .catch(err => {
      console.error('Falha ao copiar e-mail:', err);
      alert('Erro ao copiar e-mail. Tente novamente.');
    });
});