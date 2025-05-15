// Script de acceso rapido para añadir pestañas al nav

const container = document.getElementById("Pestañas");
const header = '<nav id="Pestañas">\n' +
    '    <a href="index.html">Inicio</a>\n' +
    '    <a href="idiomas.html">Idiomas</a>\n' +
    '    <a href="novedades.html">Novedades</a>\n' +
    '    <a href="populares.html">Mas Populares</a>\n' +
    '    <a href="contacto.html">Contacto</a>\n' +
    '    <a href="login.html">Inicio de Sesion</a>\n' +
    '    <a href="administracion.html">Administracion</a>\n' +
    '</nav>'

container.innerHTML = header;