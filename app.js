let minhaLista = [];


function adicionarAmigo() {
    let nomes = document.querySelector('input').value;
    if (nomes == '' || nomes == ' ') {
        alert('Por favor, adicione um nome válido.');
    } else {
    minhaLista.push(nomes);
    console.log(minhaLista.join('\n'));
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = (minhaLista.join(', \n'));
    }
}

function sortearAmigo(){
    let numeros = parseInt(Math.random() * minhaLista.length);
    console.log(minhaLista[numeros]);
    let lista = document.querySelector('#resultado');
    lista.innerHTML = ('O amigo secreto sorteado é: ' + minhaLista[numeros]);
}
