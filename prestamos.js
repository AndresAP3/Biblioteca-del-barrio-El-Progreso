import {libros} from "./libros.js"

function cambiarEstado(titulo) {
    let resultado = libros.filter(libro=> libro.Titulo == titulo)
    libros[0].Estado = "Prestado";
    console.log(`El libro "${libros[0].Titulo}" ahora está "Prestado"`)
}


function devolverLibro(titulo) {
    let resultado = libros.filter(libro => libro.Titulo == titulo)
    resultado[0].Estado = "Disponible"
    console.log(`El libro "${titulo}" ahora está Disponible`)
}

cambiarEstado("guerra y paz")
devolverLibro("cien años de soledad")