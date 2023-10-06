import React, { Component } from 'react';

// IMPORTAR ASSETS
//import logo from './../assets/images/logo.svg';
import logo from './../assets/images/react-logo.png';

//IMPORTAR NAVLINK PARA LA NAVEGACION
import { Link, useMatch } from 'react-router-dom'



function HeaderLink({ to, children }) {
    const isActive = useMatch(to);
  
    return (
      <Link to={to} className={isActive ? 'active' : ''}>
        {children}
      </Link>
    );
  }






class Header extends Component {


    render() {

        return (
            <header id="header">
                {/*Cabecera de la pagina*/}
                <div className="center">
                    {/*logo*/}
                    <div id="logo">
                        {/*<img src="assets/images/react-logo.png" className="app-logo" alt="app-logo"/>*/}
                        <img src={logo} className="app-logo" alt="app-logo" />
                        <span id="brand">
                            <strong>Master</strong>Frameworks

                        </span>
                        <br />
                        <span id="curso">

                            <em><strong>React</strong></em>
                        </span>
                    </div>
                    {/*Menu*/}
                    <nav id="menu">
                        <ul>
                        

                            <li>
                                {/*<a href="index.html">Inicio</a>*/}
                                <HeaderLink to="/home" >Inicio</HeaderLink>
                        </li>

                        <li>
                            {/*<a href="blog.html">Blog</a>*/}
                            <HeaderLink to="/blog" >Blog</HeaderLink>
                        </li>
                        <li>
                            {/*<a href="formulario.html">Formulario</a>*/}
                            <HeaderLink to="/formulario" >Formulario</HeaderLink>
                        </li>
                        <li>
                            {/*<a href="#">Pagina 1 </a>*/}
                            <HeaderLink to="/canciones" >Canciones</HeaderLink>
                        </li>
                        <li>
                            {/*<a href="#">Pagina 2</a>*/}
                            <HeaderLink to="/pruebas" >Pruebas</HeaderLink>
                        </li>
                    </ul>
                </nav>

                {/* para que el contenido de la pagina no se pase a la cabecera
                  limpiaremos los flotados */}
                <div className="clearfix"></div>
            </div>
          </header >
        )
    }

}

export default Header;