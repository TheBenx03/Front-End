import React from 'react'

export function Buscar (){
    return (
        <div>
            <section className="intro">
                <p>Selecciona un idioma para explorar nuestra colección de libros en su versión original. Descubre obras
                    únicas tal como fueron escritas, sin traducciones.</p>
            </section>

            <section className="section">
                <div className="categories">
                    <a href="#" className="category">Francés</a>
                    <a href="#" className="category">Japonés</a>
                    <a href="#" className="category">Alemán</a>
                    <a href="#" className="category">Italiano</a>
                    <a href="#" className="category">Arábico</a>
                    <a href="#" className="category">Ruso</a>
                    <a href="#" className="category">Coreano</a>
                    <a href="#" className="category">Español</a>
                </div>
            </section>
        </div>
    )
}