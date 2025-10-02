

//Biblioteca de los libros

let libros = [
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

function RecibeDatos(){
    libros.push({
        Titulo: "El extranjero",
        Autor: "Albert Camus",
        Estado: "Disponible"})
}


RecibeDatos()
console.log(libros)

//cambiar estado
libros[0].Estado = "Prestado"


