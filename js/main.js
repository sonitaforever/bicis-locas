function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;

	//Todos los campos son obligatorios, excepto los dos últimos.
	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	//Para los campos nombre y apellido la primera letra debe ser mayúscula
	if(name==null || name.length == 0 || /^\s+$/.test(txtNombre || ) ){

	}


	//Validar que el campo email tenga un formato válido. Ej: name@domain.com
	if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
		alert('ERROR: Debe escribir un correo válido');
		return false;
	}

	//El campo password debe tener al menos 6 caracteres
	if(password.value.length<6){
		alert('ERROR: Debe tener al menos 6 caracteres');
		return false;
	}


	//El campo password no puede ser igual a "password" ó "123456" ó "098754"

	//El valor seleccionado de bicis, debe ser una de las opciones presentadas

}