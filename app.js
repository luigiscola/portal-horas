const produtoSelect = document.getElementById("produto");
const edicaoSelect = document.getElementById("edicao");
const resultado = document.getElementById("resultado");
const linkEscopo = document.getElementById("linkEscopo");

if (!Array.isArray(window.dados)) {
  console.error("dados.js não carregou ou não definiu a variável 'dados'.");
  resultado.innerHTML = "Erro: dados não carregaram. Atualize a página (Ctrl+F5) ou contate o suporte.";
  throw new Error("dados undefined");
}

const dados = window.dados;

const BASE_SP = "https://centricbr.sharepoint.com/sites/ti/Shared%20Documents/Escopos/Implantacao/";

// lista produtos únicos
const produtos = [...new Set(dados.map(d => d.produto))].sort();

produtos.forEach(p => {
  const opt = document.createElement("option");
  opt.value = p;
  opt.textContent = p;
  produtoSelect.appendChild(opt);
});

function esconderLink() {
  linkEscopo.style.display = "none";
  linkEscopo.removeAttribute("href");
  linkEscopo.textContent = "";
}

function mostrarLink(caminho) {
  const url = BASE_SP + encodeURIComponent(caminho).replace(/%2F/g, "/");
  linkEscopo.href = url;
  linkEscopo.textContent = "📄 Abrir escopo";
  linkEscopo.style.display = "inline-block";
}

produtoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;

  edicaoSelect.innerHTML = '<option value="">Selecione</option>';
  resultado.innerHTML = "";
  esconderLink();

  if (!produto) {
    edicaoSelect.disabled = true;
    return;
  }

  const edicoes = dados
    .filter(d => d.produto === produto)
    .map(d => d.edicao);

  // edições únicas
  [...new Set(edicoes)].sort().forEach(ed => {
    const opt = document.createElement("option");
    opt.value = ed;
    opt.textContent = ed;
    edicaoSelect.appendChild(opt);
  });

  edicaoSelect.disabled = false;
});

edicaoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;
  const edicao = edicaoSelect.value;

  resultado.innerHTML = "";
  esconderLink();

  const item = dados.find(d => d.produto === produto && d.edicao === edicao);

  if (!item) return;

  resultado.innerHTML = `⏱️ ${item.horas} horas de implantação`;

  if (item.caminho) {
    mostrarLink(item.caminho);
  }
});