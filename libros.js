

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

//funcion que recibe datos

export function RecibeDatos(){
    libros.push({
        Titulo: "El extranjero",
        Autor: "Albert Camus",
        Estado: "Disponible"})
}


RecibeDatos()

//cambiar estado

export function cambiarEstado(){ 
libros[0].Estado = "Prestado"
}

//funcion de mostar los libros

export function MostarLibros(){
console.log("Lista de libros: ")
    console.log(libros)
}


