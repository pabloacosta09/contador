var contador = 0;
var titulo = document.getElementById('counter');

function updateCounter() {
    titulo.textContent = contador;
    if (contador < 0) {
        titulo.style.color = 'red';
    } else if (contador > 0){
        titulo.style.color = 'green';
    } else {
        titulo.style.color = 'black';
    }

}

function increment(){
    contador++;
    updateCounter()
}

function decrement(){
    contador--;
    updateCounter()
}

function reset(){
    contador = 0;
    updateCounter()
}


