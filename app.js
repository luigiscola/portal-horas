const produtoSelect = document.getElementById("produto");
const edicaoSelect = document.getElementById("edicao");
const resultado = document.getElementById("resultado");
const linkEscopo = document.getElementById("linkEscopo");

// "Implantação" já URL-encoded  ✅ (faltava aspas no fim)
const BASE_SP = "https://centricbr.sharepoint.com/sites/ti/Shared%20Documents/Escopos/Implantacao/";

// ---------- [NOVO] Função para mostrar/ocultar o aviso com base no href ----------
function atualizarAvisoEscopo() {
  const aviso = document.getElementById("escopoAviso");
  if (!aviso) return; // caso o bloco não esteja no HTML

  const href = (linkEscopo?.getAttribute("href") || "").trim();
  const visivel = linkEscopo && linkEscopo.style.display !== "none";

  // Se não houver caminho OU se o botão estiver oculto → mostra aviso
  if (!href || !visivel) {
    aviso.style.display = "block";
  } else {
    aviso.style.display = "none";
  }
}

// ---------- [NOVO] Observer para reagir a mudanças feitas pelo app.js ----------
const _obs = new MutationObserver(atualizarAvisoEscopo);
_obs.observe(linkEscopo, { attributes: true, attributeFilter: ["href", "style", "class"] });

// valida se dados carregou
if (!Array.isArray(window.dados)) {
  console.error("dados.js não carregou ou não definiu 'window.dados'.");
  if (resultado) {
    resultado.innerHTML = "Erro ao carregar dados. Tente Ctrl+F5 (Windows) / Cmd+Shift+R (Mac).";
  }
  throw new Error("window.dados undefined");
}

const dados = window.dados;

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
  atualizarAvisoEscopo(); // 🔻 [NOVO] garante aviso visível ao esconder
}

function mostrarLink(caminho) {
  const url = BASE_SP + encodeURIComponent(caminho).replace(/%2F/g, "/");
  linkEscopo.href = url;
  linkEscopo.textContent = "📄 Abrir escopo";
  linkEscopo.style.display = "inline-block";
  atualizarAvisoEscopo(); // 🔻 [NOVO] some o aviso quando há caminho
}

produtoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;

  edicaoSelect.innerHTML = '<option value="">Selecione</option>';
  resultado.innerHTML = "";
  esconderLink(); // já chama atualizarAvisoEscopo()

  if (!produto) {
    edicaoSelect.disabled = true;
    return;
  }

  const edicoes = dados
    .filter(d => d.produto === produto)
    .map(d => d.edicao);

  [...new Set(edicoes)].sort().forEach(ed => {
    const opt = document.createElement("option");
    opt.value = ed;
    opt.textContent = ed;
    edicaoSelect.appendChild(opt);
  });

  edicaoSelect.disabled = false;
  // atualizarAvisoEscopo(); // opcional (esconderLink já chamou)
});

edicaoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;
  const edicao = edicaoSelect.value;

  resultado.innerHTML = "";
  esconderLink(); // já chama atualizarAvisoEscopo()

  const item = dados.find(d => d.produto === produto && d.edicao === edicao);
  if (!item) return;

  resultado.innerHTML = `⏱️ ${item.horas} horas de implantação`;

  if (item.caminho) {
    mostrarLink(item.caminho); // já chama atualizarAvisoEscopo()
  }
});

// ---------- [NOVO] chamada inicial para definir estado do aviso ----------
atualizarAvisoEscopo();
``
