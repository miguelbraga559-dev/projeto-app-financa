// chave do local storage
const CHAVE_RENDA = "financas_renda";
const CHAVE_DESPESAS = "financas_despesas";
//renda
function salvarRenda (valor) {
    localStorage.setItem(CHAVE_RENDA, String(valor));
}
function carregarRenda() {
    const valor = localStorage.getItem(CHAVE_RENDA);
    const numero = Number(valor);

    if (valor === null || isNaN(numero)) {
        return 0;
    }

    return numero;
}
//Despesas
function salvarDespesas(despesas) {
    localStorage.setItem(CHAVE_DESPESAS, JSON.stringify(despesas));
}
function carregarDespesas() {
    const dados = localStorage.getItem(CHAVE_DESPESAS);

    if (dados === null) {
        return [];
    }

    try {
        const lista = JSON.parse(dados);
        return Array.isArray(lista) ? lista : [];
    } catch (erro) {
        return [];
    }
}
//limpar tudo
function limparDados() {
    localStorage.removeItem(CHAVE_RENDA);
    localStorage.removeItem(CHAVE_DESPESAS);
}

