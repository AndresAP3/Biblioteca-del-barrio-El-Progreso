
import { libros } from "./libros.js"

// prestar un libro
export function cambiarEstado(titulo) {
    let resultado = libros.filter(libro => libro.Titulo == titulo)
    resultado[0].Estado = "Prestado"
    console.log(`El libro "${titulo}" ahora está Prestado`)
}

// devolver un libro
export function devolverLibro(titulo) {
    let resultado = libros.filter(libro => libro.Titulo == titulo)
    resultado[0].Estado = "Disponible"
    console.log(`El libro "${titulo}" ahora está Disponible`)
}


cambiarEstado("Guerra y paz")
devolverLibro("Cien años de soledad")
