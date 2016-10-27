function validateForm(){
    /* Escribe tú código aquí */
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;

    //Todos los campos son obligatorios, excepto los dos últimos.
    //Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
    function validaNombre(){
        if(name==null || name.length == 0 || /^\s+$/.test(name) ){
            alert ('Nombre no valido'); 
            }else if(!(name[0]==name[0].toUpperCase())){
                alert ('Nombre de comenzar con mayusculas');
            }else if ( /^[a-zA-z\s\ñ\Ñ]+$/){
                alert ('Nombre debe tener solo letras');
            }
        }
    //validaNombre();

    //Para los campos nombre y apellido la primera letra debe ser mayúscula
    function validaApellido(){
        if(lastName == null || lastName.length == 0 || /^\s+$/.test(lastName) ){
            alert ('Apellido no valido'); 
            }else if(!(lastName[0]==lastName[0].toUpperCase())){
                alert ('Apellido debe comenzar con mayusculas');
            }else if ( /^[a-zA-z\s\ñ\Ñ]+$/){
                alert ('Apellido debe tener solo letras');
            }
    }
    //validaApellido();
    
 
    //Validar que el campo email tenga un formato válido. Ej: name@domain.com
    function validaEmail(){
        if(/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/){
            alert ('Email no valido')
        }
    }
    //validaEmail();

    //El campo password debe tener al menos 6 caracteres
    //El campo password no puede ser igual a "password" ó "123456" ó "098754"
    function validaPassword(){
        if(password.length<6){
            alert ('El campo password debe tener al menos 6 caracteres');
        }else if( password!="password" || password!="123456" || password!="098754"){
            alert('Contraseña no puede ser igual a password, 123456 o 098754');
        }
    }
     //validaPassword();
    
}
