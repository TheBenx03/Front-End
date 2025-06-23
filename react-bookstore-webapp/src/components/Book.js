import React from 'react'

function Book(image, name, autor, lenguaje) {
    return (
        <div className="book">
            <img src={image} alt="Book Cover"
                 width="150"/>
            <h3>{name}</h3>
            <p>{autor} – {lenguaje}</p>
        </div>
    )
}

export default Book