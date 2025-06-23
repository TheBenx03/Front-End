import React from 'react'
import Bookshelf from "../components/Bookshelf";

export function Administracion() {
    return  (
        <div>
            <section className="LibroCreate" id="agregar-libro-detallado">
                <h2 className="adm-h2">Agregar Libro</h2>
                <form className="adm-form" id="formulario-libro-detallado">

                    <div className="inputContainer">
                        <label htmlFor="idLibro">ID del Libro:</label><br/><br/>
                        <input className="input" type="text" id="idLibro" name="idLibro" required/><br/><br/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="nombreLibro">Nombre:</label><br/><br/>
                        <input className="input" type="text" id="nombreLibro" name="nombreLibro" required/><br/><br/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="autorLibro">Autor:</label><br/><br/>
                        <input className="input" type="text" id="autorLibro" name="autorLibro" required/><br/><br/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="lenguajeLibro">Lenguaje:</label><br/><br/>
                        <input className="input" type="text" id="lenguajeLibro" name="lenguajeLibro"
                               required/><br/><br/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="categoriasLibro">Categorías (separadas por comas):</label><br/><br/>
                        <input className="input" type="text" id="categoriasLibro" name="categoriasLibro" required/><br/><br/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="notaLibro">Nota (1 a 5):</label><br/><br/>
                        <input className="input" type="number" id="notaLibro" name="notaLibro" min="1" max="5"
                               required/><br/><br/>
                    </div>

                    <button type="button" id="agregar-libro" className="adminButton">Agregar Libro</button>
                </form>

                <div className="adm-divError" id="errores-libro-detallado"></div>
            </section>
            <table className="librosTabla" id="tabla-libros" border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Autor</th>
                    <th>Lenguaje</th>
                    <th>Categorías</th>
                    <th>Nota</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>

            <div id="editModal" className="modal">
                <div className="modal-content">
                    <span className="close-modal">&times;</span>
                    <h2>Editar Libro</h2>
                    <form id="editLibroForm">
                        <input type="hidden" id="editLibroId"/>

                        <div className="inputContainer">
                            <label htmlFor="idLibroEdit">ID del Libro:</label><br/><br/>
                            <input className="input" type="text" id="idLibroEdit" name="idLibro" required/><br/><br/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="nombreLibroEdit">Nombre:</label><br/><br/>
                            <input className="input" type="text" id="nombreLibroEdit" name="nombreLibro" required/><br/><br/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="autorLibroEdit">Autor:</label><br/><br/>
                            <input className="input" type="text" id="autorLibroEdit" name="autorLibro"
                                   required/><br/><br/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="lenguajeLibroEdit">Lenguaje:</label><br/><br/>
                            <input className="input" type="text" id="lenguajeLibroEdit" name="lenguajeLibro"
                                   required/><br/><br/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="categoriasLibroEdit">Categorías (separadas por comas):</label><br/><br/>
                            <input className="input" type="text" id="categoriasLibroEdit" name="categoriasLibro"
                                   required/><br/><br/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="notaLibroEdit">Nota (1 a 5):</label><br/><br/>
                            <input className="input" type="number" id="notaLibroEdit" name="notaLibro" min="1" max="5"
                                   required/><br/><br/>
                        </div>

                        <button type="button" id="guardar-libro" className="btn-guardar">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    )
}