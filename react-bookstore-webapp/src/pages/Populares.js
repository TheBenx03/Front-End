import React from 'react'
import Bookshelf from "../components/Bookshelf";

export function Populares() {
    return  (
        <div>
            <section className="section intro">
                <p>Estos son los libros más leídos y recomendados por nuestros lectores. ¡Conoce las historias que están
                    marcando tendencia!</p>
            </section>

            <h2>Top Libros</h2>

            <Bookshelf></Bookshelf>
        </div>
    )
}