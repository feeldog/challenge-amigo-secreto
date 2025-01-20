// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        document.getElementById('amigo').value = "";
        listaAmigos();
    }
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML = lista.innerHTML + `<li>${amigos[i]}</li>`;
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, inserte un nombre");
    } else {
        let valorAleatorio = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = resultado.innerHTML + `<li>${amigos[valorAleatorio]}</li>`;
    }
}