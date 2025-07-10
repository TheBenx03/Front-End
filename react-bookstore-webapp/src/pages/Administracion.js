import React, {useEffect, useState} from 'react'
import book from "../components/Book";

export function Administracion() {
    const [bookshelfDB, setBookshelfDB] = useState(
        JSON.parse(localStorage.getItem('bookshelf')) || [])

    const [newBook, setNewBook] = useState({
        id: "",
        title: "",
        authors: "",
        lenguage: "",
        category: "",
        score: ""
    })

    const [hidden, setHidden] = useState('none');
    const [changeBook, setChangeBook] = useState({
        id: "",
        title: "",
        authors: "",
        lenguage: "",
        category: "",
        score: "",
    })

    useEffect(() => {
        localStorage.setItem('bookshelf', JSON.stringify(bookshelfDB));
    }, [bookshelfDB])

    const createBook = () => {

        let validation = false

        if (newBook.id &&
            newBook.title &&
            newBook.authors &&
            newBook.lenguage &&
            newBook.category &&
            !isNaN(newBook.score) &&
            newBook.score >= 1 && newBook.score <= 5) {
            validation = true
        } else {
            alert('Por favor, completa todos los campos correctamente (nota entre 1 y 5).');
        }

        //ASIGNAR VALORES DE ELEMENTOS
        if (validation !== false) {
            setBookshelfDB([...bookshelfDB, {
                id: newBook.id,
                title: newBook.title,
                authors: newBook.authors,
                lenguage: newBook.lenguage,
                category: newBook.category,
                score: newBook.score.toString()
            }]);

            setNewBook({
                id: "",
                title: "",
                authors: "",
                lenguage: "",
                category: "",
                score: ""
            });
        }
    }

    const editBook = (book) => {
        setChangeBook({
            id: book.id,
            title: book.title,
            authors: book.authors,
            lenguage: book.lenguage,
            category: book.category,
            score: book.score,
        });
        setHidden('block');
    }

    const updateBook = () => {

        let validation = false

        if (changeBook.id &&
            changeBook.title &&
            changeBook.authors &&
            changeBook.lenguage &&
            changeBook.category &&
            !isNaN(changeBook.score) &&
            changeBook.score >= 1 && changeBook.score <= 5) {
            validation = true
        } else {
            alert('Por favor, completa todos los campos correctamente (nota entre 1 y 5).');
        }

        if (validation !== false) {

            const tempShelf = bookshelfDB.map(book => {
                if (book.id === changeBook.id) {
                    return {
                        id: changeBook.id,
                        title: changeBook.title,
                        authors: changeBook.authors,
                        lenguage: changeBook.lenguage,
                        category: changeBook.category,
                        score: changeBook.score
                    };
                }
                return book;
            });

            setBookshelfDB(tempShelf);

            setChangeBook(newBook);

        }
        setHidden('none');
    }

    const deleteBook = (id) => {
        setBookshelfDB(bookshelfDB.filter(book => book.id !== id))
    }

    const manageChange = (e) => {
        const {name, value} = e.target
        setNewBook(prev => ({
            ...prev,
            [name]: value }))
    }

    const manageEdit = (e) => {
        const {name, value} = e.target
        setChangeBook(prev => ({
            ...prev,
            [name]: value }))
    }

    const [libros, setLibros] = useState([]);

    const fetchFromApi = async () => {
        try {
            const respuesta = await fetch('https://www.dbooks.org/api/recent');
            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }
            const datos = await respuesta.json();
            setLibros(datos.books);
            setBookshelfDB(libros);// Asegúrate de acceder a la propiedad correcta según la estructura de la respuesta
        } catch (error) {}
    }

    return  (
        <div>
            <section className="LibroCreate" id="agregar-libro-detallado">
                <h2 className="adm-h2">Agregar Libro</h2>
                <form className="adm-form" id="formulario-libro-detallado">

                    <div className="inputContainer">
                        <label>ID del Libro:</label><br/><br/>
                        <input className="input"
                               type="text"
                               name="id"
                               value={newBook.id}
                               onChange={manageChange}
                               placeholder="Asignar ID"
                               required/><br/><br/>
                    </div>

                    <div className="inputContainer">
                        <label>Nombre:</label><br/><br/>
                        <input className="input"
                               type="text"
                               name="title"
                               value={newBook.title}
                               onChange={manageChange}
                               placeholder="Asignar titulo"
                               required/><br/><br/>
                    </div>

                    <div className="inputContainer">
                        <label>Autor:</label><br/><br/>
                        <input className="input"
                               type="text"
                               name="authors"
                               value={newBook.authors}
                               onChange={manageChange}
                               placeholder="Asignar autor"
                               required/><br/><br/>
                    </div>

                    <div className="inputContainer">
                        <label>Lenguaje:</label><br/><br/>
                        <input className="input"
                               type="text"
                               name="lenguage"
                               value={newBook.lenguage}
                               onChange={manageChange}
                               placeholder="Asignar lenguaje"
                               required/><br/><br/>
                    </div>

                    <div className="inputContainer">
                        <label>Categorías (separadas por comas):</label><br/><br/>
                        <input className="input"
                               type="text"
                               name="category"
                               value={newBook.category}
                               onChange={manageChange}
                               placeholder="Asignar categorias"
                               required/><br/><br/>
                    </div>

                    <div className="inputContainer">
                        <label>Nota (1 a 5):</label><br/><br/>
                        <input className="input"
                               type="number"
                               name="score"
                               value={newBook.score}
                               onChange={manageChange}
                               min="1"
                               max="5"
                               placeholder="Asignar nota"
                               required/><br/><br/>
                    </div>

                    <button type="button" onClick={createBook} className="adminButton">Agregar Libro</button>
                    <button type="button" onClick={fetchFromApi} className="adminButton">Llamar API [{bookshelfDB.length} libros en tabla]</button>

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
                <tbody>
                {bookshelfDB.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.authors}</td>
                            <td>{book.lenguage}</td>
                            <td>{book.category}</td>
                            <td>{book.score}</td>
                            <td>
                                <button onClick={()=> deleteBook(book.id)}
                                        className="btn-quitar">Eliminar</button>
                                <button onClick={()=> editBook(book)}
                                        className="btn-editar">Editar</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <div id="editModal" className="modal" style={{display:hidden}}>
                <div className="modal-content">
                    <span className="close-modal" onClick={() => setHidden('none')}>&times;</span>
                    <h2>Editar Libro</h2>
                    <form id="editLibroForm">
                        <input type="hidden" id="editLibroId"/>

                        <div className="inputContainer">
                            <label>ID del Libro:</label><br/><br/>
                            <input className="input"
                                   type="text"
                                   name="id"
                                   defaultValue={changeBook.id}
                                   onChange={manageEdit}
                                   placeholder="Asignar ID"
                                   required/><br/><br/>
                        </div>

                        <div className="inputContainer">
                            <label>Nombre:</label><br/><br/>
                            <input className="input"
                                   type="text"
                                   name="title"
                                   defaultValue={changeBook.title}
                                   onChange={manageEdit}
                                   placeholder="Asignar titulo"
                                   required/><br/><br/>
                        </div>

                        <div className="inputContainer">
                            <label>Autor:</label><br/><br/>
                            <input className="input"
                                   type="text"
                                   name="authors"
                                   defaultValue={changeBook.authors}
                                   onChange={manageEdit}
                                   placeholder="Asignar autor"
                                   required/><br/><br/>
                        </div>

                        <div className="inputContainer">
                            <label>Lenguaje:</label><br/><br/>
                            <input className="input"
                                   type="text"
                                   name="lenguage"
                                   defaultValue={changeBook.lenguage}
                                   onChange={manageEdit}
                                   placeholder="Asignar lenguaje"
                                   required/><br/><br/>
                        </div>

                        <div className="inputContainer">
                            <label>Categorías (separadas por comas):</label><br/><br/>
                            <input className="input"
                                   type="text"
                                   name="category"
                                   defaultValue={changeBook.category}
                                   onChange={manageEdit}
                                   placeholder="Asignar categorias"
                                   required/><br/><br/>
                        </div>

                        <div className="inputContainer">
                            <label>Nota (1 a 5):</label><br/><br/>
                            <input className="input"
                                   type="number"
                                   name="score"
                                   value={parseInt(changeBook.score)}
                                   onChange={manageEdit}
                                   min="1"
                                   max="5"
                                   placeholder="Asignar nota"
                                   required/><br/><br/>
                        </div>

                        <button type="button" className="btn-guardar" onClick={updateBook}>Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    )
}