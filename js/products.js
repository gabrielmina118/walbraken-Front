const produtosApi = [
    {
        id: 1,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "seminovo",
        descricao: "descriçao 1",
    },
    {
        id: 2,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "seminovo",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 3,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "seminovo",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 4,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "seminovo",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 5,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "pcgamer",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 6,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "pcgamer",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 7,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "nootbook",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 8,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "nootbook",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
    {
        id: 9,
        imagem: "../img/imagem5.png",
        titulo: "Faça já seu orçamento!",
        tipo: "pcgamer",
        descricao:
            "Aceitamos todas as bandeiras. Compre o seu PC agora mesmo pelo nosso atendimento via Inbox, Whatsapp ou por telefone. Tel. (12)3633-5794/ Whatsapp (12) 99127-0838",
    },
];

function filterProducts(type, botao) {
    const arrayFiltrado = produtosApi.filter((produto) => {
        return produto.tipo === type;
    });

    renderizaProdutos(arrayFiltrado);
    renderizaBotaoFiltro(botao);
}

function renderizaProdutos(produtos) {
    const produtoMain = document.getElementById("filterProducts");
    produtoMain.innerHTML = "";

    produtos.forEach((produto) => {
        const novoElemento = document.createElement("div");
        novoElemento.classList.add("card");
        novoElemento.innerHTML = `
            <img src="${produto.imagem}" alt="semi-novos" />
            <div class="card_body">
                <h6 class="card_title">${produto.titulo}</h6>
                <p class="card_text">${produto.descricao}</p>
            </div>
        `;
        produtoMain.appendChild(novoElemento);
    });
}

// A primeira vez que aparecer na tela
renderizaProdutos(produtosApi);

function mostrarTodos(botao) {
    renderizaProdutos(produtosApi);
    renderizaBotaoFiltro(botao);
}

function renderizaBotaoFiltro(buttonSelect) {
    const allButtons = document.querySelectorAll("#button-filter");
    allButtons.forEach((button) => {
        if (button === buttonSelect) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
