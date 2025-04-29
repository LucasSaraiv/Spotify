
    
    document.addEventListener('DOMContentLoaded', ()=>{


        const  Artistas_polupares = [
            {nome: 'Henrique e juliano', image: './img/artista-henrique-juliano.jpg'},
            {nome: 'Jorge e matheus', image: './img/artista-jorge-mateus.jpg'},
            {nome: 'Zé neto e Cristiano', image: './img/artista-ze-neto.jpg'},
            {nome: 'Gustavo lima', image: './img/artista-gustavo-limma.jpg'}
            
         ]

        const polupares = document.querySelector('.Artistas-polupares')

        Artistas_polupares.forEach(item => {
           let artistCard = document.createElement('div')
            artistCard.classList.add('artist-card') 

            artistCard.innerHTML = ` <img src = ${item.image} alt = imagem do ${item.nome}>
            <h3>${item.nome}<h3>
            <p>Artista</p>`
        
            polupares.appendChild(artistCard )
           
        })
   
        albuns_populares = [
            {nome: "caju", image: './img/album-caju.jpg'},
            {nome: "Ceu-explica", image: './img/album-ceu-explica.jpg'},
            {nome: "escandalo", image: './img/album-escandalo.jpg'},
            {nome: "hit", image: './img/album-hit-me.jpg'}
        ]

        albuns_populares.forEach(item => {
            let albunCard = document.createElement('div');
            albunCard.classList.add('albun-card')

            albunCard.innerHTML = `<img src = ${item.image} alt = imagem do ${item.nome}>
            <h3>${item.nome}</h3> 
            <p>Albun</>`

        albuns = document.querySelector('.albuns-populares')
        albuns.appendChild(albunCard)
            
        })
   
    })


