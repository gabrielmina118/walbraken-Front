const acessoriesApi = [
    {
        id: 1,
        imagem: "../img/imagem5.png",
        titulo: "Teclados",
        tipo: "teclados",
        descricao: "Uma ótima oferta de semi-novo..",
    },
    {
        id: 2,
        imagem: "../img/imagem5.png",
        titulo: "Teclados",
        tipo: "mouse",
        descricao: "Uma ótima oferta de semi-novo..",
    },
    {
        id: 3,
        imagem: "../img/imagem5.png",
        titulo: "Teclados",
        tipo: "foneDeOuvido",
        descricao: "Uma ótima oferta de semi-novo..",
    },
    {
        id: 4,
        imagem: "../img/imagem5.png",
        titulo: "Teclados",
        tipo: "teclados",
        descricao: "Uma ótima oferta de semi-novo..",
    },
];

function filterAcessories(type, button) {
    const acessoriesFilter = acessoriesApi.filter((acessorie) => {
        return acessorie.tipo === type;
    });

    renderAcessories(acessoriesFilter);
    renderFitlerButton(button);
}

function renderAcessories(acessories) {
    const accessoryMain = document.getElementById("acessories-cards");
    accessoryMain.innerHTML = "";

    acessories.forEach((acessory) => {
        const newElement = document.createElement("div");
        newElement.classList.add("card");
        newElement.innerHTML = `
            <img src="${acessory.imagem}" alt="${acessory.titulo}" />
            <div class="card_body">
                <h6 class="card_title">${acessory.titulo}</h6>
                <p class="card_text">${acessory.descricao}</p>
            </div>
        `;
        accessoryMain.appendChild(newElement);
    });
}

// A primeira vez que aparecer na tela
renderAcessories(acessoriesApi);

function showAllAcessories(button) {
    renderAcessories(acessoriesApi);
    renderFitlerButton(button);
}

function renderFitlerButton(buttonSelect) {
    const allButtons = document.querySelectorAll("#button-acessory");
    allButtons.forEach((button) => {
        if (button === buttonSelect) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
