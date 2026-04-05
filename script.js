//valores de cada combustível
const precoGasolina = 6.69;
const precoEtanol = 5.80;
const precoDiesel = 6.20;

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);

    const precos = {
        gasolina: precoGasolina,
        etanol: precoEtanol,
        diesel: precoDiesel,
    };

    const precoPorLitro = precos[tipo];

    if (!tipo) {
        alert("Escolha uma opção");
        return;
    }
    else if (isNaN(litros) || litros < 0) {
        alert("Digite um número válido de litros");
        return;
    }

    calcularAbastecimento(precoPorLitro, litros);
};

const calcularAbastecimento = (precoCombustivel, litros) => document.getElementById("resultado").textContent = "R$" + (precoCombustivel * litros).toFixed(2);

let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizarValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);
 
const form = document.getElementById("formCombustivel");
form.addEventListener("submit", (e) => e.preventDefault());
