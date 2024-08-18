function validacionDatos() {
    const usuario = document.getElementById('user').value;
    const contraseña = document.getElementById('pass').value;

    if (usuario === '' || contraseña === '' ) {
        alert ('Debes de completar los campos para ingresar');
        
    }

    else {
        window.location.href = 'index.html';
    }

}
    
