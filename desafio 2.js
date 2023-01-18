function calculadora(n1, operacao, n2){
    
    // var operacoes = adicao,subtracao,divisao,multiplicacao. Nesse contexto os operadores receberam os valores que estão relacionados ao n1 e n2, respectivamente.
    var resultado
    if (operacao=='adicao')
        resultado=n1+n2
    if (operacao=='subtracao') 
        resultado=n1-n2
    if (operacao=='divisao')
        resultado=n1/n2
    if (operacao=='multiplicacao')
        resultado=n1*n2
    return resultado
}

                       //n1, operacao, n2
resultado = calculadora(0, 'adicao', 10)
console.log(resultado + ' adicao')

resultado = calculadora(1,'subtracao', 1)
console.log(`${resultado} subtracao`)

resultado = calculadora(5,'multiplicacao', 5)
console.log(resultado,'multiplicacao')

resultado = calculadora(100,'divisao', 2)
console.log(resultado,'divisao')