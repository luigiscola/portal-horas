const produtoSelect = document.getElementById("produto");
const edicaoSelect = document.getElementById("edicao");
const resultado = document.getElementById("resultado");

// lista produtos únicos
const produtos = [...new Set(dados.map(d => d.produto))];

produtos.forEach(p => {
  const opt = document.createElement("option");
  opt.value = p;
  opt.textContent = p;
  produtoSelect.appendChild(opt);
});

produtoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;

  edicaoSelect.innerHTML = '<option value="">Selecione</option>';
  resultado.innerHTML = "";

  if (!produto) {
    edicaoSelect.disabled = true;
    return;
  }

  const edicoes = dados.filter(d => d.produto === produto);

  edicoes.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.edicao;
    opt.textContent = e.edicao;
    edicaoSelect.appendChild(opt);
  });

  edicaoSelect.disabled = false;
});

edicaoSelect.addEventListener("change", () => {
  const produto = produtoSelect.value;
  const edicao = edicaoSelect.value;

  const item = dados.find(d => d.produto === produto && d.edicao === edicao);

  if (item) {
    resultado.innerHTML = `⏱️ ${item.horas} horas de implantação`;
  }
});