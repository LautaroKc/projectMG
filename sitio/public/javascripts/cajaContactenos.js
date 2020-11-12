window.addEventListener('load', function(){
    let caja = document.querySelector('.cajaContactenos');

caja.addEventListener('mouseover', function(){
    caja.style.boxShadow = "0 0 15px 5px white";
    caja.style.transition = "1s";
    })

caja.addEventListener('mouseout', function(){
    caja.style.boxShadow = "0 0 15px 1px white";
    caja.style.transition = "1s";
    })
})