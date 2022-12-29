function enviar(){
    var nombre=document.getElementById("nombre").value;
    var correo=document.getElementById("correo").value;
    localStorage.setItem("name",nombre);
    localStorage.setItem("email",correo);
    var saludo=`Hola ${nombre}!
    te has registrado con el siguiente correo: ${correo}`
    alert(saludo)
}
function climaRecomen(){
    var clima=document.getElementById("clima").value;
    var mensaje2;
    //climas validos soleado, nublado, lluvioso
    switch(clima){
        case 'soleado':
            mensaje2="Usa bloqueador, gorro y sombrilla";
            break;
        case 'nublado':
            mensaje2="Usa sueter y quedate en casa";
            break;
        case 'lluvioso':
            mensaje2="Usa paraguas y abrigate!";
            break;
        default:
            mensaje2="Ingresa un clima valido";
            break;    
    }
    alert(mensaje2);
}