const trechos = [
    {
        texto: "Depois do que dissemos segue-se naturalmente uma discussão da amizade, visto que ela é uma virtude ou implica virtude, sendo, além disso, sumamente necessária à vida.",
        explicacao: "Aqui, Aristóteles destaca a importância da amizade como uma virtude essencial para a vida, fundamental para o bem-estar humano."
    },
    // ... (adicionar os outros 29 trechos e explicações aqui)
];

document.getElementById('sortearBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * trechos.length);
    document.getElementById('trecho').innerText = trechos[randomIndex].texto;
    document.getElementById('explicacao').innerText = trechos[randomIndex].explicacao;
});
