import React, { Component } from "react";


//IMPORT COMPONENTS
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';



class Blog extends Component {
    //Creao una propiedad state para poder manejar los datos que me llegaron del backend
    state = {
        articles: {},
        status: 'null'
    }

    render() {

        
        return (


            <div className="blog">
                {/*No se envia la propiedad de boton btn={buttonString}*/}
                <Slider
                    title="Blog"
                    size="slider-small"

                />

                <div className="center">
                    <div id="content">
                        {/*Listado de articulos por node que vendran del API*/}

                        {/*
                         
                         */}
                         <Articles/>
                        

                    </div>


                    <Sidebar
                        blog="true"
                    />


                    {/* para que el contenido de la pagina no se pase a la cabecera
            limpiaremos los flotados*/}
                    <div className="clearfix"></div>
                </div>{/*END DIV CENTER*/}
            </div>

        )


    }
}


export default Blog;