const qs = function(elemento){
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    //console.log("todo ok");

    let formulario = qs('#formularioLogin');
    let inputMail = qs('#inputMail');
    let inputContrasenia = qs('#inputContrasenia');
    let elementos = formulario.elements;
    console.log(formulario);
    console.log(elementos);

    let regEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    inputMail.addEventListener('blur', function(){
        let errorMail = qs('#errorMail');
        if(inputMail.value.length == 0){
            errorMail.style.display = "grid";
            errorMail.innerHTML = "El campo no puede estar vacio";
            return false;
        }
        if(!regEmail.test(inputMail.value)){
            errorMail.style.display = "grid";
            errorMail.innerHTML = "Ingrese un mail valido";
            return false;
        } else {
            errorMail.style.display = "none";
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
            //debo agregar lo que quiero que se muestre en pantalla cuando haya errores
            console.log(error)

        }else{
            formulario.submit()
        }

    })
})