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
// formulário da renda 
formRenda.addEventListener ("submit",function (evento) {
    evento.preventDefault ();
    const renda = Number(inputRenda.value);
    salvarRenda (renda);
    atualizarResumo();
});
//formulario de despesas 
formDespesa.addEventListener ("submit",function (evento){
evento.preventDefault();

const novaDespesa = {
    descricao:inputDescricao.value.trim(),
    valor:Number(inputValorDespesa.value),
    categoria: selectCategoria.value
};
const despesas = carregarDespesas();
despesas.push(novaDespesa);
salvarDespesas(despesas);

formDespesa.reset();
atualizarResumo();
mostrarDespesas();
});
// ===== Botão limpar tudo =====
botaoLimpar.addEventListener("click", function () {
    if (confirm("Apagar a renda e todas as despesas?")) {
        limparDados();
        formRenda.reset();
        atualizarResumo();
        mostrarDespesas();
    }
});

// ===== Inicialização =====
const rendaSalva = carregarRenda();
if (rendaSalva > 0) {
    inputRenda.value = rendaSalva;
}

atualizarResumo();
mostrarDespesas();

// ===== Simulador de investimentos =====
const formSimulador = document.getElementById("form-simulador");
const inputSimInicial = document.getElementById("sim-inicial");
const inputSimAporte = document.getElementById("sim-aporte");
const inputSimTaxa = document.getElementById("sim-taxa");
const inputSimPrazo = document.getElementById("sim-prazo");

const areaResultado = document.getElementById("resultado-simulador");
const simResInvestido = document.getElementById("sim-res-investido");
const simResJuros = document.getElementById("sim-res-juros");
const simResFinal = document.getElementById("sim-res-final");

formSimulador.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const resultado = calcularInvestimento(
        Number(inputSimInicial.value),
        Number(inputSimAporte.value),
        Number(inputSimTaxa.value),
        Number(inputSimPrazo.value)
    );

    simResInvestido.textContent = formatarMoeda(resultado.totalInvestido);
    simResJuros.textContent = formatarMoeda(resultado.juros);
    simResFinal.textContent = formatarMoeda(resultado.valorFinal);

    areaResultado.hidden = false;
});