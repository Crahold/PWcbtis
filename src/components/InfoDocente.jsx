import React, { useEffect, useState } from "react";
/*import { useEffect, useState } from "react/cjs/react.production.min";*/
import Navegacion from "./navegacion/Navegacion.js";
import axios from "axios";

export function InfoDocente() {
    const [maestros, setMaestros] = useState([])

    const loadData = () => {
        axios.get('http://localhost:4000/api/6')
        .then(result => {
            setMaestros(result.data)
        })
    }

    useEffect(loadData, [])

    return (
        <body>
            <Navegacion />
            {maestros.map((maestro, index) => (
                <div id="infodocente">
                    <div className='section1'>
                        <div className="row">
                            <div className="twelve columns main-col">
                                <div className="row">
                                    <div className="columns texto2" align="center">
                                        <h1>{maestro.nombres} {maestro.apellidoPat} {maestro.apellidoMat}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section2'>
                        <div className="row">
                            <div className="twelve columns main-col">
                                <div className="row" align="center">
                                    <div className="columns personas">
                                        <div className="contenido" aling="center">
                                            <img src={(maestro.foto)} alt="Foto"/>
                                        </div>
                                    </div>
                                    <div className="columns informacion">
                                        <div className="contenidoinfo" align="left">
                                            <p><identif>Academia:</identif> &nbsp; {maestro.academia}.</p>
                                            <br />
                                            <identif>Materias Impartidas:</identif>
                                            <ul>
                                                <li>{maestro.materiauno}</li>
                                                <li>{maestro.materiados}</li>
                                                <li>{maestro.materiatres}</li>
                                            </ul>
                                            <p><identif>Estudios:</identif> &nbsp; {maestro.gradoEstudios}</p>
                                            <br />
                                            <p><identif>Correo:</identif> &nbsp; {maestro.correoElec}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </body>
    );
}