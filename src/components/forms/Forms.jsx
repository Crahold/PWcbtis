import React, { useState } from "react";

export const FormsMaestros = ({ maestro, setMaestro, setActualizarLista }) => {

    var nombrefoto = [];

    //Trabajando con imagenes.
    const [file, setFile] = useState(null)

    function animar(){
        document.getElementById('Progress').classList.toggle ('progresoFinal');
        document.getElementById('Progress').value = "25";
        document.getElementById('Progress').value = "50";
        document.getElementById('Progress').value = "75";
        document.getElementById('Progress').value = "100";
    }

    function animarvolver(){
        document.getElementById('Progress').classList.toggle ('progresoFinal');
        document.getElementById('Progress').value = "0";
    }

    const SeleccionarArchivo = e => {
        setFile(e.target.files[0])

        animar()
    }

    const GuardarArchivo = () => {
        if (!file) {
            alert('Tienes que escoger algún archivo.')
            return
        }

        animarvolver()

        const paraDatos = new FormData()
        paraDatos.append('imagen', file)

        fetch('https://apiserver.cbtis106.edu.mx/api/editarimagen/1', {
            method: 'PUT',
            body: paraDatos
        })
        .then(res => res.text())
        .then(data => {
            nombrefoto = data
            var linkfoto = ('images/fotosmaestros/' + nombrefoto)
            document.getElementById('FOTO').value = linkfoto;
            maestro.foto = document.getElementById('FOTO').value;
        })
            /*// aqui se almacena el nombre de la foto gardada.
            nombrefoto = data

            var linkfoto = ('../../public/images/fotosmaestros' + nombrefoto)

            setMaestro({
                foto: linkfoto
            })
        })*/
        .catch(err => {
            console.errors(err)
        })

        // Eliminar la imagen al mandarla.
        setFile(null)

        document.getElementById('Foto').value = null;
    }
    

    // Sin archivos
    const HacerCambios = e => {
        setMaestro({
            ...maestro, // Va guardando los valores (si no lo ponemos solo toma el valor de un textbox a la vez).
            [e.target.name]: e.target.value //Obtiene los valores que se van escribiendo en los textbox.
        })
    }

    const AgregarMaestro = () => {
        // Validación de los datos.
        if(maestro.nombres === '' || maestro.apellidoPat === '' || maestro.academia === '' || maestro.correoElec === '') {
            alert(' Los campos: Nombres, Apellido Paterno, Academia, Correo Electrónico y Grado Estudios. Son obligatorios.')
            return
        }

        // Aqui va la consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(maestro)
        }
        fetch('https://apiserver.cbtis106.edu.mx/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        // Reiniciando el state del maestro (borrando los datos guardados de los textbox).
        setMaestro({
            nombres: '',
            apellidoPat: '',
            apellidoMat: '',
            academia: '',
            materiauno: '',
            materiados: '',
            materiatres: '',
            correoElec: '',
            gradoEstudios: '',
            foto: ''
        })
    }

    // Se pide el idMaestro para poder editarlo
    var idMaestro = document.getElementById('IDMAESTRO');

    const ActualizarMaestro = id => {
        // Validación de los datos.
        if(maestro.nombres === '' || maestro.apellidoPat === '' || maestro.academia === '' || maestro.correoElec === '') {
            alert(' Los campos: Nombres, Apellido Paterno, Academia, Correo Electrónico y Grado Estudios. Son obligatorios.')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(maestro)
        }
        fetch('https://apiserver.cbtis106.edu.mx/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        // Reiniciando el state del maestro (borrando los datos guardados de los textbox).
        setMaestro({
            nombres: '',
            apellidoPat: '',
            apellidoMat: '',
            academia: '',
            materiauno: '',
            materiados: '',
            materiatres: '',
            correoElec: '',
            gradoEstudios: '',
            foto: ''
        })

        // Decir que se ha actualizado la tabla
        setActualizarLista(true)
    }

    // Los name's en los inputs deben de ser iguales que en la base de datos.

    return (
        <form onSubmit={AgregarMaestro}>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="Nombres">Nombre(s):</label>
                    <input type="text" onChange={HacerCambios} name="nombres" id="Nombres" />
                    <input type="hidden" id="IDMAESTRO" />
                </div>
                <div className="col-3">
                    <label htmlFor="Apellidopat">Apellido Paterno:</label>
                    <input type="text" onChange={HacerCambios} name="apellidoPat" id="Apellidopat" />
                </div>
                <div className="col-3">
                    <label htmlFor="Apellidomat">Apellido Materno:</label>
                    <input type="text" onChange={HacerCambios} name="apellidoMat" id="Apellidomat" />
                </div>
                <div className="col-3">
                    <label htmlFor="Academia">Academia:</label>
                    <input type="text" onChange={HacerCambios} name="academia" id="Academia" />
                </div>
                <div className="col-3">
                    <label htmlFor="Materiauno">Materia 1:</label>
                    <input type="text" onChange={HacerCambios} name="materiauno" id="Materiauno" />
                </div>
                <div className="col-3">
                    <label htmlFor="Materiados">Materia 2:</label>
                    <input type="text" onChange={HacerCambios} name="materiados" id="Materiados" />
                </div>
                <div className="col-3">
                    <label htmlFor="Materiatres">Materia 3:</label>
                    <input type="text" onChange={HacerCambios} name="materiatres" id="Materiatres" />
                </div>
                <div className="col-3">
                    <label htmlFor="Correo">Correo Electrónico:</label>
                    <input type="email" onChange={HacerCambios} name="correoElec" id="Correo" />
                </div>
                <div className="col-6">
                    <label htmlFor="Gradestudios">Grado de Estudios:</label>
                    <input type="text" onChange={HacerCambios} name="gradoEstudios" id="Gradestudios" />
                </div>
                <div className="col-6">
                    <label htmlFor="Foto">Imagen:</label>
                    <input type="file" onChange={SeleccionarArchivo} name="foto" id="Foto" />
                    <progress id="Progress" className="progresoInicio animacion" value="0"/>
                    <input type="hidden" id="FOTO" />
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                            <button type="submit" className="BotonAgregar">Agregar</button>
                        </div>
                        <div className="col-3">
                            <button type="button" onClick={() => ActualizarMaestro(idMaestro.value)} >Editar</button>
                        </div>
                        <div className="col-3">
                            <button type="button" onClick={GuardarArchivo} >Confirmar Foto</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}