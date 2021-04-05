function validar(formulario){
    if(formulario.nombre.value.length <5 ){
        alert("Escriba por lo menos más de 5 carácteres dentro del campo nombre")
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i=0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        if(checkStr.length>30){
        alert("Nombre muy largo")
        return false;
        }
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;

        if (j == checkOK.length){
            allvalid = false;
            break
        }
    }

    if(!allvalid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var txt = formulario.email.value;

    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email "+(b.test(txt)?"":" no ")+" valido");
    
    return b.test(txt);
}

function borrar(){
    document.formulario.nombre.value=" ";
    document.formulario.apellido.value=" ";
    document.formulario.email.value=" ";
    
}