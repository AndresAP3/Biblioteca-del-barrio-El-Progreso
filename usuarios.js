//Registrar usuarios con:
//Nombre
//Correo electrónico

let usuarios = []

function registrarUsuarios(nombre, correo) {
   
    let usuario = {
        nombre: nombre,
        correo: correo
    }

  
    usuarios.push(usuario)

    console.log("Usuario registrado:", usuario)
}

console.log(usuarios)

registrarUsuarios("Juan Perez", "juan@gmail.com")
registrarUsuarios("Ana Lopez", "ana@gmail.com")




