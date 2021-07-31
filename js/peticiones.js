const apiPrincipal = "https://servicios-js-default-rtdb.firebaseio.com/"

function obtener(url) {
    // Obtenemos los datos del curriculum
    return fetch(url)
}

function insertar(url, datos) {
    // Obtenemos de un servicios los usuarios autenticados
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(datos)
    })
}