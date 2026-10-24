// chave do local storage
const CHAVE_RENDA = "financas_renda";
const CHAVE_DESPESAS = "financas_despesas";
//renda
function salvarRenda (valor) {
    localStorage.setItem(CHAVE_RENDA, String(valor));
}
function carregarRenda () {
        const valor=localStorage.getItem(CHAVE_RENDA);
        return valor === null ? 0 : Number(valor);

    }
//Despesas
function salvarDespesas (despesas) {
    localStorage.setItem (CHAVE_DESPESAS, JSON.stringify(Despesas));
}
function carregarDespesas () {
    const dados =localStorage.getItem(CHAVE_DESPESAS);
    return dados === null ? [] : JSON.parse(dados);
}
//limpar tudo
function limparDados() {
    localStorage.removeItem(CHAVE_RENDA);
    localStorage.removeItem(CHAVE_DESPESAS);
}

