const resultado = () => {
    let name1 = document.getElementById('yourName').value
    let name2 = document.getElementById('PartnerName').value
    let percentage = ((name1 + name2).split('').reduce((total, numero) => total + numero.charCodeAt(0), 0)) % 101
    if (name1 && name2) {
        document.getElementById('resultado').innerHTML = `${formatTexto(name1)} y ${formatTexto(name2)} tienen un Percentage: ${percentage}% de compatibilidad`
    } else {
        document.getElementById('error').style.color = 'red'
        document.getElementById('error').innerHTML = `Todos los campos son obligatorios`
        setTimeout(()=>{
            document.getElementById('error').innerHTML = ``
        }, 3000)
    }

}

function formatTexto(texto) {
    return texto[0].toUpperCase() + texto.slice(1)
}