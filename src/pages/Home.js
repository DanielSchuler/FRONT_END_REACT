import React, { Component } from "react";

//IMPORT COMPONENTS
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Articles from '../components/Articles';


class Home extends Component {


    render() {
        var buttonString = "Ir al blog"
        return (
            

            <div className="home">
                
                <Slider
                    title="Bienvenidos al master en frameworks javascript"
                    btn={buttonString}
                    size="slider-big"
                />
           
                <div className="center">
                <div id="content">
                        <h2 className="sub-header">Ultimos Articulos</h2>
                        <Articles 
                        
                        home="true"
                        />
                    </div>
                {/*<Canciones/> */}
                {/*comentareo esta seccion para que no aparesca*/}
                {/*<SeccionPruebas/>*/}
                <Sidebar />


                {/* para que el contenido de la pagina no se pase a la cabecera
            limpiaremos los flotados*/}
                <div className="clearfix"></div>
            </div>{/*END DIV CENTER*/}
            </div>

        )


    }
}


export default Home;