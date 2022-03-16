import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { JornadaVid } from "./components/JornadaVid";
import { SemanaNacVid } from "./components/SemanaNacVid";
import { WebinarInfo } from "./components/WebinarInfo";
import { CongresoInvDoc } from "./components/CongresoInvDoc";
import { JaMexico } from "./components/JaMexico";
import { BecaDocente } from "./components/BecaDocente";
import { DiplomadoSteam } from "./components/DiplomadoSteam";
import { GOEE2021 } from "./components/goee2021";
import { GOEP2021 } from "./components/goep2021";
import { Lineamiento1 } from "./components/Lineamiento1";
import { Lineamiento2 } from "./components/Lineamiento2";
import { ManualInduccion } from "./components/ManualInduccion";
import { ManualFunciones } from "./components/ManualFunciones";
import { ManualSS } from "./components/ManualSS";
import { InfoCarreras } from "./components/InfoCarreras";
import { NormasTecnicas } from "./components/NormasTecnicas";
import { ClubCiencias } from "./components/ClubCiencias";
import { Directorio } from "./components/Directorio";
import { InfoDocente } from "./components/InfoDocente";
import { InfoDocenteAdmin } from './components/InfoDocenteAdmin';

//Exportamos este componente
export function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={
                        <div className="App">
                            <Header/>
                            <About />
                            <Contact />
                            <Footer />
                        </div>
                    } />
                    <Route exact path="/inicio" element={
                        <div className="App">
                            <Header />
                            <About />
                            <Contact />
                            <Footer />
                        </div>
                    } />
                    <Route path="/jornada" element={
                        <div className="App">
                            <JornadaVid />
                            <Footer />
                        </div>
                    } />
                    <Route path="/semananacional" element={
                        <div className="App">
                            <SemanaNacVid />
                            <Footer />
                        </div>
                    } />
                    <Route path="/webinarinfo" element={
                        <div className="App">
                            <WebinarInfo />
                            <Footer />
                        </div>
                    } />
                    <Route path="/congresoinvesdocente" element={
                        <div className="App">
                            <CongresoInvDoc />
                            <Footer />
                        </div>
                    } />
                    <Route path="/jamexico" element={
                        <div className="App">
                            <JaMexico />
                            <Footer />
                        </div>
                    } />
                    <Route path="/becadocente" element={
                        <div className="App">
                            <BecaDocente />
                            <Footer />
                        </div>
                    } />
                    <Route path="/diplomadosteam" element={
                        <div className="App">
                            <DiplomadoSteam />
                            <Footer />
                        </div>
                    } />
                    <Route path="/goee2021" element={
                        <div className="App">
                            <GOEE2021 />
                            <Footer />
                        </div>
                    } />
                    <Route path="/goep2021" element={
                        <div className="App">
                            <GOEP2021 />
                            <Footer />
                        </div>
                    } />
                    <Route path="/lineamientocomite" element={
                        <div className="App">
                            <Lineamiento1 />
                            <Footer />
                        </div>
                    } />
                    <Route path="/lineamientopracticas" element={
                        <div className="App">
                            <Lineamiento2 />
                            <Footer />
                        </div>
                    } />
                    <Route path="/manualinduccion" element={
                        <div className="App">
                            <ManualInduccion />
                            <Footer />
                        </div>
                    } />
                    <Route path="/manualfunciones" element={
                        <div className="App">
                            <ManualFunciones />
                            <Footer />
                        </div>
                    } />
                    <Route path="/manualss" element={
                        <div className="App">
                            <ManualSS />
                            <Footer />
                        </div>
                    } />
                    <Route path="/informacioncarreras" element={
                        <div className="App">
                            <InfoCarreras />
                            <Footer />
                        </div>
                    } />
                    <Route path="/normastecnicas" element={
                        <div className="App">
                            <NormasTecnicas />
                            <Footer />
                        </div>
                    } />
                    <Route path="/clubciencias" element={
                        <div className="App">
                            <ClubCiencias />
                            <Footer />
                        </div>
                    } />
                    <Route path="/directorio" element={
                        <div className="App">
                            <Directorio />
                            <Footer />
                        </div>
                    } />
                    <Route path="/infodocente" element={
                        <div className="App">
                            <InfoDocente />
                            <Footer />
                        </div>
                    } />
                    <Route path="/infodocenteadmin" element={
                        <div className="App">
                            <InfoDocenteAdmin />
                            <Footer />
                        </div>
                    } />
                </Routes>
            </main>
        </Router>
    );
}