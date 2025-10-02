//Registrar usuarios con:
//Nombre
//Correo electrónico

let usuarios = [];

function registrarUsuarios(nombre, correo) {
   
    let usuario = {
        nombre: nombre,
        correo: correo
    };

  
    usuarios.push(usuario);

    console.log("Usuario registrado:", usuario);
}

registrarUsuarios("Juan Perez", "juan@gmail.com");
registrarUsuarios("Ana Lopez", "ana@gmail.com");

console.log(usuarios);


//registrar un libro = find.index

//Funcion para Prestar y devolver un libro:
//Solo si está disponible.
//Cambiar el estado a prestado.


function prestarLibro() {

}

