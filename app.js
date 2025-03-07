// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre == "") {
        return alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
    }
    actualizarLista()
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}<li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay amigos añadidos';
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteo = amigos[indice];

    document.getElementById('resultado').innerHTML = `El amigo secreto seleccionado es ${amigoSorteo}`;
}

