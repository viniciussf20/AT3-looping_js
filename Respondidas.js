/*
1)let nota;
do {
    nota = Number(prompt('Digite uma nota de 0 a 10: '));
        if (isNaN(nota) || nota > 10 || nota < 0) {
            alert('Nota inválida! Tente novamente.');
        }
} while (isNaN(nota) || nota > 10 || nota < 0);
document.write(`Sua nota: ${nota}`);
2)for(let i = 0; i <= 100; i++){
    document.writeln(i)
}
3)let password;
let userName; 

do {
    userName = prompt('Digite o seu nome de usuário: ');
    password = prompt('Digite sua senha: ');
        if (userName == password) {
            alert("Os dois campos não podem ser iguais. Tente novamente");
        }
} while (userName == password);

alert('Cadastro concluído!');
4)function leitorValidadorDeDados() {
    let nome, idade, salario, sexo, estadoCivil;

    do {
        nome = prompt("Digite seu nome: ");
            if (nome.length <= 3) {
                alert('Seu nome deve possuir mais de 3 caracteres.');
            }
    } while (nome.length <= 3);

    do {
        idade = parseInt(prompt('Digite sua idade: '));
            if (isNaN(idade) || idade <= 0 || idade >= 150) {
                alert('Idade inválida! Tente novamente');
            }
    } while (isNaN(idade) || idade <= 0 || idade >= 150);

    do {
        salario = parseFloat(prompt('Digite seu salário: '));
            if (isNaN(salario) || salario <= 0) {
                alert('O salário deve ser maior que zero! Tente novamente');
            }
    } while (isNaN(salario) || salario <= 0);

    do {
        sexo = prompt('Diga seu sexo (f ou m): ').toLowerCase();
            if (sexo !== "f" && sexo !== "m") {
                alert("Entrada inválida! Tente novamente");
            }
    } while (sexo !== "f" && sexo !== "m");

    do {
        estadoCivil = prompt("Digite seu Estado Civil (s, c, v ou d): ").toLowerCase();
            if (!["s", "c", "v", "d"].includes(estadoCivil)) {
                alert('Estado Civil inválido! Tente novamente');
            }
    } while (!["s", "c", "v", "d"].includes(estadoCivil));

    alert('Cadastro concluído!');
}
leitorValidadorDeDados();
5)let povoA, povoB, anos;

povoA = 80000;
povoB = 200000;
anos = 0;
const crescA = 0.03;
const crescB = 0.015;

while (povoA < povoB) {
    povoA += povoA *crescA;
    povoB += povoB * crescB;
    anos++;
}

document.write(`Precisaria de aproximadamente ${Math.ceil(anos)} anos para que a população do país A ultrapasse ou iguale a do país B.`)
6)function taxaDeCrescimentoDePopulações() {
    let povoA, povoB, anos, crescA, crescB;

    povoA = parseFloat(prompt("Diga o valor desejado para a população A: "));
    povoB = parseFloat(prompt("Diga o valor desejado para a população B: "));
    crescA = parseFloat(prompt("Diga o valor desejado para a taxa de crescimentp da população A: "));
    crescB = parseFloat(prompt("Diga o valor desejado para a taxa de crescimento da população B: "));

    if (isNaN(povoA) || povoA <= 0 || isNaN(povoB) || povoB <= 0 || isNaN(crescA) || crescA <=0 || isNaN(crescB) || crescB <= 0 ){
        alert('Insira valores válidos!');
        return;
    }

    anos = 0;

    while (povoA < povoB) {
        povoA += povoA *crescA;
        povoB += povoB * crescB;
        anos++;
    }

    alert(`Precisaria de aproximadamente ${Math.ceil(anos)} anos para que a população do país A ultrapasse ou iguale a do país B.`);
}

let deNovo = true;
while (deNovo) {
    taxaDeCrescimentoDePopulações();
    deNovo = confirm('Deseja realizar outra operação?');
}
7) abaixo:
for(let i = 1; i <= 20; i++){
    document.write(i, "<br>")
}
   ao lado:
for(let i = 1; i <= 20; i++){
    document.write(i, "\n")
}
8)let nums = [];

for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt(`Digite o número na ordem ${i + 1}: `))
        if (isNaN(num)) {
            alert("Valor inválido. Tente novamente");
            i--;
        } else {
            nums.push(num);
        }
}
let maior = Math.max(...nums);
alert(`O maior número dentre [${nums}] é: ${maior}`);
9)let nums, soma, media;

nums = [];
soma = 0;

for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt(`Digite o número na ordem ${i + 1}: `))
        if (isNaN(num)) {
            alert("Valor inválido. Tente novamente");
            i--;
        } else {
            nums.push(num);
            soma += num;
        }
}
media = soma / nums.length;
alert(`A soma e a média dos números dentre [${nums}], respectivamente, é: ${soma} e ${media}`);
10)for(let i = 0; i <= 50; i++){
    if (i % 2 !== 0) {
        document.writeln(i)
    }
}
11)let num1, num2, minNum, maxNum, result;

num1 = parseInt(prompt('Diga um número: '));
num2 = parseInt(prompt('Diga outro número: '));
minNum = Math.min(num1, num2);
maxNum = Math.max(num1, num2);
result = '';
for(let i = minNum + 1; i < maxNum; i++){ 
    result += i + " ";
}
document.write(`Os números inteiros correspondidos entre ${minNum} e ${maxNum} são: ${result}`);
12)let num1, num2, minNum, maxNum, result, soma;

num1 = parseInt(prompt('Diga um número: '));
num2 = parseInt(prompt('Diga outro número: '));
minNum = Math.min(num1, num2);
maxNum = Math.max(num1, num2);
result = '';
soma = 0;
for(let i = minNum + 1; i < maxNum; i++){ 
    result += i + " ";
    soma += i;
}
document.write(`Os números inteiros correspondidos entre ${minNum} e ${maxNum} são: ${soma}`); 
13)let num, tabuada;
num = parseInt(prompt("Diga um número: "));

for(let i = 1; i <= 10; i++){
    tabuada = num * i;
    document.write(`${num} x ${i} = ${tabuada}<br>`);
}
14)let base, expo;

base = parseInt(prompt('Digite um número para ser a base:'));
expo = parseInt(prompt('Digite um número para ser o expoente:'));

document.write(`${base} elevado a ${expo} = ${Math.pow(base, expo)}`);
15)let nums, qtdPares, qtdImpares;

nums = [];
qtdPares = 0;
qtdImpares = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o número na ordem ${i + 1}: `));
    if (isNaN(num)) {   
        alert("Valor inválido. Tente novamente");
        i--;
    } else {
        nums.push(num);
        if (num % 2 == 0) {
            qtdPares++;
        } else {
            qtdImpares++;
        }
    }
}
alert(`A quantidade de números pares dentre [${nums}] é: ${qtdPares} e a quantidade de números ímpares dentre [${nums}] é: ${qtdImpares}`);
16)function serieFibonacci(n) {
    let fibonacci = [1, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

let n = 10;
document.write(`Sequência de Fibonacci até o ${n}º termo: ${serieFibonacci(n).join(', ')}`);
17)function serieFibonacci() {
    let fibonacci = [1, 1];
    let proxNum = fibonacci[0] + fibonacci[1];
    
    while (proxNum <= 500) {
        fibonacci.push(proxNum);
        proxNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }
    fibonacci.push(proxNum);
    return fibonacci;
}

document.write(`Sequência de Fibonacci até o 500: ${serieFibonacci().join(', ')}`);
// esse tá parecendo mais uma gambiarra, mas tá funcionando
18)let fatorial = 1;
let num = parseInt(prompt('Digite um número para descobrir seu fatorial: '));
let show = `${num}! = `;
for (let i = num; i > 0; i--) {
    fatorial *= i;
    show += i;
    if (i > 1) {
        show += ' . ';
    }
}
show += ` = ${fatorial.toLocaleString('pt-BR')}`;
document.write(show);
//! que gambiarra do caramba, viu... se tiver algum jeito mais fácil, por favor, me diga.
19)let nums = [];
let soma = 0;
let n = parseInt(prompt('Quantos números deseja digitar? '));

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número: `));
    nums.push(num);
    soma += nums[i];
}

document.write(`No conjunto de números [${nums.sort((a, b) => a -b)}] o menor valor, o maior valor e a soma dos valores são, respectivamente: ${Math.min(...nums)}, ${Math.max(...nums)}, ${soma}.`);
20)let nums = [];
let soma = 0;

function pedirQtdNumeros() {
    let n;
    do {
        n = parseInt(prompt('Quantos números deseja digitar (De 1 a 20)? '));
        if (isNaN(n) || n < 1 || n > 20) {
            alert('Entrada inválida! Tente novamente');
        }
    } while (isNaN(n) || n < 1 || n > 20);
    return n;
}

let n = pedirQtdNumeros();

for (let i = 0; i < n; i++) {
    let num;
    do {
        num = parseInt(prompt(`Digite o ${i + 1}º número: `));
        if (isNaN(num) || num < 0 || num > 1000) {
            alert('Entrada inválida! Tente novamente');
        }
    } while (isNaN(num) || num < 0 || num > 1000);

    nums.push(num);
    soma += num;
}

document.write(`No conjunto de números [${nums.sort((a, b) => a - b)}] o menor valor, o maior valor e a soma dos valores são, respectivamente: ${Math.min(...nums)}, ${Math.max(...nums)}, ${soma}.`);
21)let calcularDeNovo = true;

while (calcularDeNovo) {
    let fatorial = 1;
    let num;

    do{
        num = parseInt(prompt('Digite um número inteiro positivon menor que 16:'));
        if(isNaN(num) || num < 0 || num > 15){
            alert('Entrada inválida! Tente novamente');
        }
    }while(isNaN(num) || num < 0 || num > 15);

    let show = `${num}! = `;
    for (let i = num; i > 0; i--) {
        fatorial *= i;
        show += i;
            if (i > 1) {
                show += ' . ';
    }
}
show += ` = ${fatorial.toLocaleString('pt-BR')}`;
alert(show);

calcularDeNovo = confirm('Deseja calcular de novo?');
}

alert('Fim do programa.')
22)function primoOuNao(num){
    if(num < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

let num1 = parseInt(prompt("Digite um numero: "));

if(primoOuNao(num1)){
    document.write(`${num1} é primo!`);
}
23)function primosComDivisores(num) {
    if (num < 2) {
        return { ehPrimo: false, divisores: [] };
    }

    let divisores = [];

    for (let i = 1; i <= num; i++) { // Corrigido para `i <= num`
        if (num % i === 0) {
            divisores.push(i);
        }
    }

    const ehPrimo = divisores.length === 2; // Retorna true ou false

    return { ehPrimo, divisores };
}

let num1 = parseInt(prompt("Digite um número: "));

const resultado = primosComDivisores(num1);

if (resultado.ehPrimo) {
    document.write(`${num1} é primo!`);
} else {
    document.write(`${num1} não é primo! Ele tem divisores: ${resultado.divisores.join(", ")}.`);
}
// coloquei como se tivesse conectado com a outra (22)
24)function Primos(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let divisor = 5;
    while (divisor * divisor <= num) {
        totalDiv++;
        if (num % divisor === 0 || num % (divisor + 2) === 0) {
            return false;
        }
        divisor += 6;
    }
    return true;
}

let N = parseInt(prompt("Digite um número inteiro N para encontrar todos os primos entre 1 e N:"));
let primos = [];
let totalDiv = 0;

for (let i = 2; i <= N; i++) {
    if (Primos(i)) {
        primos.push(i);
    }
}

alert(`Números primos entre 1 e ${N}: ${primos.join(", ")}`);
alert(`Total de divisões: ${totalDiv}`); 
25)let n = prompt("insira a quantas notas são: ");
let soma = 0; 
let media; 
let notas;
for(i =1;i<=n;i++){
    notas = parseInt(prompt("insira suas notas"));
    soma += notas;
    media = soma/n;
}
document.write(`a soma das médias é: ${media}`);
26)function mediaIdade() {
    let idade = 0;
    let somaIdade = 0;
    let mediaIdade = 0;
    let pessoas = parseInt(prompt('Quantas pessoas estão na turma?'));

    if (isNaN(pessoas) || pessoas <= 0) {
        document.write("Número inválido de pessoas.");
        return; 
    }

    for (let i = 0; i < pessoas; i++) { 
        idade = parseInt(prompt("Digite a idade:"));

        if (isNaN(idade) || idade < 0) {
            alert("Idade inválida! tente novamente2");
            i--;
            continue;
        }
        
        somaIdade += idade;
    }

    mediaIdade = somaIdade / pessoas;

    if (mediaIdade >= 0 && mediaIdade <= 25) {
        document.write("A turma é jovem.");
    } else if (mediaIdade >= 26 && mediaIdade <= 60) {
        document.write("A turma é adulta.");
    } else if (mediaIdade > 60) {
        document.write("A turma é idosa.");
    }
}

mediaIdade()
27)let eleitores = parseInt(prompt("Quantos eleitores são?"));
let eleitorA = 0;
let eleitorB = 0;
let eleitorC = 0;
let apuracao;

for (let i = 1; i <= eleitores; i++) {
    apuracao = prompt("Insira seu voto em A, B ou C").toLowerCase();

    switch (apuracao) {
        case "a":
            eleitorA++;
            break;
        case "b":
            eleitorB++;
            break;
        case "c":
            eleitorC++;
            break;
        default:
            alert("Candidato inválido. Tente novamente.");
            i--; 
            break;
    }
}
document.write(`Votos no candidato A: ${eleitorA} <br> Votos no candidato B: ${eleitorB} <br> Votos no candidato C: ${eleitorC}`);
28)function mediaAlunosPorTurma(){

    let turmas = Number(prompt("Quantas turmas existem?"));
    let alunos = 0;
    let media = 0;

    for(let i = 0; i < turmas; i++){
        alunos = Number(prompt(`Quantos alunos tem a turma ${i + 1}?`));
            if(alunos > 40){
                alert("A turma não pode ter mais de 40 alunos!");
                i--;
            }
        media += alunos;            
    }
    media = media / turmas;
    alert(`A média de alunos por turma é ${media.toFixed(2)}`);
}
mediaAlunosPorTurma();
29) function Valormed(total, num) {
  return total / num;
}

let cds = parseInt(prompt("Quantos CDs tem em sua coleção?"));
let cdtotal = 0;

for (let i = 1; i <= cds; i++) {
  let valor = parseFloat(prompt(`Quanto custou o CD ${i}?`));
  if (isNaN(valor) || valor === null) {
    alert("Valor inválido! Insira um número válido.");
    i--;
    continue;
  }
  
  cdtotal += valor;
}

document.writeln(`Total investido: R$${cdtotal}<br>Valor médio para cada CD: 
R$${Valormed(cdtotal, cds)}`);

30) document.writeln("---------------------------------------- Lojas Quase Dois - Tabela de preços ----------------------------------<br><br>")
let unico = 1.99.toFixed(2)
for(var i =1;i<=50;i++){
  document.writeln(`${i} produtos = RS ${i * unico}<br>`)
}
31) 
document.writeln("----------------------------------Panificadora Pão de Ontem - Tabela de preços--------------------------------<br><br>")
let unico =parseFloat(prompt("insira o valor do pão:")).toFixed(2)
for(var i =1;i<=50;i++){
  document.writeln(`${i} - RS ${i * unico}<br>`)
}


32)
function Troco(val,tot){
  return val-tot;
}
let total= 0
for(var i =1;i<=10;i++){
  let valor =parseFloat(prompt("insira o valor do produto:"))
  total+=valor
  if(valor == 0){
    break 
  }
  document.writeln(`Produto ${i}: R$${valor}<br>`)
}   
let pago = parseFloat(prompt("Quanto que o cliente pagou?"))
document.writeln(`Total = R$ ${total}<br> Pago = R$${pago} <br> Troco = R$${Troco(pago,total)} `) 

33) 
function Primos(valor) {
  if (valor <= 1) return false;
  if (valor === 2) return true;
  if (valor % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(valor); i += 2) {
    if (valor % i === 0) return false;
  }
  
  return true;
}

let numero = parseInt(prompt("Digite um número inteiro:"));

if (Primos(numero)) {
  document.writeln(`O número ${numero} é primo.`);
} else {
  document.writeln(`O número ${numero} não é primo.`);
}

34)
function Primos(valor) {
  if (valor <= 1) return false;
  if (valor === 2) return true;
  if (valor % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(valor); i += 2) {
    if (valor % i === 0) return false;
  }

  return true;
}

let limite = parseInt(prompt("Digite um número inteiro:"));
let listaPrimos = [];

for (let i = 2; i <= limite; i++) {
  if (Primos(i)) {
    listaPrimos.push(i);
  }
}

document.writeln(`Números primos entre 1 e ${limite}: ${listaPrimos.join(', ')}`);

35) function Tabu(fixo,multi){
  return fixo*multi;
}
let fix =parseInt(prompt("qual valor que vc quer saber a tabuada?"))
let inicio =parseInt(prompt("por qual inteiro se inicia?"))
let final =parseInt(prompt("por qual inteiro deve finalizar?"))
alert("montar tabuada de: "+ fix +"\ncomeçar por: "+inicio+ "\nterminar em: "+final)
document.writeln(`montarei a tabuada de ${fix} <br> começando por ${inicio} e terminarei em ${final}<br>`)
for(let i =inicio;i<=final;i++){
document.writeln(`${fix} x ${i} = ${Tabu(fix,i)}<br>`)
} 
36) function Tabu(fixo, multi) {
  return fixo * multi;
}

let fix = parseInt(prompt("Qual valor que você quer saber a tabuada?"));

let inicio, final; 
 
while (true) {
  inicio = parseInt(prompt("Por qual inteiro deve começar?"));
  final = parseInt(prompt("Por qual inteiro deve terminar?"));
  
  if (inicio > final) {
    alert("Início não pode ser maior que final. Por favor, insira novamente.");
  } else {
    break;
  }
}

alert("Montar tabuada de: " + fix + "\nComeçar por: " + inicio + "\nTerminar em: " + final);
document.writeln(`Montarei a tabuada de ${fix} <br> Começando por ${inicio} e terminarei em ${final}<br>`);

for (let i = inicio; i <= final; i++) {
  document.writeln(`${fix} x ${i} = ${Tabu(fix, i)}<br>`);
}

 37) 
function analiseAcademiaClientes() {
    let maior = {codigo: null, altura: 0};
    let menor = {codigo: null, altura: Infinity};
    let maisPesado = {codigo: null, peso: 0};
    let maisLeve = {codigo: null, peso: Infinity};
    
    let somaAlturas = 0;
    let somaPesos = 0;
    let totalClientes = 0;

    while(true) {
        let codigo = parseInt(prompt("Digite o código do cliente (0 para encerrar): "));
        if (codigo === 0) break;
        
        let altura = parseFloat(prompt("Digite a altura do cliente em metros: "));
        let peso = parseFloat(prompt("Digite o peso do cliente em kg: "));

        somaAlturas += altura;
        somaPesos += peso;
        totalClientes++;

        if(altura > maior.altura) { maior = {codigo, altura}; }
        if(altura < menor.altura) { menor = {codigo, altura}; }
        if(peso > maisPesado.peso) { maisPesado = {codigo, peso}; }
        if(peso < maisLeve.peso) { maisLeve = {codigo, peso}; }
    }
    
    const mediaAltura = somaAlturas / totalClientes;
    const mediaPeso = somaPesos / totalClientes;
    
    document.write(`Cliente mais alto: Código ${maior.codigo}, Altura ${maior.altura}m.<br>`);
    document.write(`Cliente mais baixo: Código ${menor.codigo}, Altura ${menor.altura}m.<br>`);
    document.write(`Cliente mais pesado: Código ${maisPesado.codigo}, Peso ${maisPesado.peso}kg.<br>`);
    document.write(`Cliente mais leve: Código ${maisLeve.codigo}, Peso ${maisLeve.peso}kg.<br>`);
    document.write(`Média de altura: ${mediaAltura.toFixed(1)}m.<br>`);
    document.write(`Média de peso: ${mediaPeso.toFixed(1)}kg.<br>`);
}

analiseAcademiaClientes();

38) 
function calcularSalario(anoContratacao, anoAtual, salarioInicial) {
    let salario = salarioInicial;
    let aumento = 1.5 / 100;

    for(let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
        salario += salario * aumento;
        aumento *= 2;
    }
    return salario;
}

const salarioInicial = parseFloat(prompt('Digite o salário inicial do funcionário: '));
const anoContratacao = parseInt(prompt('Digite o ano de contratação do funcionário: '));
const anoAtual = new Date().getFullYear();

const salarioAtual = calcularSalario(anoContratacao, anoAtual, salarioInicial);
alert(`O salário atual do funcionário é: R$${salarioAtual.toFixed(2)}`);

40) 
function calcularDividaEExibirTabela(valorEmprestimo) {
    const opcoesParcelas = [
        {parcelas: 1, juros: 0},
        {parcelas: 3, juros: 10},
        {parcelas: 6, juros: 15},
        {parcelas: 9, juros: 20},
        {parcelas: 12, juros: 25}
    ];

    document.write('Valor da Dívida\t|\tValor dos Juros\t|\tQuantidade de Parcelas\t|\tValor da Parcela<br>');
    document.write('<hr>');

    opcoesParcelas.forEach(opcao => {
        const valorJuros = valorEmprestimo * (opcao.juros / 100);
        const valorTotal = valorEmprestimo + valorJuros;
        const valorParcela = valorTotal / opcao.parcelas;

        document.write(
            `R$ ${valorTotal.toFixed(2)}\t|\tR$ ${valorJuros.toFixed(2)}\t|\t${opcao.parcelas}\t|\tR$ ${valorParcela.toFixed(2)}<br>`
        );
    });
}

const valorEmprestimo = parseFloat(prompt('Digite o valor do empréstimo: '));
calcularDividaEExibirTabela(valorEmprestimo);

41) 
const menu = {
    100: { item: "Cachorro Quente", preco: 1.2 },
    101: { item: "Bauru Simples", preco: 1.3 },
    102: { item: "Bauru com Ovo", preco: 1.5 },
    103: { item: "Hambúrguer", preco: 1.2 },
    104: { item: "Cheeseburguer", preco: 1.3 },
    105: { item: "Refrigerante", preco: 1.0 }
};

let totalPedido = 0;

while (true) {
    let codigo = prompt("Digite o código do item (ou digite 'sair' para encerrar): ");
    if (codigo.toLowerCase() === "sair") break;

    codigo = parseInt(codigo);

    if (!menu[codigo]) {
        alert("Código inválido! Tente novamente.");
        continue;
    }

    let quantidade = parseInt(prompt(`Digite a quantidade de ${menu[codigo].item}:`));
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida! Tente novamente.");
        continue;
    }

    let valorItem = menu[codigo].preco * quantidade;
    totalPedido += valorItem;

    alert(
        `Item: ${menu[codigo].item}\nQuantidade: ${quantidade}\nValor a ser pago: R$ ${valorItem.toFixed(2)}`
    );
}

alert(`Total geral do pedido: R$ ${totalPedido.toFixed(2)}`);

42)
const eleicaoCandidatos = {
  1: "José",
  2: "João",
  3: "Maria",
  4: "Ana",
  5: "Nulo",
  6: "Branco"
};
let eleicaoVotos = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let totalVotosEleicao = 0;

while (true) {
  let codigoVoto = parseInt(prompt("Digite o código do voto (1-4 para candidatos, 5 para Nulo, 6 para Branco, 0 para encerrar):"));
  if (codigoVoto === 0) break;
  if (!eleicaoVotos.hasOwnProperty(codigoVoto)) {
    alert("Código inválido! Tente novamente.");
    continue;
  }
  eleicaoVotos[codigoVoto]++;
  totalVotosEleicao++;
}

let percentualNulosEleicao = (eleicaoVotos[5] / totalVotosEleicao) * 100;
let percentualBrancosEleicao = (eleicaoVotos[6] / totalVotosEleicao) * 100;

alert(`Resultado da eleição:
Candidato José: ${eleicaoVotos[1]} votos
Candidato João: ${eleicaoVotos[2]} votos
Candidata Maria: ${eleicaoVotos[3]} votos
Candidata Ana: ${eleicaoVotos[4]} votos
Votos Nulos: ${eleicaoVotos[5]} votos
Votos em Branco: ${eleicaoVotos[6]} votos
Percentual de Votos Nulos: ${percentualNulosEleicao.toFixed(2)}%
Percentual de Votos em Branco: ${percentualBrancosEleicao.toFixed(2)}%`);

43)
const provaGabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'];
let totalAlunosProva = 0;
let maiorAcertos = 0;
let menorAcertos = 10;
let somaNotasProva = 0;

do {
  let acertosAluno = 0;
  for (let i = 0; i < 10; i++) {
    let respostaAluno = prompt(`Questão ${i + 1}: (A, B, C, ou D)`).toUpperCase();
    if (respostaAluno === provaGabarito[i]) acertosAluno++;
  }
  
  totalAlunosProva++;
  somaNotasProva += acertosAluno;
  if (acertosAluno > maiorAcertos) maiorAcertos = acertosAluno;
  if (acertosAluno < menorAcertos) menorAcertos = acertosAluno;
  
  alert(`Você acertou ${acertosAluno} questões e sua nota é: ${acertosAluno}`);
} while (prompt("Outro aluno vai utilizar o sistema? (S/N)").toUpperCase() === "S");

let mediaNotasProva = somaNotasProva / totalAlunosProva;

alert(`Relatório Final:
- Maior Acerto: ${maiorAcertos}
- Menor Acerto: ${menorAcertos}
- Total de Alunos: ${totalAlunosProva}
- Média das Notas da Turma: ${mediaNotasProva.toFixed(2)}`);

/*
//obs==>funcoes para economizar espaço de codigo
