function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert(`[ERRO] verifique os dados e tente novamente!`)
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
           if (idade >=0 && idade < 10){
            // criança
            img.setAttribute("src", "https://img.freepik.com/fotos-gratis/retrato-de-menino-branco-com-corte-de-cabelo-estiloso_74855-10319.jpg")
           } else if (idade < 21){
            //jovem
             img.setAttribute("src", "")
           } else if (idade < 50) {
            // adulto
            img.setAttribute("src", "")
           } else {
            // Idoso
            img.setAttribute("src", "")
           }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }   if (idade >=0 && idade < 10){
            // criança
            img.setAttribute("src", "")
           } else if (idade < 21){
            //jovem
            img.setAttribute("src", "")
           } else if (idade < 50) {
            // adulto
            img.setAttribute("src", "")
           } else {
            // Idoso
            img.setAttribute("src", "")
           }
        res.style.textAlign = 'center'
        res.innerHTML = `Detecctamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}