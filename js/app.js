//elementos da página 
const formRenda =document.getElementById("form-renda");
const inputRenda = document.getElementById ("renda");

const formDespesa = document.getElementById("form-despesa");
const inputDescricao = document.getElementById("descricao");
const inputValorDespesa = document.getElementById("valor-despesa");
const selectCategoria = document.getElementById("categoria");

const resumoRenda =document.getElementById("resumo-renda");
const resumoGasto =document.getElementById("resumo-gasto");
const resumoSaldo =document.getElementById("resumo-saldo");
const resumoPercentual = document.getElementById("resumo-percentual");

const listaVazia = document.getElementById("lista-vazia");
const listaDespesas = document.getElementById("lista-despesas");
const botaoLimpar = document.getElementById("btn-limpar");

// resumo 
function atualizarResumo () {
    const renda = carregarRenda ();
    const despesas = carregarDespesas ();
    
    const totalGasto = calcularTotalGasto (despesas);
    const saldo = calcularSaldo (renda,totalGasto);
    const percentual = calcularPercentual (renda,totalGasto);

    resumoRenda.textContent = formatarMoeda(renda);
    resumoGasto.textContent = formatarMoeda(totalGasto);
    resumoSaldo.textContent = formatarMoeda (saldo);
    resumoPercentual.textContent = formatarPercentual(percentual);
}
    // LISTA DE DESPESAS
    function mostrarDespesas (){ 


        const despesas = carregarDespesas ();

    listaDespesas.innerHTML = "";


    if (despesas.length === 0){
        listaVazia.style.display = "block";
    } else {
        listaVazia.style.display = "none";
    }


    for (const despesa of despesas) {
        const item = document.createElement ("li");
        item.textContent = `${despesa.descricao} (${despesa.categoria}) - ${formatarMoeda(despesa.valor)}`;
        listaDespesas.appendChild(item);
    }
}