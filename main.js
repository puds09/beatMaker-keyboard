function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for( let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_' + instrumento;
    
    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    tecla.onkeydown = function (event) {
        console.log("keydown");
        if (event.code === 'Tab' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
        
        tecla.classList.remove('ativa');
    }
    
}



