//total gasto 
function calcularTotalGasto (despesas) {
    let total = 0;
    for (const despesa of despesas) {
        total+= despesa.valor;
    }
    return total;
}
// saldo 
function calcularSaldo (renda,totalGasto) {
    return renda - totalGasto;
}
// percentual da renda comprometida 
function calcularPercentual (renda,totalGasto) {
    if (renda <= 0 ) {
        return 0;
    }
    return (totalGasto / renda) * 100;
}
// formatação de moeda 
function formatarMoeda (valor) {
    return valor.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    });
}

function formatarPercentual (valor){
    return `${Math.round(valor)}%`;
}
//simulador de investimentos 
function calcularInvestimento(valorInicial, aporteMensal, taxaMensal, prazoMeses) {
    const taxa = taxaMensal / 100;
    let saldo = valorInicial;

    for (let mes = 1; mes <= prazoMeses; mes++) {
        saldo = saldo * (1 + taxa) + aporteMensal;
    }

    const totalInvestido = valorInicial + aporteMensal * prazoMeses;
    const juros = saldo - totalInvestido;

    return {
        totalInvestido: totalInvestido,
        juros: juros,
        valorFinal: saldo
    };
}
