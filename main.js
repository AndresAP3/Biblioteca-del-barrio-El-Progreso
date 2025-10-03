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

registrarUsuarios("Juan Perez", "juan@gmail.com")
registrarUsuarios("Ana Lopez", "ana@gmail.com")

console.log(usuarios)

//Biblioteca de los libros

export let libros = [
    {
        Titulo: "Diario de Ana Frank",
        Autor: "Ana Frank",
        Estado: "Disponible"
    },
    {
        Titulo: "Cien años de soledad",
        Autor: "Gabriel García Márquez",
        Estado: "Disponible"
    },
    {
        Titulo: "Breve historia del mundo",
        Autor: "Ernst Gombrich",
        Estado: "Disponible"
    },
    {
        Titulo: "El arte de la guerra",
        Autor: "Sun Tzu",
        Estado: "Disponible"
    },
    {
        Titulo: "Guerra y paz",
        Autor: "León Tolstói",
        Estado: "Disponible"
    }
]


//agregar libro
export function agregarLibro(Titulo, Autor) {
    let libro = {
        Titulo: Titulo,
        Autor: Autor,
        Estado: "Disponible"

    }
libros.push(libro)    
console.log("Libro Agregado: ")
console.log(libro)
}


//funcion de mostar los libros

export function MostarLibros(){
console.log("Lista de libros: ")
console.log(libros)
}


//funcion que muestre los libros disponibles

export function LibrosDisponibles(){
    
    let disponibles = libros.filter(libro => libro.Estado == "Disponible")
    console.log("Libros disponibles: ")
    console.log(disponibles)
}

//funcon para mostar libros de una autor especifico

export function LibrosAutor(nombreAutor){
    let Resultado = libros.filter(libro => libro.Autor == nombreAutor)
    console.log("Libros de Autor: " + nombreAutor)
    console.log(Resultado)
}


//cambiar estado
function cambiarEstado(titulo) {
    let libro = libros.find(libro => libro.Titulo === titulo)
    libro && (libro.Estado = "Prestado",
              console.log(`El libro "${libro.Titulo}" ahora está Prestado`))
}


//devolver libro
function devolverLibro(titulo) {
    let libro = libros.find(libro => libro.Titulo === titulo)
    libro && (libro.Estado = "Disponible",
              console.log(`El libro "${titulo}" ahora está Disponible`))
}

cambiarEstado("Guerra y paz")
devolverLibro("Cien años de soledad")
agregarLibro("El extranjero", "Albert Camus")
MostarLibros()
LibrosDisponibles()
LibrosAutor("Gabriel García Márquez")



