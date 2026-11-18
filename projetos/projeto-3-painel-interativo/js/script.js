// Selecionando os elementos da página
const campoNome = document.getElementById("nome");
const campoArea = document.getElementById("area");
const btnGerar = document.getElementById("btnGerar");
const btnTema = document.getElementById("btnTema");
const mensagem = document.getElementById("mensagem");

// Função que gera a orientação personalizada
function gerarOrientacao() {
    // Lendo os valores dos campos (trim tira os espaços do começo e do fim)
    const nome = campoNome.value.trim();
    const area = campoArea.value;

    let texto = "";

    // Validação: nome vazio
    if (nome === "") {
        mensagem.textContent = "Por favor, preencha o campo com o seu nome.";
        mensagem.classList.remove("mensagem-sucesso");
        mensagem.classList.add("mensagem-erro");
        return;
    }

    // Validação: nenhuma área escolhida
    if (area === "") {
        mensagem.textContent = `${nome}, escolha uma área de interesse.`;
        mensagem.classList.remove("mensagem-sucesso");
        mensagem.classList.add("mensagem-erro");
        return;
    }

    // Mensagem diferente para cada área
    switch (area) {
        case "html":
            texto = `Olá, ${nome}! Continue praticando a estrutura das páginas, tags semânticas, formulários e acessibilidade.`;
            break;
        case "css":
            texto = `Olá, ${nome}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade.`;
            break;
        case "javascript":
            texto = `Olá, ${nome}! Continue praticando variáveis, condições, funções e eventos para deixar suas páginas interativas.`;
            break;
    }

    // Mostrando o resultado na página
    mensagem.textContent = texto;
    mensagem.classList.remove("mensagem-erro");
    mensagem.classList.add("mensagem-sucesso");
}

// Função que alterna entre tema claro e escuro
function alterarTema() {
    document.body.classList.toggle("tema-escuro");

    // Muda o texto do botão de acordo com o tema atual
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "Tema claro";
    } else {
        btnTema.textContent = "Tema escuro";
    }
}

// Eventos de clique
btnGerar.addEventListener("click", gerarOrientacao);
btnTema.addEventListener("click", alterarTema);
