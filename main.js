/********************************************
 * LISTA DINÂMICA DOS PRATOS DO RESTAURANTE *
 ********************************************/
const menuItems = [
    {
        categoria: "Pratos Principais",
        nome: "Frango Assado com Ervas",
        preco: 54,
        descricao: "Frango que não é piru.",
        modelo3D: "./modelos/Roasted_Thanksgiving_Turkey_Prop_t.glb",
        scala: "3 3 3"
    },
    {
        categoria: "Sobremesas",
        nome: "Torta de Pessego",
        preco: 22,
        descricao: "Torta com pêssegos frescos.",
        modelo3D: "./modelos/pumpkin_texture.glb",
        scala: "7 7 7"
    },
    {
        categoria: "Bebidas",
        nome: "Chá Gelado de Pêssego",
        preco: 12,
        descricao: "Cha gelado.",
        modelo3D: "./modelos/tea.glb",
        scala: "0.4 0.4 0.4"
    },
    {
        categoria: "Entradas",
        nome: "Lich Monarch",
        preco: 0,
        descricao: "Morto vivo muito poderoso.",
        modelo3D: "./modelos/Dark_Lich_Monarch_1001225807_texture.glb",
        scala: "1 1 1"
    },
    {
        categoria: "Entradas",
        nome: "Mini Sanduíches",
        preco: 0,
        descricao: "Mini sanduíches variados.",
        modelo3D: "./modelos/sandwiches_pack.glb",
        scala: "7 7 7"
    },
    {
        categoria: "Pratos Principais",
        nome: "PF de Bacon",
        preco: 0,
        descricao: "Prato feito com bacon.",
        modelo3D: "./modelos/pratofeitobacon.glb",
        scala: "1 1 1"
    },
    {
        categoria: "Sobremesas",
        nome: "Brownies com sorvete",
        preco: 0,
        descricao: "3 Brownie e uma bola de sorvete de creme.",
        modelo3D: "./modelos/plate_of_brownies.glb",
        scala: "150 150 150"
    },
        {
        categoria: "Sobremesas",
        nome: "Pudim",
        preco: 0,
        descricao: "Pudim de leite.",
        modelo3D: "./modelos/typical_brazilian_glass_plate_free.glb", //sem textura
        scala: "3 3 3"
    },

];


/********************************************
 * GERAR HTML DO CARDÁPIO AUTOMATICAMENTE   *
 ********************************************/
const menuContainer = document.getElementById("menuContainer");

function gerarMenu() {
    const categorias = {};

    // Agrupa por categoria
    menuItems.forEach(item => {
        if (!categorias[item.categoria]) categorias[item.categoria] = [];
        categorias[item.categoria].push(item);
    });

    // Monta HTML
    for (const categoria in categorias) {
        const section = document.createElement("div");
        section.className = "menu-section";

        section.innerHTML = `
                    <h2 class="section-title">${categoria}</h2>
                `;

        categorias[categoria].forEach(item => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.innerHTML = `
                        <div class="item-header">
                            <div class="item-name">${item.nome}</div>
                            <button class="view-btn" onclick="carregarModelo('${item.modelo3D}', '${item.scala}')">👁️</button>
                        </div>
                        <div class="item-description">${item.descricao}</div>
                        <div class="item-price">R$ ${item.preco},00</div>
                    `;
            section.appendChild(div);
        });

        menuContainer.appendChild(section);
    }
}

gerarMenu();


/********************************************
 * ALTERAR MODELO 3D DINAMICAMENTE          *
 ********************************************/
function carregarModelo(caminho, scala) {
    console.log("Carregando modelo:", caminho);
    const marker = document.querySelector("a-marker");
    const antigo = document.getElementById("model");

    // Remove o modelo antigo
    if (antigo) antigo.remove();

    const novo = document.createElement("a-entity");
    novo.setAttribute("id", "model");
    novo.setAttribute("gltf-model", caminho);

    novo.setAttribute("scale", scala);
    novo.setAttribute("rotation", "-90 0 0");
    novo.setAttribute("position", "0 0 0");

    marker.appendChild(novo);
    sidebar.classList.remove('open'); menuBtn.classList.remove('hidden');
}

function uploadModelo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.glb,.gltf';
    input.onchange = e => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        carregarModelo(url);
    };
    input.click();


}





/********************************************
 * LATERAL E ESCALA                         *
 ********************************************/
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const btnEsq = document.getElementById("rodarEsq");
const btnDir = document.getElementById("rodarDir");
const btnCima = document.getElementById("rodarCima");
const btnBaixo = document.getElementById("rodarBaixo");
const btnMais = document.getElementById("scaleMais");
const btnMenos = document.getElementById("scaleMenos");

function getModel() {
    return document.getElementById("model");
}

btnEsq.onclick = () => {
    const m = getModel();
    let r = m.getAttribute("rotation");
    r.y -= 10;
    m.setAttribute("rotation", `${r.x} ${r.y} ${r.z}`);
};

btnDir.onclick = () => {
    const m = getModel();
    let r = m.getAttribute("rotation");
    r.y += 10;
    m.setAttribute("rotation", `${r.x} ${r.y} ${r.z}`);
};

btnCima.onclick = () => {
    const m = getModel();
    let r = m.getAttribute("rotation");
    r.x -= 10;
    m.setAttribute("rotation", `${r.x} ${r.y} ${r.z}`);
};

btnBaixo.onclick = () => {
    const m = getModel();
    let r = m.getAttribute("rotation");
    r.x += 10;
    m.setAttribute("rotation", `${r.x} ${r.y} ${r.z}`);
};

let scale = 1;

btnMais.onclick = () => {
    const m = getModel();
    scale += 0.1;
    m.setAttribute("scale", `${scale} ${scale} ${scale}`);
};

btnMenos.onclick = () => {
    const m = getModel();
    if (scale > 0.1) scale -= 0.1;
    m.setAttribute("scale", `${scale} ${scale} ${scale}`);
};

menuBtn.onclick = () => { sidebar.classList.add('open'); menuBtn.classList.add('hidden'); };
closeBtn.onclick = () => { sidebar.classList.remove('open'); menuBtn.classList.remove('hidden'); };
