document.getElementById('relatoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const relato = document.getElementById('relato').value;
    const mensagemDiv = document.getElementById('mensagem');
    const listaRelatos = document.getElementById('listaRelatos');

    if (nome && relato) {
        // Envio do email
        emailjs.send('service_hjsh3mx', 'template_pip1hj4', {
            from_name: nome,
            message: relato
        })
        .then(() => {
            // Cria um novo item de lista
            const li = document.createElement('li');
            li.textContent = `${nome}: ${relato}`;
            listaRelatos.appendChild(li);

            // Limpa o formulário
            document.getElementById('relatoForm').reset();
            mensagemDiv.textContent = "Seu relato foi enviado com sucesso!";
        })
        .catch((error) => {
            mensagemDiv.textContent = "Erro ao enviar relato: " + error.message;
        });
    } else {
        mensagemDiv.textContent = "Por favor, preencha todos os campos.";
    }
});
