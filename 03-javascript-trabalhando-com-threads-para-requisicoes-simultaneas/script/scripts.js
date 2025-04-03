import imprimeCotacao from "./imprimeCotacao.js";

const graficoDolar = document.getElementById("graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dolar",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});

function gerarHorario() {
  let data = new Date();
  let horario =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

  return horario;
}

function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(dados);
  });

  grafico.update();
}

let workerDolar = new Worker("./script/workers/workerDolar.js");
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (event) => {
  let tempo = gerarHorario();
  let valor = event.data.ask;

  imprimeCotacao("dolar", valor);
  adicionarDados(graficoParaDolar, tempo, valor);
});

const graficoIene = document.querySelectorById("graficoIene");
const graficoParaIene = new Chart(graficoIene, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Iene",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});
