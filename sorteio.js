const trechos = [
    {
        texto: "Amizade e Virtude: \"Depois do que dissemos segue-se naturalmente uma discussão da amizade, visto que ela é uma virtude ou implica virtude, sendo, além disso, sumamente necessária à vida.\"",
        explicacao: "Aristóteles afirma que a amizade não é apenas uma qualidade desejável, mas uma virtude essencial, fundamental para a existência humana e para a prática de uma vida ética e moral."
    },
    {
        texto: "A Necessidade da Amizade: \"Porque sem amigos ninguém escolheria viver, ainda que possuísse todos os outros bens.\"",
        explicacao: "Aqui, o filósofo enfatiza a importância da amizade, argumentando que, independentemente das riquezas ou posses, a vida é desprovida de valor sem a companhia de amigos."
    },
    {
        texto: "Amizade e Prosperidade: \"A amizade também ajuda os jovens a afastar-se do erro, e aos mais velhos, atendendo-lhes às necessidades.\"",
        explicacao: "Aristóteles sugere que a amizade oferece orientação e suporte em diferentes fases da vida, ajudando os jovens a evitarem más escolhas e os mais velhos a satisfazerem suas necessidades."
    },
    {
        texto: "A Amizade na Pobreza: \"Na pobreza e nos demais infortúnios os homens pensam que os amigos são o seu único refúgio.\"",
        explicacao: "O autor ressalta que, em tempos difíceis, a amizade se torna um pilar de apoio emocional e material, proporcionando conforto e segurança."
    },
    {
        texto: "A Amizade e os Estados: \"A amizade também parece manter unidos os Estados, e dir-se-ia que os legisladores têm mais amor à amizade do que à justiça.\"",
        explicacao: "Aristóteles argumenta que a amizade é fundamental para a coesão social e política, sugerindo que legisladores devem priorizar a amizade entre cidadãos para garantir a estabilidade do Estado."
    },
    {
        texto: "Amizade e Justiça: \"Quando os homens são amigos não necessitam de justiça, ao passo que os justos necessitam também da amizade.\"",
        explicacao: "Ele sugere que a verdadeira amizade transcende a necessidade de regras formais de justiça, enquanto a justiça pode ser incompleta sem amizade."
    },
    {
        texto: "A Amizade é Nobre: \"Ora, não é ela, contudo, apenas necessária, mas também nobre, porquanto louvamos os que amam os seus amigos.\"",
        explicacao: "Aristóteles elogia a amizade não apenas pela sua utilidade, mas também pela sua nobreza, enfatizando a virtude de amar os amigos."
    },
    {
        texto: "A Amizade por Afinidade: \"Alguns a definem como uma espécie de afinidade e dizem que as pessoas semelhantes são amigas.\"",
        explicacao: "Este trecho explora a ideia de que a amizade pode surgir da afinidade, onde pessoas com características ou valores semelhantes tendem a se unir."
    },
    {
        texto: "O Amor e a Amizade: \"Os homens amam, então, o que é bom em si ou o que é bom para eles?\"",
        explicacao: "Aristóteles propõe a reflexão sobre a natureza do amor e da amizade, questionando se elas são baseadas no que é intrinsecamente bom ou no que é percebido como benéfico para o indivíduo."
    },
    {
        texto: "As Espécies de Amizade: \"Ora, há, assim, três espécies de amizade, iguais em número às coisas que são estimáveis.\"",
        explicacao: "Ele categoriza a amizade em três tipos, que refletem diferentes motivações e benefícios que as pessoas buscam nas relações interpessoais."
    },
    {
        texto: "A Amizade por Utilidade: \"Os que se amam por causa da utilidade não se amam por si mesmos, mas em virtude de algum bem que recebem um do outro.\"",
        explicacao: "Aristóteles identifica uma forma de amizade baseada na utilidade, onde a relação é fundamentada em benefícios mútuos, não em um amor genuíno."
    },
    {
        texto: "Amizade e Prazer: \"Idêntica coisa se pode dizer dos que se amam por causa do prazer; não é devido ao caráter que os homens amam as pessoas espirituosas.\"",
        explicacao: "Este trecho destaca que amizades motivadas pelo prazer podem ser superficiais, já que não se baseiam no caráter, mas sim nas qualidades agradáveis do outro."
    },
    {
        texto: "A Amizade dos Bons: \"A amizade perfeita é a dos homens que são bons e afins na virtude.\"",
        explicacao: "Aristóteles acredita que a amizade ideal é aquela entre pessoas virtuosas, que se desejam o bem mutuamente pela bondade de seus caracteres."
    },
    {
        texto: "A Amizade e a Dureza: \"A amizade que visa ao prazer tem certa parecença com esta espécie, porquanto as pessoas boas são de fato agradáveis umas às outras.\"",
        explicacao: "Ele sugere que mesmo amizades baseadas no prazer podem ter qualidades positivas, especialmente quando se trata de pessoas virtuosas que se tornam agradáveis umas para as outras."
    },
    {
        texto: "A Amizade e a Troca: \"Entre essas amizades alguns classificam também a que se observa entre hospedeiro e hóspede.\"",
        explicacao: "Este trecho menciona a amizade que se estabelece em relações de troca, como entre anfitriões e convidados, mostrando como diferentes contextos podem gerar amizade."
    },
    {
        texto: "A Fragilidade das Amizades: \"Ora, o útil não é permanente, mas muda constantemente.\"",
        explicacao: "Aristóteles aponta a natureza volúvel da amizade baseada na utilidade, que pode se desfazer quando os interesses mudam."
    },
    {
        texto: "A Amizade e a Moralidade: \"Os que não tardam a mostrar mutuamente sinais de amizade desejam ser amigos, mas não o são a menos que ambos sejam estimáveis.\"",
        explicacao: "Ele destaca que para a amizade ser verdadeira, ambas as partes devem ser virtuosas e dignas de amizade, evitando relações superficiais."
    },
    {
        texto: "A Natureza da Amizade: \"A amizade é, pois, a dos bons, como tantas vezes dissemos.\"",
        explicacao: "Reforçando a ideia de que a amizade autêntica está enraizada na bondade, Aristóteles sustenta que a virtude é fundamental para a amizade."
    },
    {
        texto: "A Amizade e a Identidade: \"O que é bom ou agradável no sentido absoluto do termo parece estimável e desejável.\"",
        explicacao: "Aqui, o filósofo reflete sobre a busca do ser humano pelo que é bom e agradável, o que, por sua vez, fundamenta as relações de amizade."
    },
    {
        texto: "O Amor e a Amizade Mútua: \"Os amigos desejam bem a seus amigos por eles mesmos, não por efeito de um sentimento.\"",
        explicacao: "Aristóteles defende que a amizade verdadeira é aquela em que se deseja o bem do amigo independentemente de qualquer interesse próprio."
    },
    {
        texto: "A Importância da Presença: \"Nem os velhos, nem as pessoas acrimoniosas parecem fazer amigos com facilidade.\"",
        explicacao: "O autor sugere que a personalidade e a disposição emocional de uma pessoa podem influenciar a formação de amizades."
    },
    {
        texto: "A Amizade e a Vulnerabilidade: \"Nada é mais característico dos amigos do que o convívio.\"",
        explicacao: "Aristóteles enfatiza a importância do convívio como um elemento essencial na construção e manutenção das amizades."
    },
    {
        texto: "O Valor da Amizade: \"Seja como for, as amizades supramencionadas envolvem igualdade.\"",
        explicacao: "Ele argumenta que a igualdade nas amizades é vital para sua durabilidade e qualidade, sugerindo que relações desiguais podem ser problemáticas."
    },
    {
        texto: "Amizade e Gratidão: \"Em todas as amizades que envolvem desigualdade, o amor também deve ser proporcional.\"",
        explicacao: "Este trecho sugere que, em amizades assimétricas, é importante que a relação de gratidão e benefícios seja justa e proporcional."
    },
    {
        texto: "A Amizade e a Justiça: \"A amizade implica uma certa forma de justiça.\"",
        explicacao: "Aristóteles argumenta que a amizade e a justiça estão interligadas, já que ambas dependem de relações justas e equitativas."
    },
    {
        texto: "A Amizade e o Convívio: \"Se um homem não pode sentir dor e prazer ao mesmo tempo, pelo menos ao cabo de alguns instantes sofre porque sentiu prazer.\"",
        explicacao: "Este trecho reflete sobre a complexidade das emoções na amizade, mostrando como a presença do amigo pode atenuar a dor."
    },
    {
        texto: "A Alegria da Amizade: \"O que é bom por natureza, como dissemos, é, para o homem virtuoso, bom e agradável em si mesmo.\"",
        explicacao: "Aristóteles destaca que a amizade é uma das formas mais puras de felicidade, sendo fundamental para o ser humano."
    },
    {
        texto: "A Amizade e a Comunidade: \"Em suma, a amizade é um elemento fundamental da vida em comunidade.\"",
        explicacao: "Este trecho sugere que a amizade é vital para a coesão social e para o funcionamento harmonioso da vida comunitária."
    },
    {
        texto: "A Contribuição da Amizade: \"A amizade é uma forma de justiça, pois envolve o desejo mútuo de fazer o bem.\"",
        explicacao: "Aqui, Aristóteles apresenta a amizade como uma expressão de justiça, onde o bem-estar mútuo é o foco central."
    },
    {
        texto: "A Preservação da Amizade: \"É natural que a amizade mantenha unidos os Estados.\"",
        explicacao: "Ele conclui que a amizade é essencial não apenas no nível individual, mas também na manutenção da unidade e estabilidade dos Estados."
    },
];

document.getElementById('sortearBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * trechos.length);
    document.getElementById('trecho').innerText = trechos[randomIndex].texto  + " - Aristóteles, 1992";
    document.getElementById('explicacao').innerText = trechos[randomIndex].explicacao;
});
