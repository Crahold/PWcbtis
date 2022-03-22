import React, { useEffect, useState } from "react";
/*import { useEffect, useState } from "react/cjs/react.production.min";*/
import Navegacion from "./navegacion/Navegacion.js";
import { TablaMaestros } from "./forms/TablaAdminDocente.jsx";
import { FormsMaestros } from "./forms/Forms.jsx";

export function InfoDocenteAdmin() {

    const [maestro, setMaestro] = useState({
        nombres: '',
        apellidoPat: '',
        apellidoMat: '',
        academia: '',
        materiauno: '',
        materiados: '',
        materiatres: '',
        correoElec: '',
        gradoEstudios: ''
    })

    const [maestros, setMaestros] = useState([])

    // Para actualizar página cuando se elimine un maestro.
    const [actualizarLista, setActualizarLista] = useState(false)


    useEffect(() => {
        const getMaestros = () => {
            fetch('https://apiserver.cbtis106.edu.mx/api/')
            .then(res => res.json())
            .then(res => setMaestros(res))
        }
        getMaestros()
        setActualizarLista(false)
    }, [actualizarLista]) // <- se agrega "actualizarLista" para cuando se elimine un maestro se actualice la página.

    return (
        <body>
            <Navegacion />
            <div id="infodocenteadmin">
                <div className="container">
                    <div className="row">
                        <FormsMaestros maestro={maestro} setMaestro={setMaestro} setActualizarLista={setActualizarLista}/>
                    </div>
                    <hr />
                    <TablaMaestros maestros={maestros}  setMaestro={setMaestro} setActualizarLista={setActualizarLista}/>
                </div>
            </div>
        </body>
    );
}

export default InfoDocenteAdmin;