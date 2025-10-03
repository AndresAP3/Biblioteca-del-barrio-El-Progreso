

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
        Estado: "Prestado"
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


agregarLibro("El extranjero", "Albert Camus")
MostarLibros()
LibrosDisponibles()
LibrosAutor("Gabriel García Márquez")

