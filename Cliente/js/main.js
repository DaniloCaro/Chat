let socket = io()

// Referenciar elemntos del DOM
let form = document.querySelector('#form')
let input = document.querySelector('#input')
let mensajes = document.querySelector('#ul')
const pUser = document.getElementById('username-p');

function concatenarUT() {
    const pUser2 = pUser.textContent;
    const inputUser = input.value;
    const concatenar = pUser2 + ": " + inputUser;

    return concatenar;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
        socket.emit('chat', concatenarUT())
        input.value = ''
    }
})

socket.on('chat', (msg) => {
    let item = document.createElement('li')
    item.textContent = msg
    mensajes.appendChild(item)
})

function usernameFunction() {
    const username = document.getElementById('input-username').value;

    return pUser.innerHTML = username;
}