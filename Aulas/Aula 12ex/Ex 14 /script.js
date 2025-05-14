function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var saudação = ''
    
    
    if (hora >= 0 && hora < 6) {
        //BOA MADRUGADA!!
      saudação = 'Boa madrugada!!'
        img.src = 'https://th.bing.com/th/id/OIP.olPu88uqYnuyFq_hKPR0_gHaEK?cb=iwp2&rs=1&pid=ImgDetMain'
        document.body.style.background = '#620096'
    }else if (hora >= 6 && hora <= 12) {
        // BOM DIA!
      saudação = 'Boa Dia!!'
        img.src = 'https://images.pexels.com/photos/28926949/pexels-photo-28926949/free-photo-of-silhuetas-ao-nascer-do-sol-na-provincia-oriental-do-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOM TARDE!
      saudação = 'Boa Tarde!!'
        img.src = 'https://images.pexels.com/photos/19791460/pexels-photo-19791460/free-photo-of-pier-quebra-mar-mar-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
      saudação = 'Boa noite!!'
        img.src = 'https://images.pexels.com/photos/30399134/pexels-photo-30399134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#515154'
    }
  msg.innerHTML = `Agora são ${hora} horas. ${saudação}`
}

