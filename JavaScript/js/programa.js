var a = "Calculadora";
var valor1 = parseInt (prompt ("Digite o primeiro valor: "))
var valor2 = parseInt (prompt ("Digite o segundo valor : "))
var opcao = prompt ("Escolha sua Opção : ")

switch(opcao){
    case opcao = "1":
        soma=valor1+valor2;
        document.writeln(soma);

    case opcao = "2":
        subtracao = valor1-valor2;
        document.writeln(subtracao);

    case opcao ="3":
        multiplicacao= valor1*valor2;
        document.writeln(multiplicacao);
    
    case opcao = "4":
        divisao= valor1/valor2;
        document.writeln(divisao);
}

