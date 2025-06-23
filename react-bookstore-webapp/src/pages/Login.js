import React from 'react'

export function Login() {
    return  (
        <div>
            <div className="login">
                <h2>Iniciar Sesión</h2>
                <form id="formulario-login">
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required/><br/>

                    <label htmlFor="contrasena">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" required/><br/>

                    <button type="submit">Ingresar</button>
                </form>
                <div id="errores-login"></div>
            </div>
        </div>
    )
}

function validarLogin(event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const erroresDiv = document.getElementById("errores-login");
    erroresDiv.innerHTML = "";

    const errores = [];

    if (contrasena.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.");
    }

    if (errores.length > 0) {
        errores.forEach(err => {
            const p = document.createElement("p");
            p.textContent = err;
            p.style.color = "red";
            erroresDiv.appendChild(p);
        });
        return;
    }

    alert("Inicio de sesión exitoso (simulado)");
    document.getElementById("formulario-login").reset();
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("formulario-login");
    if (loginForm) {
        loginForm.addEventListener("submit", validarLogin);
    }
});