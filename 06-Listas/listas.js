const compra = ["Leche", "Huevos", "Mantequilla", "Miel", "Yogures"]

compra.push("Aceite de Girasol")
compra.pop()

const peliculas = [
    {
        titulo: "El efecto mariposa",
        director: "Eric Bress",
        fecha: new Date(2004, 3, 30)
    },
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: new Date(1995, 0, 13)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]
