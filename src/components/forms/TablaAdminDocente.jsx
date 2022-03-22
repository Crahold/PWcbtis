import React from "react";

export const TablaMaestros = ({ maestros, setMaestro, setActualizarLista }) => {

    const EliminarMaestro = id => {
        const requestInit = {
            method: 'DELETE',
        }
        fetch('https://apiserver.cbtis106.edu.mx/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        // Decir que se ha actualizado la tabla
        setActualizarLista(true)
    }

    // Mandar valores a textbox para editar
    function MandarValores(id)  {
        var datos = [];
        var datosmaestro =[];

        var txtboxIdmaestro = document.getElementById('IDMAESTRO');
        var txtboxNombres = document.getElementById('Nombres');
        var txtboxApellidopat = document.getElementById('Apellidopat');
        var txtboxApellidomat = document.getElementById('Apellidomat');
        var txtboxAcademia = document.getElementById('Academia');
        var txtboxMateriauno = document.getElementById('Materiauno');
        var txtboxMateriados = document.getElementById('Materiados');
        var txtboxMateriatres = document.getElementById('Materiatres');
        var txtboxCorreo = document.getElementById('Correo');
        var txtboxGradestudios = document.getElementById('Gradestudios');
        var txtboxFoto = document.getElementById('FOTO');

        fetch('https://apiserver.cbtis106.edu.mx/api/' + id)
        .then(res => res.json())
        .then(data => {
            datos = data
            datosmaestro = datos[0]

            txtboxIdmaestro.value = datosmaestro.idMaestro;
            txtboxNombres.value = datosmaestro.nombres;
            txtboxApellidopat.value = datosmaestro.apellidoPat;
            txtboxApellidomat.value = datosmaestro.apellidoMat;
            txtboxAcademia.value = datosmaestro.academia;
            txtboxMateriauno.value = datosmaestro.materiauno;
            txtboxMateriados.value = datosmaestro.materiados;
            txtboxMateriatres.value = datosmaestro.materiatres;
            txtboxCorreo.value = datosmaestro.correoElec;
            txtboxGradestudios.value = datosmaestro.gradoEstudios;
            txtboxFoto.value = datosmaestro.foto;

            setMaestro({
                nombres: datosmaestro.nombres,
                apellidoPat: datosmaestro.apellidoPat,
                apellidoMat: datosmaestro.apellidoMat,
                academia: datosmaestro.academia,
                materiauno: datosmaestro.materiauno,
                materiados: datosmaestro.materiados,
                materiatres: datosmaestro.materiatres,
                correoElec: datosmaestro.correoElec,
                gradoEstudios: datosmaestro.gradoEstudios,
                foto: datosmaestro.foto
            })
        });
    }

    return (
        <div className="row tablamaestros">
            <table className="default">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Academia</th>
                    </tr>
                </thead>

                <tbody>
                    {maestros.map((maestro, index) => (
                        <tr key = {maestro.idMaestro}>
                            <td>{maestro.nombres}</td>
                            <td>{maestro.apellidoPat}</td>
                            <td>{maestro.apellidoMat}</td>
                            <td>{maestro.academia}</td>
                            <td> <button onClick={() => MandarValores(maestro.idMaestro)} className="botonEditar">Editar</button> </td>
                            <td> <button onClick={() => EliminarMaestro(maestro.idMaestro)} className="botonEliminar">Eliminar</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}