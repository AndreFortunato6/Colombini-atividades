var boolean = prompt('Vamos Jogar? (s/n) ');

if (boolean == 's') {
    var numeroSecreto = parseInt(Math.random() * 1001);
    var numeroDigitado = -1; // Inicializa com um valor que não será comparado

    while (numeroDigitado != numeroSecreto) {
        var numeroDigitado = prompt('Digite um número entre 1 e 1000');

        if (numeroDigitado === "") {
            alert("Você não digitou nada, por favor insira um número!");
        } else {
            numeroDigitado = parseInt(numeroDigitado);

            if (isNaN(numeroDigitado)) {
                alert("Por favor, digite um número válido");
            } else if (numeroDigitado == numeroSecreto) {
                alert('Parabéns, você acertou!');
            } else if (numeroDigitado > numeroSecreto) {
                alert('Você errou :( , o número secreto é menor do que ' + numeroDigitado);
            } else {
                alert('Você errou :( , o número secreto é maior do que ' + numeroDigitado);
            }
        }
    }
}

