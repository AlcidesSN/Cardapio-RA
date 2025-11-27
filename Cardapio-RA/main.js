/********************************************
 * LISTA DINÂMICA DOS PRATOS DO RESTAURANTE *
 ********************************************/
const menuItems = [
    {
        categoria: "Pratos Principais",
        nome: "Frango Assado com Ervas",
        preco: 54,
        descricao: "Frango que não é piru.",
        modelo3D: "./modelos/Roasted_Thanksgiving_Turkey_Prop_t.glb"
    },
    {
        categoria: "Sobremesas",
        nome: "Torta de Limão",
        preco: 22,
        descricao: "Torta com pêssegos frescos.",
        modelo3D: "./modelos/Torta_de_LIMao_1127113355_texture.glb"
    },
    {
        categoria: "Bebidas",
        nome: "Chá Gelado de Pêssego",
        preco: 12,
        descricao: "Cha gelado.",
        modelo3D: "./modelos/tea.glb"
    },
    {
        categoria: "Entradas",
        nome: "Lich Monarch",
        preco: 0,
        descricao: "Morto vivo muito poderoso.",
        modelo3D: "./modelos/Dark_Lich_Monarch_1001225807_texture.glb"
    },
    {
        categoria: "Entradas",
        nome: "Mini Sanduíches",
        preco: 0,
        descricao: "Mini sanduíches variados.",
        modelo3D: "./modelos/Mini_Sandubinhas_1127115924_texture.glb"
    },
    {
        categoria: "Pratos Principais",
        nome: "PF de Bacon",
        preco: 0,
        descricao: "Prato feito com bacon.",
        modelo3D: "./modelos/pratofeitobacon.glb"
    },
    {
        categoria: "Sobremesas",
        nome: "Fondue de sorvete",
        preco: 0,
        descricao: "3 Brownie e uma bola de sorvete de creme.",
        modelo3D: "./modelos/Fondue_de_Sorvete_1127114003_texture.glb"
    },
        {
        categoria: "Sobremesas",
        nome: "Pudim",
        preco: 0,
        descricao: "Pudim de leite.",
        modelo3D: "./modelos/Pudim_1127112653_texture.glb"
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
                            <button class="view-btn" onclick="carregarModelo('${item.modelo3D}')">👁️</button>
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
function carregarModelo(caminho) {
    console.log("Carregando modelo:", caminho);
    const marker = document.querySelector("a-marker");
    const antigo = document.getElementById("model");

    // Remove o modelo antigo
    if (antigo) antigo.remove();

    // Cria o novo modelo DENTRO DO MARKER
    const novo = document.createElement("a-entity");
    novo.setAttribute("id", "model");
    novo.setAttribute("gltf-model", caminho);

    // Ajustes para evitar câmera preta
    novo.setAttribute("scale", "1 1 1");
    novo.setAttribute("rotation", "-360 0 0");
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
const scaleBtn = document.getElementById('scaleBtn');

let currentScale = 1;

menuBtn.onclick = () => { sidebar.classList.add('open'); menuBtn.classList.add('hidden'); };
closeBtn.onclick = () => { sidebar.classList.remove('open'); menuBtn.classList.remove('hidden'); };

scaleBtn.onclick = () => {
    currentScale += 0.5;
    if (currentScale > 5) currentScale = 1;
    model.setAttribute('scale', `${currentScale} ${currentScale} ${currentScale}`);
};