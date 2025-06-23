import React from 'react'
import Bookshelf from "../components/Bookshelf";

export function Novedades() {
    return  (
        <div>
            <section className="section intro">
                <p>Descubre los libros más recientes que han llegado a nuestro catálogo. Nuevos idiomas, nuevas voces y
                    nuevas historias te esperan.</p>
            </section>

            <h2>Nuevos Libros</h2>

            <Bookshelf></Bookshelf>
        </div>
    )
}