import React from 'react'

function Header() {
    return (
        <div>
            <header>
                <h1>Babel</h1>
                <p>Explora el mundo por sus palabras – libros extranjeros en su idioma de origen</p>
            </header>

            <div className="hero"></div>

            <nav id="Pestañas">
                <a href="/">Inicio</a>
                <a href="buscar">Buscar</a>
                <a href="novedades">Novedades</a>
                <a href="populares">Mas Populares</a>
                <a href="contacto">Contacto</a>
                <a href="login">Inicio de Sesion</a>
                <a href="administracion">Administracion</a>
            </nav>
        </div>
    );
}
export default Header;