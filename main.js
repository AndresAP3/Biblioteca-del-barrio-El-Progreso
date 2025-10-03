
import { 
    cambiarEstado, 
    devolverLibro, 
    agregarLibro, 
    MostarLibros, 
    LibrosDisponibles, 
    LibrosAutor 
} from "./libros.js"

import { registrarUsuarios, mostrarUsuarios } from "./usuarios.js"


// USUARIOS
registrarUsuarios("Juan Perez", "juan@gmail.com")
registrarUsuarios("Ana Lopez", "ana@gmail.com")
mostrarUsuarios()

// LIBROS
cambiarEstado("Guerra y paz")
devolverLibro("Cien años de soledad")
agregarLibro("El extranjero", "Albert Camus")
MostarLibros()
LibrosDisponibles()
LibrosAutor("Gabriel García Márquez")


