const grid = document.querySelector('.grid')
const spanjogador = document.querySelector('.jogador')
const timer = document.querySelector('.tempo')

const frutas = [
 'filhote',
 'jaguar',
 'elefante',
 'girafa',
 'zebra',
 'leao',
 'veado',
 'lemur',
 'tigre'
]
let primeiracard = ''
let segundacard = ''
const checktodas = () => {
    const acertos = document.querySelectorAll('.desabilitar')
    if(acertos.length == 18)
    setTimeout(() =>{
    if(confirm('PARABENS VOCÊ VENCEU!! \n Quer jogar novamente [OK] para Sair [Cancelar]') == true){
        document.location.reload(confirm);
    } else{
        window.location = '../index.html'
    }
    }, 500)
   }

const checkcards = () => {
    const primeirafruta = primeiracard.getAttribute('data-fruta')
    const segundafruta = segundacard.getAttribute('data-fruta')
    if( primeirafruta == segundafruta){
        primeiracard.firstChild.classList.add('desabilitar')
        segundacard.firstChild.classList.add('desabilitar')
        primeiracard = ''
        segundacard = ''
        checktodas()

    } else{
        setTimeout(() =>{
        primeiracard.classList.remove('revelar-card')
        segundacard.classList.remove('revelar-card')
        primeiracard = ''
        segundacard = ''
        }, 500)
        
    }
}
const revelarcard = ({ target }) => {
    if(target.parentNode.className.includes('revelar-card')){
        return
    }
    if(primeiracard == ''){
        
        target.parentNode.classList.add('revelar-card')
        primeiracard = target.parentNode
    
    } else if (segundacard == ''){
        
        target.parentNode.classList.add('revelar-card')
        segundacard = target.parentNode

        checkcards()
    }

    
}
const criarcard = (fruta) =>{
    const card = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')

    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'

    front.style.backgroundImage = `url('../images/${fruta}.jpg')`
    card.appendChild (front)
    card.appendChild (back)

    card.addEventListener('click', revelarcard)

    card.setAttribute('data-fruta', fruta)

    return card

}
const carregarjogo = () =>{
    const duplicarfrutas = [ ... frutas, ... frutas]
    const embaralhar = duplicarfrutas.sort(() => Math.random() - 0.5)
    embaralhar.forEach((fruta) => {
        const card = criarcard(fruta)
        grid.appendChild(card)
    })
}

const startimer = () => {
    setInterval(() => {
        const contatimer = +timer.innerHTML
        timer.innerHTML = contatimer + 1
    }, 1000)
}
window.onload = () => {
    const nomejogador = localStorage.getItem('player')
    spanjogador.innerHTML = nomejogador
    startimer()
    carregarjogo()
}
