// Obtém o formulário e adiciona um evento para o envio
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;

    // Verifica se todos os campos estão preenchidos
    if (name && email && phone && address) {
        // Exibe uma mensagem de sucesso
        document.getElementById('message').textContent = 'Contato adicionado com sucesso!';
        
        // Aqui você pode adicionar lógica para armazenar o contato

        // Limpa o formulário
        document.getElementById('contact-form').reset();
    } else {
        // Exibe uma mensagem de erro
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});