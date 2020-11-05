const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){

//DOM

let formulario = qs('#formEditUser')
let nombre = qs('#inputUnoEdit');
let apellido = qs('.inputApellido');
let email = qs('#inputDosEdit');
let telefono = qs('#inputTresEdit');
let direccion = qs('#inputCuatroEdit');
let avatar = qs('#inputAvatar');

//expresiones regulares
let regAvatar = /\.(jpg|jpeg|png|gif)$/
let regEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
let regTelefono; 

//validaciones
nombre.addEventListener('blur', function(){
let errorNombre = qs('#errorNombre');
    if(nombre.value.length == 0){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(nombre.value.length < 3){
        errorNombre.style.display = "grid";
        errorNombre.innerHTML = "Debe tener más de 3 caracteres";
        return false;
    } else {
        errorNombre.style.display = "none";
        errorNombre.innerHTML = "";
        return true;
    }
})
apellido.addEventListener('blur', function(){
    let errorApellido = qs('#errorApellido');
    if(apellido.value.length == 0){
        errorApellido.style.display = "grid";
        errorApellido.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(apellido.value.length < 3){
        errorApellido.style.display = "grid";
        errorApellido.innerHTML = "Debe tener más de 3 caracteres";
        return false;
    } else {
        errorApellido.style.display = "none";
        errorApellido.innerHTML = "";
        return true;
    }
})

email.addEventListener('blur', function(){
    let errorEmail = qs('#errorEmail');
    if(email.value.length == 0){
        errorEmail.style.display = "grid";
        errorEmail.innerHTML = "El campo no puede estar vacio";
        return false;
    }
    if(!regEmail.test(email.value)){
        errorEmail.style.display = "grid";
        errorEmail.innerHTML = "Debe ingresar un mail valido";
        return false;
    } else {
        errorEmail.style.display = "none";
        errorEmail.innerHTML = "";
        return true;
    }
})

telefono.addEventListener('blur', function(){
    let errorTelefono = qs('#errorTelefono');
    if(telefono.value.length == 0){
        errorTelefono.style.display = "grid";
        errorTelefono.innerHTML = "El campo no puede estar vacio";
         return false;
    }
    if(telefono.value.length < 8){
        errorTelefono.style.display = "grid";
        errorTelefono.innerHTML = "Ingrese un telefono valido";
        return false;
    }  else {
        errorTelefono.style.display = "none";
        errorTelefono.innerHTML = "";
        return true;
    }
})

direccion.addEventListener('blur', function(){
    let errorDireccion = qs('#errorDireccion');
    if(direccion.value.length == 0){
        errorDireccion.style.display = "grid";
        errorDireccion.innerHTML = "El campo no puede estar vacio";
        return false
    }
    if(direccion.value.length < 5){
        errorDireccion.style.display = "grid";
        errorDireccion.innerHTML = "Ingrese una dirección valida";
        return false
    } else {
        errorDireccion.style.display = "none";
        return true
    }
})

avatar.addEventListener('change', function(){
    let errorAvatar = qs('#errorAvatar');
    if(avatar.value == 0){
        errorAvatar.style.display = "grid";
        errorAvatar.innerHTML = "Seleccione un avatar";
        return false;
    }
    if(!regAvatar.exec(avatar.value)){
        errorAvatar.style.display = "grid";
        errorAvatar.innerHTML = "Ingrese una imagen valida";
        return false
    } else {
        errorAvatar.style.display = "none";
        errorAvatar.innerHTML = "";
        return true;
    }
})

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let elementos = formulario.elements;
    let error = false;
    for (let i = 0; i < elementos.length -3; i++) {
        console.log(elementos[i].value)
        if(elementos[i].value == 0) {
            elementos[i].classList.add('is-invalid');
            error = true;
        }
    }
    if (!error){
        formulario.submit()
    } else {
        console.log("todo ok!")
    }
})

})