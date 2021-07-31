function datoscv() {
    //document.getElementById("mensaje").style.display = "none"
    obtener(apiPrincipal + "cvdat.json")
        .then(datos => datos.json())
        .then(respuesta => {
            console.log(Object.entries(respuesta))
            if (respuesta == null) {
                document.getElementById("mensaje").style.display = "block"
            } else {
                document.getElementById("curriculum").innerHTML = ""
                    //console.log(Object.entries(respuesta.nombre))
                    //                var nombre = object.entries(respuesta)
                Object.entries(respuesta).forEach(element => {
                    var datos_cv = '<!-- Sección de información principal -->' +
                        '<section>' +
                        '<div class="row bg-white">' +
                        '<div class="col-9">' +
                        '<div class="row">' +
                        '<h1 class="text-end text-uppercase"><strong>' + element[1].nombre + ' ' + element[1].apellidos + '</strong></h1>' +
                        '<h4 class="text-end "><strong>' + element[1].puesto + '</strong></h4>' +
                        '<p class="texto-justificado ">' + element[1].presentacion + '</p>' +
                        '</div>' +
                        '<div class="row bg-plomo">' +
                        '<div class="col text-center"><br>' +
                        '<i class="bi bi-telephone-fill"></i>' +
                        '<p class="fs-6">' + element[1].telefono + '</p><br>' +
                        '</div>' +
                        '<div class="col text-center">' +
                        '<br><i class="bi bi-envelope"></i>' +
                        '<p class="fs-6">' + element[1].mail + '</p><br>' +
                        '</div>' +
                        '<div class="col text-center"><br>' +
                        '<i class="bi bi-geo-alt-fill"></i>' +
                        '<p class="fs-6">' + element[1].direccion + '</p><br>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-3 text-end">' +
                        '<img src="' + element[1].foto + '" class="img-fluid" alt="Mi Fotografia">' +
                        '</div>' +
                        '</div>' +
                        '</section>' +
                        '<!-- Sección de información programas -->' +
                        '<section>' +
                        '<div class="row bg-secondary text-white">' +
                        '<div class="col text-center valign-center text-uppercase">' +
                        '<p><u><strong><h3>Programas</h3></strong></u></p>' +
                        '+</div>' +
                        '<div class="col"><br>'
                    var filas = 1
                    Object.entries(element[1].programas).forEach(item => {
                            var circulos = ''
                            for (var i = 0; i < 5; i++) {
                                if (i < item[1]) {
                                    circulos = circulos + '<i class="bi bi-circle bg-success"></i>'
                                } else {
                                    circulos = circulos + '<i class="bi bi-circle-fill "></i>'
                                }
                            }
                            datos_cv = datos_cv + '<div class="row">' +
                                '<div class="col">' +
                                '<h5><strong>' + item[0] + '</strong></h5>' +
                                '</div>' +
                                '<div class="col">' + circulos + '</div>' +
                                '</div>'
                            if (filas % 3 == 0) {
                                datos_cv = datos_cv + '<br></div>' +
                                    '<div class="col"><br>'
                            }
                            filas += 1
                        }) //fin programas
                    datos_cv = datos_cv + '<br></div>' +
                        '</div>' +
                        '</section>' +
                        '<div class="row">' +
                        '<!-- Sección de esperiencia profesional -->' +
                        '<div class="col-9">' +
                        '<section>' +
                        '<div class=" text-uppercase">' +
                        '<p><ins><strong><h3>Experiencia Profesional</h3></strong></ins></p>' +
                        '</div>'
                    Object.entries(element[1].experiencia).forEach(expeitem => {
                            //console.log(expeitem)
                            datos_cv = datos_cv + '<div class="row">' +
                                '<div class="col-3">' +
                                '<div class="fs-5 texto-plomo">De ' + expeitem[1].fecha_ini + ' a ' + expeitem[1].fecha_fin + '</div>' +
                                '<div class="fs-5 texto-plomo">' + expeitem[1].ubicacion + '</div>' +
                                '</div>' +
                                '<div class="col-6">' +
                                '<div class="fs-5 text-uppercase"><strong>' + expeitem[1].empresa + '</strong></div>' +
                                '<div class="fs-6 texto-plomo">' + expeitem[1].cargo + '</div>' +
                                '<div class="fs-6">' +
                                '<p>Tareas Realizadas: ' + expeitem[1].funciones + '</p>' +
                                '</div>' +
                                '</div>' +
                                '</div>'
                        }) // fin experiencia
                    datos_cv = datos_cv + '<!-- Sección de referencias -->' +
                        '<div class="col-9 text-uppercase">' +
                        '<p><u><strong><h3>Referencias</h3></strong></u></p>' +
                        '</div>' +
                        '<div class="row">'
                    Object.entries(element[1].referencias).forEach(refitem => {
                            //console.log(refitem)
                            datos_cv = datos_cv + '<div class="col-4">' +
                                '<div class="fs-6"><strong>' + refitem[1].nombre + '</strong></div>' +
                                '<div class="fs-6">' + refitem[1].empresa + '|' + refitem[1].cargo + '</div>' +
                                '<div class="fs-6">Telefono ' + refitem[1].telefono + '</div>' +
                                '<div class="fs-6">' + refitem[1].correo + '</div>' +
                                '</div>'
                        }) //fin referencias
                    datos_cv = datos_cv + '</section> </div>' +
                        '    <!-- Sección de estudios e idiomas (CESAR)-->' +
                        '<div class="col-3 bg-plomo">' +
                        '<section>' +
                        '<div class="col-3 text-uppercase">' +
                        '<p><u><strong><h3>Idiomas</h3></strong></u></p>' +
                        '</div>'
                    Object.entries(element[1].idiomas).forEach(itemidioma => {
                            console.log(itemidioma)
                            datos_cv = datos_cv + '<div class="row col-3">' +
                                '<div class="col"><strong>' + itemidioma[0] + '</strong></div>' +
                                '<div class="col">' + itemidioma[1] + '</div>' +
                                '</div>'
                        }) //fin idiomas
                    datos_cv = datos_cv + '<div class="col-3 text-uppercase">' +
                        '<p><u><strong><h3>Estudios</h3></strong></u></p>' +
                        '</div>'

                    //datos_cv = datos_cv + '<div class="row">' +
                    document.getElementById("curriculum").innerHTML = document.getElementById("curriculum").innerHTML + datos_cv
                });



                document.getElementById("curriculum").style.display = "block"
            }
        }).catch(error => {
            console.warn(error)
        })
} //fin funcion cvdatos