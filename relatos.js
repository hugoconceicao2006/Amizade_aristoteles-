// Importando as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyANMRszkbpUMuptbGF8uMyuK6BUju1OETk",
    authDomain: "site-aristoteles.firebaseapp.com",
    projectId: "site-aristoteles",
    storageBucket: "site-aristoteles.appspot.com",
    messagingSenderId: "375807803442",
    appId: "1:375807803442:web:1a45f4327cab4cbf47fc2b",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Envio de dados
document.getElementById('relatoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const relato = document.getElementById('relato').value;
    const mensagemDiv = document.getElementById('mensagem');
    const listaRelatos = document.getElementById('listaRelatos');

    if (nome && relato) {
        // Salva o relato no Firebase
        const novosRelatosRef = ref(database, 'relatos/' + Date.now()); // Usa um timestamp como ID
        set(novosRelatosRef, {
            nome: nome,
            relato: relato
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

// Função para carregar relatos
function carregarRelatos() {
    const relatosRef = ref(database, 'relatos/');
    onValue(relatosRef, (snapshot) => {
        const listaRelatos = document.getElementById('listaRelatos');
        listaRelatos.innerHTML = ''; // Limpa a lista antes de adicionar os novos relatos
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            const li = document.createElement('li');
            li.innerText = `${data.nome}: ${data.relato}`;
            listaRelatos.appendChild(li);
        });
    });
}

// Carregar relatos quando a página for carregada
window.onload = carregarRelatos;
