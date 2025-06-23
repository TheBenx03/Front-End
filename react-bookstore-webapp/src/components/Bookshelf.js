import React, { useState, useEffect } from 'react'
import Book from "./Book";


function Bookshelf() {

    const data = FetchBooks();
    let books = []
    data.forEach((book) => {
        books.push(
            Book(
                book.image,
                book.title,
                book.authors,
                "English"
            )
        );
    })

    return (
        <div className="books">
            {books}
        </div>
    )
}

export default Bookshelf

function FetchBooks(){
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                const respuesta = await fetch('https://www.dbooks.org/api/recent');
                if (!respuesta.ok) {
                    throw new Error(`HTTP error! status: ${respuesta.status}`);
                }
                const datos = await respuesta.json();
                setLibros(datos.books); // Asegúrate de acceder a la propiedad correcta según la estructura de la respuesta
            } catch (error) {
                setError(error.message);
            }
        };
        fetchLibros();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return libros;
}