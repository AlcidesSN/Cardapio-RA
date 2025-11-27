
---

# 📘 Sistema de Cardápio Interativo em Realidade Aumentada (AR)

Este projeto apresenta um **sistema de visualização de cardápio em Realidade Aumentada**, desenvolvido com **A-Frame** e **AR.js** e projetado para demonstrações, apresentações acadêmicas e aplicações em ambientes de inovação. A solução permite que o usuário visualize modelos 3D de pratos ao apontar a câmera para um marcador AR, além de interagir com o cardápio por meio de uma interface lateral dinâmica.

---

## 📂 Estrutura Geral do Projeto

O projeto é composto por três arquivos principais, responsáveis pela estrutura, estilo e lógica de funcionamento da aplicação:

---

## **1. `index.html` — Estrutura da Aplicação e Configuração da Cena AR**

Este arquivo define a base da aplicação, integrando os componentes visuais e a cena de Realidade Aumentada.

### **Principais responsabilidades**

* Importar as bibliotecas externas:

  * **A-Frame (renderização 3D)**
  * **AR.js (rastreamento do marcador e AR no navegador)**
* Configurar a cena AR (`<a-scene>`) com:

  * Marcador padrão Hiro (`<a-marker preset="hiro">`)
  * Entidade que recebe e exibe o modelo 3D dinamicamente (`<a-entity id="model">`)
* Declarar os elementos de interface:

  * Botão flutuante para abrir o cardápio
  * Botão para alterar a escala do modelo 3D
  * Sidebar que lista os itens do cardápio
  * Botão para upload de novos modelos GLB/GLTF
* Referenciar o JavaScript principal (`main.js`) e a folha de estilos (`style.css`)

A função central do arquivo é fornecer a infraestrutura que conecta a interface do usuário à visualização AR.

---

## **2. `style.css` — Estilização e Identidade Visual**

O arquivo CSS define a aparência da aplicação, garantindo uma experiência visual clara, moderna e responsiva.

### **Elementos estilizados**

* **Layout da sidebar**: animação de abertura, responsividade e distribuição de conteúdo.
* **Componentização do cardápio**:

  * Títulos de categorias
  * Blocos de itens, com nome, descrição, preço e botão de visualização
* **Botões de interação**:

  * Abertura do cardápio
  * Ajuste de escala do modelo
  * Fechamento da interface
  * Upload de novo modelo
* **Tema visual**:

  * Uso de cores consistentes, com predominância de tons laranja
  * Sombras e transições para melhorar a experiência do usuário
  * Ícones circulares e elementos arredondados

O objetivo é garantir uma interface elegante e adequada para apresentação e demonstração profissional.

---

## **3. `main.js` — Lógica de Funcionamento e Interatividade**

Este arquivo contém toda a lógica do projeto, sendo responsável por conectar o cardápio dinâmico à cena AR.

### **Principais funcionalidades**

#### ✔️ **Geração dinâmica do cardápio**

* Os itens são definidos em um array JSON-like.
* O script agrupa automaticamente por categoria.
* O HTML do cardápio é criado e inserido na interface sem necessidade de edição manual.

#### ✔️ **Carregamento e troca de modelos 3D**

* Sempre que um item é selecionado, o modelo anterior é removido do marcador.
* Um novo `<a-entity>` é inserido com o modelo correspondente.
* Ajusta atributos essenciais para evitar falhas de renderização:

  * `rotation`
  * `scale`
  * `position`

#### ✔️ **Upload de modelos externos**

* Usuário pode carregar arquivos `.glb` e `.gltf` locais.
* O modelo carregado é exibido imediatamente na cena AR.
* O recurso fortalece a extensibilidade do projeto, permitindo demonstrar novos pratos ou objetos.

#### ✔️ **Controles de interface**

* Abertura e fechamento da sidebar.
* Botão para alterar a escala do modelo 3D ciclicamente.
* Controle de visibilidade de botões para evitar sobreposição com a AR.

---

## 🎯 Objetivo e Benefícios do Projeto

O sistema foi concebido como uma **prova de conceito** para soluções de visualização interativa em AR, aplicável a:

* Restaurantes oferecendo visualização imersiva de pratos
* Demonstrações em hackathons e feiras de tecnologia
* Apresentações acadêmicas sobre AR, WebXR ou interfaces interativas
* Prototipagem de sistemas de catálogo 3D (produtos, itens industriais, objetos culturais)

Entre os benefícios deste projeto estão:

* **Modularidade** (dados dos pratos facilmente editáveis)
* **Extensibilidade** (upload de novos modelos 3D)
* **Total funcionamento em navegador**
* **Integração fluida com AR.js**, facilitando futuras expansões

---

## 🚀 Tecnologias Utilizadas

* **HTML5**, **CSS3**, **JavaScript ES6**
* **A-Frame 1.4.2**
* **AR.js 3.4.5**
* Suporte a modelos **GLB/GLTF**

---
