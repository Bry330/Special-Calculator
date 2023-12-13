function showResult(element) {
    let result = document.getElementById('resultado');

    result.value = element;
}

function add() {

    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);
    let suma = max + min;

    showResult(suma);

}

function res() {

    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);

    let resta = max - min;

    showResult(resta);
}

function multiply() {

    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);
    let multiplicar = max * min;

    showResult(multiplicar);

}

function division() {

    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);
    let division = max / min;

    showResult(division);
}

function pow() {

    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);
    let pow = Math.pow(max, min);

    showResult(pow);

}

function squareRoot() {
    let max = parseFloat(document.getElementById('max').value);
    let square = Math.sqrt(max);

    showResult(square);
}

function absoluteValue() {
    let max = parseFloat(document.getElementById('max').value);
    let min = parseFloat(document.getElementById('min').value);
    let abs = Math.abs(max - min);

   showResult(abs);
}

function random() {;
    let random = Math.random();

    showResult(random);

}

function round() {
    let result = document.getElementById('resultado').value
    let redondeo = Math.round(result);

    showResult(redondeo)
}

function floor() {
    let result = document.getElementById('resultado').value
    let ground = Math.floor(result);

    showResult(ground);
}

function ceil() {
    let result = document.getElementById('resultado').value
    let sky = Math.ceil(result);

    showResult(sky);
}