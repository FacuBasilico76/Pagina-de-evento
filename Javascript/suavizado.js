window.onload = () => {
    let linkClass = document.querySelectorAll('link-class')
    let inicio = links [0]
    inicio.addEventListener('click', () =>{
        scrollSuave ('#inicio', 500, 81)
    } )

}

const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos =elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
    
    const animacion = tiempoAhora =>{
        if (tiempoInicial === null) tiempoInicial = tiempoAhora 
        let tiempoPasado = tiempoAhora - tiempoInicial
        let Auxanimacion = easeInOutQuad (tiempoPasado, posInicial, elemPos, duracion)
        window.scrollTo(0, Auxanimacion)
        if (tiempoPasado < duracion ) requestAnimationFrame (animacion)
    }
    requestAnimationFrame (animacion)
}


const easeInOutQuad = (t, b, c, d) => {
    t /= d/2;
    if(t < 1) return c/2*t*t + b;
    t -- ;
    return -c/2 * (t*(t-2) -1 ) + b;
}