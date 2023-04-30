let valor = 0

const h1_valor = document.querySelector("#valor")

document.querySelector("#menos").addEventListener('click', () => {
    h1_valor.textContent = --valor
    cores()
})

document.querySelector("#mais").addEventListener('click', () => {
    h1_valor.textContent = ++valor
    cores()
})

function cores(){
    h1_valor.textContent = valor
    if (valor < 0) h1_valor.style.color ="red"
    else if (valor === 0) h1_valor.style.color = "black"
    else h1_valor.style.color = "green"
    
}