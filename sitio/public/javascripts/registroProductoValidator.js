const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){

//DOMS
    let formulario = qs('#formProduct');
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
        nombreProducto.classList.add('is-invalid');
        return false;
    } 
    if(nombreProducto.value.length < 3){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "Debe tener más de 3 caracteres";
        nombreProducto.classList.add('is-invalid');
        return false;
    } else {
        errorNombre.style.display = "none";
        errorNombre.innerHTML = "";
        nombreProducto.classList.remove('is-invalid');
        nombreProducto.classList.add('is-valid');
        return true;
    }
})
categoriaProducto.addEventListener('blur', function(){
    let errorCategoria = qs('#errorCategoria');
    if(categoriaProducto.value == ""){
        errorCategoria.style.display = "grid";
        errorCategoria.innerHTML = "Seleccione una categoria";
        categoriaProducto.classList.add('is-invalid');
        return false;
    } else {
        errorCategoria.style.display = "none";
        errorCategoria.innerHTML = "";
        categoriaProducto.classList.remove('is-invalid');
        categoriaProducto.classList.add('is-valid');
        return true;
    }
})
precioProducto.addEventListener('blur', function(){
    let errorPrecio = qs('#errorPrecio');
    if(precioProducto.value.length == 0){
        errorPrecio.style.display = "grid";
        errorPrecio.innerHTML = "Indique un precio";
        precioProducto.classList.add('is-invalid');
        return false;
    }
    if(precioProducto.value == "E"){
        errorPrecio.style.display = "grid";
        errorPrecio.innerHTML = "Indique un precio";
        precioProducto.classList.add('is-invalid');
    } else {
        errorPrecio.style.display = "none";
        precioProducto.classList.remove('is-invalid');
        precioProducto.classList.add('is-valid');
        return true
    }
})

comentarioProducto.addEventListener('blur', function(){
    let errorComentario = qs('#errorComentario');
    if(comentarioProducto.value.length == 0){
        errorComentario.style.display = "grid";
        errorComentario.innerHTML = "Ingrese un comentario";
        comentarioProducto.classList.add('is-invalid');
        return false;
    } else {
        errorComentario.style.display = "none";
        comentarioProducto.classList.remove('is-invalid');
        comentarioProducto.classList.add('is-valid');
        return true;
    }
})
imagenProducto.addEventListener('change', function(){
    let errorImagen = qs('#errorImagenD');
    if(!regImagen.exec(imagenProducto.value)){
        errorImagen.style.display = "grid";
        errorImagen.innerHTML = "Ingrese una imagen";
        imagenProducto.classList.add('is-invalid');
        return false;
    } else {
        errorImagen.style.display = "none";
        errorImagen.innerHTML = "";
        imagenProducto.classList.remove('is-invalid');
        imagenProducto.classList.add('is-valid');
        return true;
    }
})

formulario.addEventListener('submit', function(event){
    let errorMsg = qs('#errorMsg');
    event.preventDefault()
    let elementos = formulario.elements;
    let error = false;
    for (let i = 0; i < elementos.length -2; i++) {
        if(elementos[i].value == 0) {
            errorMsg.style.display = "grid";
            errorMsg.innerHTML = "Los campos no pueden estar vacios!";
            elementos[i].classList.add('is-invalid');
            error = true;
        }
    }
    if(error){
        console.log("todo ok!");
        
    } else {
        formulario.event()
    }
})



})