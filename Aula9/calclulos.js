function inserir(valor) {
    console.log("Valor inserido:", valor); // Isso deve aparecer no consoleS
    let display = document.querySelector('#visor');
    if (display.innerText === '0') {
        display.innerText = valor;
    } else {
        display.innerText += valor;
    }
}
