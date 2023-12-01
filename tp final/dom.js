let imagen = document.querySelector('.imagen')


let boton = document.querySelector('.cambiarAhora')

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        imagen.src = '/img/cupido album.png'
        imagenCambiada = true
        alert('if')
    }else{
        imagen.src = '/img/tini.album.jpg'
        imagenCambiada = false
        alert('else')

    }
}

let imagen = document.querySelector('.imagen')


let boton = document.querySelector('.cambiarAhora')

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        imagen.src = '/img/portada qv.jpg'
        imagenCambiada = true
        alert('if')
    }else{
        imagen.src = '/img/tini.album.jpg'
        imagenCambiada = false
        alert('else')

    }
}


