const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){

//DOMS
    let formulario = qs('#formProducto');
    let nombreProducto = qs('#inputNombre');
    let categoriaProducto = qs('#categoriaProducto');
    let precioProducto = qs('#precioProducto');
    let comentarioProducto = qs('#textarea');
    let imagenProducto = qs('#imagen');

//expresiones regulares
    let regImagen = /\.(jpg|jpeg|png|gif)$/ //imagenes

//validaciones
nombreProducto.addEventListener('blur', function(){
    let errorNombre = qs('#errorNombreProducto');
    if(nombreProducto.value.length == 0){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "Este campo no puede estar vacio";
        return false;
    } 
    if(nombreProducto.value.length < 6){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "Debe tener más de 6 caracteres";
        return false;
    } else {
        errorNombre.style.display = "none";
        errorNombre.innerHTML = "";
        return true;
    }
})
categoriaProducto.addEventListener('change', function(){
    let errorCategoria = qs('#errorCategoria');
    if(categoriaProducto.value == 0){
        errorCategoria.style.display = "grid";
        errorCategoria.innerHTML = "Seleccione una categoria";
        return false;
    } else {
        errorCategoria.style.display = "none";
        errorCategoria.innerHTML = "";
        return true;
    }
}) //Esto no esta funcionando como debe, corregir!

precioProducto.addEventListener('blur', function(){
    let errorPrecio = qs('#errorPrecio');
    if(precioProducto.value.length == 0){
        errorPrecio.style.display = "grid";
        errorPrecio.innerHTML = "Indique un precio";
        return false;
    }
    if(precioProducto.value == "E"){
        errorPrecio.style.display = "grid";
        errorPrecio.innerHTML = "Indique un precio";
    } else {
        errorPrecio.style.display = "none";
        return true
    }
})
comentarioProducto.addEventListener('blur', function(){
    let errorComentario = qs('#errorComentario');
    if(comentarioProducto.value.length == 0){
        errorComentario.style.display = "grid";
        errorComentario.innerHTML = "Ingrese un comentario";
        return false;
    } else {
        errorComentario.style.display = "none";
        return true;
    }
})
imagenProducto.addEventListener('change', function(){
    let errorImagen = qs('#errorImagenD');
    if(!regImagen.exec(imagenProducto.value)){
        errorImagen.style.display = "grid";
        errorImagen.innerHTML = "Ingrese una imagen";
        return false;
    } else {
        errorImagen.style.display = "none";
        errorImagen.innerHTML = "";
        return true;
    }
})

formulario.addEventListener('submit',function(e){
    e.preventDefault()
    let error = false;
    for (let i = 0; i < elementos.length -1; i++) {
        if (elementos[i].value==0) {
            elementos[i].classList.add('is-invalid');
            error = true;
        }
    }
    if (error) {
        console.log(error)
    } else {
        formulario.submit()
        }
    })
})