const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){


    let formulario = qs('#formularioEditProduct');
    let inputNombre = qs('#inputNombre');
    let inputCategoria = qs('#inputCategoria');
    let inputPrecio = qs('#inputPrecio');
    let inputDescripcion = qs('#textarea')


    inputNombre.addEventListener('blur', function(){
        let errorNombre = qs('#errorNombre');
        if(inputNombre.value.lenght == 0){
            errorNombre.style.display = 'grid';
            errorNombre.innerHTML = "Este campo no puede estar vacio";
            return false;
        }else{
            errorNombre.style.display = "none"
            return true;
        }
    })

    inputCategoria.addEventListener('blur', function(){
        let errorCategoria = qs('#errorCategoria');
        if(inputCategoria.value == ""){
            errorCategoria.style.display = 'grid';
            errorCategoria.innerHTML = "Seleccione una categoria";
            return false;
        }else{
            errorCategoria.style.display = "none"
            return true;
        }
    })

    inputPrecio.addEventListener('blur', function(){
        let errorPrecio = qs ('#errorPrecio');
        if(inputPrecio.value.lenght == 0){
            errorPrecio.style.display = 'grid';
            errorPrecio.innerHTML = "Este campo no puede estar vacio";
            return false;
        }else{
            errorPrecio.style.display = "none"
            return true;
        }
    })

    inputDescripcion.addEventListener('blur', function(){
        let errorDescripcion = qs ('#errorDescripcion');
        if(inputDescripcion.value == null){
            errorDescripcion.style.display = "grid";
            errorDescripcion.innerHTML = "Por favor ingresar una descripcion";
            return false;
        }else{
            errorDescripcion.style.display = "none"
            return true;
        }
    })

    formulario.addEventListener('submit',function(e){
        e.preventDefault()
        
        let error = false;
        console.log(elementos)
        for (let i = 0; i < elementos.length -1; i++) {
            
            
            if (elementos[i].value==0) {
                elementos[i].classList.add('is-invalid');

                error = true;
            }

        }
        if (error) {
            console.log(error)

        }else{
            formulario.submit()
        }

    })

})