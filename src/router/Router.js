


import React from "react";
//import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';


import SeccionPruebas from "../components/SeccionPruebas";
import MiComponente from "../components/MiComponente";
import NotFound from "../components/NotFound";


// IMPORTAR COMPONENTES
import Header from '../components//Header';


import Footer from '../components/Footer';

//IMPORT DE COMPONENTES PAGINAS

import Home from "../components/Home";
import Blog from "../components/Blog";
import Formulario from "../components/Formulario";
import Canciones from "../components/Canciones";
import Search from "../components/Search";
import Article from "../components/Article";
import CreateArticle from "../components/CreateArticle";
//import SearchWrapper from "../components/Search";








/* otra forma de definir una ruta sin necesidad de tener un componente*/
function TerceraRuta() {
    return (
        <h1>This is the Tercera Ruta</h1>
    );
}
/* se pueden enviar datos sin necesidad de haber creado un componentnte */
function CuartaRuta() {
    return (
        <React.Fragment>
            <h1>Esta es la cuarta ruta con datos incluidos</h1>
            <MiComponente saludo="Hola Amigo Saludo desde el router" />
        </React.Fragment>
    );
}
/* Recoger parametros desde una url */
function QuintaRuta() {
    const { id } = useParams();

    return (
        <div id="content">
            <h2 className="sub-header">Pagina de prueba</h2>
            <p>Received ID from URL: {id}</p>
        </div>
    );
}

/* Recoger parametros desde una url */


function SextaRuta() {
    const { nombre, apellidos } = useParams();
    let mensaje = "";

    if (nombre) {
        mensaje += nombre;
    }

    if (apellidos) {
        mensaje += ' ' + apellidos;
    }

    if (!nombre && !apellidos) {
        mensaje = 'no se proporcionaron datos del usuario';
    }

    return (
        <div id="content">
            <h2 className="sub-header">Pagina de prueba</h2>
            <p>Datos recibidos {mensaje}</p>
        </div>
    );
}

/*
function LeerMas() {
    return (
        <div>

            
            <h1>Pagina individual</h1>
            <div className="clearfix"></div>


        </div>
    );
}

*/




function Router() {


    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* CONFIGURACION DE RUTAS Y PAGINAS */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/article/:id" element={< Article />} />
                {/*<Route path="/blog/busqueda/:search" element={<SearchWrapper />} />*/}
                <Route path="/blog/busqueda/:search" element={<Search />} />
                <Route path="/blog/crear" element={<CreateArticle />} />
                


                < Route path="/formulario" element={< Formulario />} />
                < Route path="/canciones" element={< Canciones />} />
                < Route path="/primera-ruta" element={< SeccionPruebas />} />
                < Route path="/segunda-ruta" element={< MiComponente />} />

                < Route path="/tercera-ruta" element={< TerceraRuta />} />
                < Route path="/cuarta-ruta" element={< CuartaRuta />} />
                < Route path="/quinta-ruta/:id" element={< QuintaRuta />} />
                < Route path="/sexta-ruta/:nombre?/:apellidos?" element={< SextaRuta />} />

                < Route path="*" element={< NotFound />} />
            </Routes >


            <Footer />
        </BrowserRouter >
    );
}

export default Router;

