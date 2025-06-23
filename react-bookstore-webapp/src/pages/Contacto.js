import React from 'react'
import Bookshelf from "../components/Bookshelf";

export function Contacto() {
    return  (
        <div>
            <section className="section intro">
                <p>¿Tienes alguna pregunta? ¿Quieres hacer un pedido especial o simplemente conversar sobre libros?
                    ¡Contáctanos!</p>
            </section>

            <section class="section">
                <h2>Información de Contacto</h2>
                <div class="contact-info">
                    <p><strong>Correo electrónico:</strong> contacto@babel-libros.cl</p>
                    <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
                    <p><strong>Dirección:</strong> Av. de los Idiomas 2345, Santiago, Chile</p>
                    <p><strong>Horario de atención:</strong> Lunes a Viernes de 09:00 a 18:00 hrs</p>
                </div>
            </section>
        </div>
    )
}