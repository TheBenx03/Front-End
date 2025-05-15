document.addEventListener('DOMContentLoaded', () => {

    // CONSTANTES USADAS EN EL SCRIPT
    const formularioLibro = document.getElementById('formulario-libro-detallado');
    const tablaLibrosBody = document.querySelector('#tabla-libros tbody');

    // BOTON DE AGREGAR, ELIMINAR Y EDITAR
    const botonAgregar = document.getElementById('agregar-libro');
    botonAgregar.addEventListener('click', agregarLibro);
    tablaLibrosBody.addEventListener('click', eliminarLibro);
    tablaLibrosBody.addEventListener('click', abrirModal);

    // CONSTANTES USADAS EN LA EDICION
    const editModal = document.getElementById('editModal');
    const editEventForm = document.getElementById('editLibroForm');
    const closeModal = document.querySelector('.close-modal');

    //CERRAR AL PRESIONAR X
    closeModal.addEventListener('click', function() {
        editModal.style.display = 'none';
    });

    //CERRAR AL CLICKEAR FUERA
    window.addEventListener('click', function(e) {
        if (e.target === editModal) {
            editModal.style.display = 'none';
        }
    });

    //CARGA DESDE LOCALSTORAGE
    cargarLibros()

    //AGREGAR LIBRO
    function agregarLibro(event) {
        event.preventDefault();

        //ASIGNAR VALORES DE ELEMENTOS
        const id = document.getElementById('idLibro').value.trim();
        const nombre = document.getElementById('nombreLibro').value.trim();
        const autor = document.getElementById('autorLibro').value.trim();
        const lenguaje = document.getElementById('lenguajeLibro').value.trim();
        const categorias = document.getElementById('categoriasLibro').value.trim();
        const nota = parseFloat(document.getElementById('notaLibro').value);

        //VALIDACIONES
        if (id && nombre && autor && lenguaje && categorias && !isNaN(nota) && nota >= 1 && nota <= 5) {
            agregarFilaLibro(id, nombre, autor, lenguaje, categorias, nota);
            formularioLibro.reset();
        } else {
            alert('Por favor, completa todos los campos correctamente (nota entre 1 y 5).');
        }
    }

    //AGREGAR LIBRO A TABLA
    function agregarFilaLibro(id, nombre, autor, lenguaje, categorias, nota) {
        //REFERENCIA A NUEVA FILA
        const fila = tablaLibrosBody.insertRow();

        //INSERTAR NUEVAS FILAS CON SU CONTENIDO
        fila.insertCell().textContent = id;
        fila.insertCell().textContent = nombre;
        fila.insertCell().textContent = autor;
        fila.insertCell().textContent = lenguaje;
        fila.insertCell().textContent = categorias;
        fila.insertCell().textContent = nota.toFixed(1);

        //REFERENCIAR NUEVA CELDA PARA LUEGO ASIGNAR BOTONES
        const celdaAcciones = fila.insertCell();

        //BOTON QUITAR
        const botonQuitar = document.createElement('button');
        botonQuitar.textContent = 'Quitar';
        botonQuitar.classList.add('btn-quitar');

        //BOTON EDITAR
        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.classList.add('btn-editar');

        //GUARDAR ID EN DATASET DEL BOTON PARA LUEGO SER USADA EN EL BORRADO DE LOCALSTORAGE
        botonQuitar.dataset.libroId = id;

        //ALMACENAR EN EL BOTON DE EDITAR
        botonEditar.dataset.libroId = id;
        botonEditar.dataset.nombre = nombre;
        botonEditar.dataset.autor = autor;
        botonEditar.dataset.lenguaje = lenguaje;
        botonEditar.dataset.categorias = categorias;
        botonEditar.dataset.nota = nota;



        celdaAcciones.appendChild(botonQuitar);
        celdaAcciones.appendChild(botonEditar);

        //ASIGNAR ARRAY A VARIABLE PARA LUEGO GUARDARLA EN GUARDARLIBRO
        const libro = {
            id: id,
            nombre: nombre,
            autor: autor,
            lenguaje: lenguaje,
            categorias: categorias,
            nota: nota
        };

        guardarLibro(libro)
    }

    //GUARDAR LIBRO EN LOCALSTORAGE
    function guardarLibro(libro) {

        //COPIAR JSON EN FORMA DE STRING PARA LUEGO PARSEARLO A UN ARRAY Y GUARDARLO EN VARIABLE
        let libros = JSON.parse(localStorage.getItem('libros')) || [];

        //USAR PUSH PARA AÑADIR LIBRO A LIBROS
        libros.push(libro);

        //REMPLAZAR ANTIGUO LIBROS EN LOCALSTORAGE CON EL NUEVO ARRAY CONVIRTIENDOLO EN UN JSON
        localStorage.setItem('libros', JSON.stringify(libros));
    }

    //ELIMINAR LIBRO
    function eliminarLibro(e) {
        //VALIDAR QUE CONTENGA EL BOTON CON SU CLASE
        if (e.target.classList.contains('btn-quitar')) {

            //COPIAR JSON EN FORMA DE STRING PARA LUEGO PARSEARLO A UN ARRAY Y GUARDARLO EN VARIABLE
            let libros = JSON.parse(localStorage.getItem('libros')) || [];

            //REFERENCIA A FILA A PARTIR DEL OBJETO TR MAS CERCANO AL btn-quitar
            const fila = e.target.closest('tr');

            //FILTRAR EL ARRAY QUITANDO CUALQUIER LIBRO QUE TENGA LA ID DEL DATASET DEL BOTON
            libros = libros.filter(libro => libro.id !== e.target.dataset.libroId);

            //REMPLAZAR ANTIGUO LIBROS EN LOCALSTORAGE CON EL NUEVO ARRAY CONVIRTIENDOLO EN UN JSON
            localStorage.setItem('libros', JSON.stringify(libros));

            //FINALMENTE ELIMINAR LA FILA DE LA TABLA USANDO LA REFERENCIA DE ANTES
            tablaLibrosBody.removeChild(fila);
        }
    }

    //ABRIR MODAL Y ASIGNAR VALORES
    function abrirModal(e){

        document.getElementById("idLibroEdit").value = e.target.dataset.libroId;
        document.getElementById('nombreLibroEdit').value = e.target.dataset.nombre;
        document.getElementById('autorLibroEdit').value = e.target.dataset.autor;
        document.getElementById('lenguajeLibroEdit').value = e.target.dataset.lenguaje;
        document.getElementById('categoriasLibroEdit').value = e.target.dataset.categorias;
        document.getElementById('notaLibroEdit').value = e.target.dataset.nota;

        //AÑADIR EVENTO AL BOTON
        document.getElementById('guardar-libro').addEventListener('click', editarLibro);

        editModal.style.display = 'block';
    }

    function editarLibro(e) {

        //ASIGNAR VALORES DEL MODEL
        const id = document.getElementById('idLibroEdit').value.trim();
        const nombre = document.getElementById('nombreLibroEdit').value.trim();
        const autor = document.getElementById('autorLibroEdit').value.trim();
        const lenguaje = document.getElementById('lenguajeLibroEdit').value.trim();
        const categorias = document.getElementById('categoriasLibroEdit').value.trim();
        const nota = parseFloat(document.getElementById('notaLibroEdit').value);

        //VALIDACIONES DEL MODEL
        if (id && nombre && autor && lenguaje && categorias && !isNaN(nota) && nota >= 1 && nota <= 5) {
            const libros = JSON.parse(localStorage.getItem('libros')) || [];
            const libroIndex = libros.findIndex(e => e.id === id);

            //BUSCAR INDEX DE NUESTRO LIBRO Y REMPLAZARLO
            if (libroIndex !== -1) {
                libros[libroIndex] = {
                    id,
                    nombre,
                    autor,
                    lenguaje,
                    categorias,
                    nota
                };

                localStorage.setItem('libros', JSON.stringify(libros));
                cargarLibros()
                editModal.style.display = 'none';
            } else {
                alert('Por favor, todos los campos tienen que estar completos (nota entre 1 y 5).');
            }
        }
    }

    //CARGAR LIBROS A PARTIR DE LOCALSTORAGE
    function cargarLibros(){

        //LIMPIAR TABLALIBROSBODY
        while (tablaLibrosBody.rows.length > 0) {
            tablaLibrosBody.deleteRow(0)
        }

        //COPIAR JSON EN FORMA DE STRING PARA LUEGO PARSEARLO A UN ARRAY Y GUARDARLO EN VARIABLE
        const libros = JSON.parse(localStorage.getItem('libros')) || [];

        //RECORRER EL ARRAY DE LIBROS UNO A UNO
        libros.forEach(libro => {

            //REPETICION DE AGREGAR FILA A LIBRO, PODRIA SER UNA FUNCION POR SI SOLA
            const fila = tablaLibrosBody.insertRow();

            fila.insertCell().textContent = libro.id;
            fila.insertCell().textContent = libro.nombre;
            fila.insertCell().textContent = libro.autor;
            fila.insertCell().textContent = libro.lenguaje;
            fila.insertCell().textContent = libro.categorias;
            fila.insertCell().textContent = libro.nota.toFixed(1);

            const celdaAcciones = fila.insertCell();
            const botonQuitar = document.createElement('button');
            botonQuitar.textContent = 'Quitar';
            botonQuitar.classList.add('btn-quitar');
            botonQuitar.dataset.libroId = libro.id;
            const botonEditar = document.createElement('button');
            botonEditar.textContent = 'Editar';
            botonEditar.classList.add('btn-editar');

            botonEditar.dataset.libroId = libro.id;
            botonEditar.dataset.nombre = libro.nombre;
            botonEditar.dataset.autor = libro.autor;
            botonEditar.dataset.lenguaje = libro.lenguaje;
            botonEditar.dataset.categorias = libro.categorias;
            botonEditar.dataset.nota = libro.nota;

            celdaAcciones.appendChild(botonQuitar);
            celdaAcciones.appendChild(botonEditar);

        })
    }
});