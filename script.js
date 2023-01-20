// ####################### Desafio 01: Construir uma Escada ####################################
// Queremos representar uma escada com altura variável, utilizando um array de strings. Por exemplo, uma escada com altura 4, representaremos com o seguinte array:
// var escada3 = [
//      "  #",
//      " ##",
//      "###",
//     "####"
// ]
// Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta.

var lista = [];
function escada(altura){

  altura = parseInt(prompt("Digite quantos degraus sua escada terá: "));

  for(var i = 1; i <= altura; i++){
    espaco = altura - i;
    lista.push("#".repeat(i)+ "\n");
  }
  return lista;
}
alert(escada())


// ######################### Desafio 02: Árvore Utópica ######################################
// As árvores utópicas  crescem de uma forma particular, em dois ciclos:
// cada primavera dobram seu tamanho cada verão crescem um metro. Se a Soulcode plantar uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?
// Alguns exemplos:
// N = 0, sua altura será 1 metro(não cresceu nada)
// N = 1, sua altura será de 2 metros(dobrou a altura na primavera)
// N = 2, sua altura será de 3 metros(cresceu um metro mais no verão)
// N = 3, sua altura será de 6 metros(dobrou a altura na primavera seguinte)
// Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore da Soulcode.

// function alturaArvoreUtopica(ciclos) {
//   var tArvore = 1;
//   for(var i = 0; i < ciclos; i++)
//     // if(i%2==1)
//     if(i & 1)
//       tArvore += 1;
//     else
//       tArvore *= 2;
//   return tArvore;
//  }
//  alert("Com N = 0. A arvore não cresceu nada, permace com " + alturaArvoreUtopica(0) + "M");
//  alert("Com N = 1. A arvore dobrou a altura na primavera com " + alturaArvoreUtopica(1) + "M");
//  alert("Com N = 2. A arvore cresceu um metro a mais no verão com " + alturaArvoreUtopica(2) + "M");
//  alert("Com N = 3. A arvore dobrou a altura na primavera seguinte com " + alturaArvoreUtopica(3) + "M");



// ################# Desafio 03: Mais Menos (Porcentagem de elementos) #########################
// Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:
// na primeira posição, a fração de números que são positivos
// na segunda posição, a fração de números que são zero
// na última posição, a fração de números que são negativos

// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar[0.5, 0.25, 0.25], devido a que há 50 % de positivos, 25 % de zeros, e 25 % de negativos.

// var resultado = [];
// function maisMenos(arrayEntrada){
// 	var nPositivo = 0;
// 	var nZero = 0;
// 	var nNegativo = 0;
	
// 	for(let i = 0; i < arrayEntrada.length; i++){
// 		if(arrayEntrada[i] < 0)
// 			nNegativo++;
			
// 		else if(arrayEntrada[i] == 0)
// 			nZero++;
			
// 		else
// 			nPositivo++;
// 	}
// 	resultado[0] = nPositivo / arrayEntrada.length;
// 	resultado[1] = nZero / arrayEntrada.length;
// 	resultado[2] = nNegativo / arrayEntrada.length;
// 	return resultado;
// }
// alert(maisMenos([1, 2, 0, -1])); //ex dado


// ############################## Desafio 04: Produto ########################

// Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.