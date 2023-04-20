const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')
// Validar se digitou nome maior que 3 caracter para habilitar o botão
const validarinput = ({ target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

const fazerenvio = (event) =>{
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'pages/jogo.html'
}

input.addEventListener('input', validarinput)
form.addEventListener('submit', fazerenvio)