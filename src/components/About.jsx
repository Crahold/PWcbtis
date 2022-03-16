import React from "react";

export function About() {
    return (
        <section id="about">
            <div className='section1'>
                <div className="row">
                    <div className="twelve columns main-col">
                        <div className="row">
                            <div className="columns texto">
                                <h2 className="h2Noticias">¡TE INVITAMOS A PARTICIPAR COMO JOVEN LÍDER PARA
                                    LA PREVENCIÓN A COVID-19 EN MÉXICO Y FORMAR EL COMITÉ NACIONAL
                                    DE JÓVENES EN PREVENCIÓN A COVID-19!</h2>
                                <h3 className='h3Noticias'>FORMA PARTE DEL COMITÉ NACIONAL DE JÓVENES EN PREVENCIÓN A COVID-19</h3>
                                <a className="Boton3" href="/#">INFORMACIÓN</a>
                            </div>
                            <div className="columns documento">
                                <iframe src="https://docs.google.com/viewer?srcid=1W2kTYP47H-wqzWo-8HRaWlKV4_C1Apci&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="500px" height="300px"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className="row">
                    <div className="twelve columns main-col">
                        <div className="row">
                            <div className="columns texto2" align="center">
                                <h3 className="h3Noticias">Comisión Estatal para la Planeación de la Educación
                                    Superior en el Estado de Oaxaca (COEPES)</h3>
                                <iframe src="https://docs.google.com/viewer?srcid=1DBMdO7T6WeGU1cFQZ1YeEIaKtjdBLRhU&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="500px" height="650px"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}