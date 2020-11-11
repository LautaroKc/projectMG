const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){

    //DOMS
    let formulario = qs('#formRegistroUsuario');
    let elementos = formulario.elements;
    let inputNombre = qs('#inputUno');
    let inputApellido = qs('#inputUnoApellido');
    let inputAvatar = qs('#inputAvatar');
    let inputEmail = qs('#inputDos');
    let inputContrasenia = qs('#inputTres');
    let inputContraseniaDos = qs('#inputCuatro');
    let inputTerminos = qs('.inputTerminos');

    //expresiones regulares
    let regExExtensions = /\.(jpg|jpeg|png|gif)$/ //imagenes
    let regEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/; //email
    let regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //contraseña, entre 6 y 12 caracteres?entre una minuscula y mayuscula

//validaciones:
inputNombre.addEventListener('blur', function(){
let errorNombre = qs('#errorNombre');
    if(inputNombre.value.length == 0){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "El campo no puede estar vacio.";
        inputNombre.classList.add('is-invalid');
        return false
    }
    if(inputNombre.value.length < 3){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "Debe contener más de 3 letras.";
        return false
    } else {
        errorNombre.style.display = "none";
        return true
    }
})
inputApellido.addEventListener('blur', function(){
let errorApellido = qs('#errorApellido');
    if(inputApellido.value.length == 0){
        errorApellido.style.display = "grid";
        errorApellido.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(inputApellido.value.length < 3){
        errorApellido.style.display = "grid";
        errorApellido.innerHTML = "Debe contener más de 3 letras.";
        return false;
    } else {
        errorApellido.style.display = "none";
        return true;
    }
})

inputAvatar.addEventListener('change', function(){
    let errorAvatar = qs('#errorAvatar');
    if(!regExExtensions.exec(inputAvatar.value)){
        errorAvatar.style.display = "grid";
        errorAvatar.innerHTML = "El archivo debe ser una imagen";
        return false;
    } else {
        errorAvatar.style.display = "none";
        return true;
    }
})

inputEmail.addEventListener('blur', function(){
    let errorEmail = qs('#errorEmail');
    if(inputEmail.value.length == 0){
        errorEmail.style.display = "grid";
        errorEmail.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(!regEmail.test(inputEmail.value)){
        errorEmail.style.display = "grid";
        errorEmail.innerHTML = "Ingrese un mail valido";
        return false;
    } else {
        errorEmail.style.display = "none";
        return true;
    }
})

inputContrasenia.addEventListener('blur', function(){
    let errorPass = qs('#errorPass');
    if(inputContrasenia.value.length == 0){
        errorPass.style.display = "grid";
        errorPass.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(inputContrasenia.value.length < 6){
        errorPass.style.display = "grid";
        errorPass.innerHTML = "Debe tener mas de 6 caracteres";
        return false;
    } else {
        errorPass.style.display = "none";
        errorPass.style.transition = "display 1s";
        return true;
    }
})
inputContraseniaDos.addEventListener('blur', function(){
    let errorPassDos = qs('#errorPassDos');
    if(inputContraseniaDos.value.length == 0){
        errorPassDos.style.display = "grid";
        errorPassDos.innerHTML = "El campo no puede estar vacio";
        return false
    }
    if(inputContraseniaDos.value.length < 6){
        errorPassDos.style.display = "grid";
        errorPassDos.innerHTML = "Debe tener más de 6 caracteres";
        return false
    }
    if(inputContraseniaDos.value != inputContrasenia.value){
        errorPassDos.style.display = "grid";
        errorPassDos.innerHTML = "Las contraseñas no coinciden";
        return false
    } else {
        errorPassDos.style.display = "none";
        return true;
    }
})

formulario.addEventListener('submit', function(event){
    let errorMsg = qs('#errorMsg');
    event.preventDefault()
   // let elementos = formulario.elements;
    console.log(elementos);
    let error = false;
    for (let i = 0; i < elementos.length -2; i++) {
        if(elementos[i].value == 0) {
            errorMsg.style.display = "grid";
            errorMsg.innerHTML = "Los campos no pueden estar vacios";
            elementos[i].classList.add('is-invalid');
            error = true;
        }
    }
    if(error){
        console.log(error)
        
    } else {
        formulario.submit()
    }
})

})
