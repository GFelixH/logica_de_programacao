//informe data atual
let diaAtual = 12;
let mesAtual = 4;
let anoAtual = 2022;
//informe data evento
let diaEvento = 10;
let mesEvento = 3;
let anoEvento = 2023;
//algoritmo data valida
if (anoEvento < anoAtual) {
  console.log("Data Invalida");
} else if (mesEvento < mesAtual && anoAtual == anoEvento) {
  console.log("Data Invalida");
} else if (diaEvento < diaAtual && mesAtual == mesEvento) {
  console.log("Data Invalida");
} else {
  //data valida
  console.log("informe quantidade de palestrantes: ");
  let palestrantes = 4;
  //algoritmo ler nome dos palestrantes e armazena-los
  let nomePalestrantes = new Array();
  for (let k = 0; k < palestrantes; k++) {
    nomePalestrantes[k] = "EntradaNome";
  }
  //cadastro participantes
  let participantes = 0;
  let x = true;
  let nomeParticipantes = new Array();
  do {
    //entrada da idade
    console.log("Informe idade: ");
    let idade = 18;
    if (idade < 18) {
      console.log("Cadastro nao permitido pela idade");
    } else {
      //cadastro realizado com sucesso
      nomeParticipantes[participantes] = "nome";
      participantes++;
    }
    console.log("Continuar cadastro?: ");
    x = false; //avalia se continua cadastro
  } while (participantes < 100 && x);
} //fim else
