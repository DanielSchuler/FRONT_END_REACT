import React, { Component } from 'react';


//IMPORT COMPONENTES
//segunda forma de presentar el listado de peliculas usando padre e hijo
import Cancion from '../components/Cancion';

import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';


class Canciones extends Component {

    //quero mostrar en este componente un listado de canciones o fotos de las canciones
    constructor(props) {
        super(props);

        this.state = {
            canciones: [], // Initialize with an empty array
            user: 'Daniel Schuler',
            favorita: {},
        };
    }

    //INICIALIZAR LAS PROPIESDADES DEL ESTATE CON EL METODO componentWillMount
    componentDidMount() {
        // Simulate fetching data or any side effect
        setTimeout(() => {
            this.setState({
                canciones: [
                    { title: 'Dance of Death ', artist: 'Iron Maiden', origen: 'England', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Iron_Maiden-Dance_of_Death.jpg/220px-Iron_Maiden-Dance_of_Death.jpg' },
                    { title: 'Rud Boy ', artist: 'Dub Inc', origen: 'France', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdvJxkixfXwECL1xjJiw1EHt0J3N6Rkl14ij0FtQPEQ&s' },
                    { title: 'Entre Canibales ', artist: 'Soda Estereo', origen: 'Argentina', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2p-j4a9bIEl-gVse7yxu9MTN-moflrFs5t1VwpJr6g&s' }
                ],
            });
        }, 23); // Simulate a delay 0.023 segundos
    }




    //IMPORTANTE DEL KEY
    //METODOS QUE ENVIAN LA INFORMACION DEL PADRE AL HIJO
    //METODO PARA CAMBIAR EL TITULO DE LA PELICULA
    cambiarTitulo = () => {
        var { canciones } = this.state;
        //aca se ha especificado cual es el indice
        canciones[0].title = "Aces High";
        //se puede hacer una busqueda con indice aleatorio
        var random = Math.floor(Math.random() * 3)
        canciones[random].title = "titulo random";

        this.setState({
            canciones: canciones
        });
    }
    cambiarTituloRandom = () => {
        var { canciones } = this.state;

        //se puede hacer una busqueda con indice aleatorio
        var random = Math.floor(Math.random() * 3)
        canciones[random].title = "titulo random";

        this.setState({
            canciones: canciones
        });
    }
    //METODOS QUE ENVIAN LA INFORMACION DEL HIJO AL PADRE
    favorito = (cancion_select, indice) => {
        console.log("Favorita marcada");
        console.log(cancion_select, indice);
        this.setState({
            favorita: cancion_select
        });
    }




    render() {

        var cancion_favorita;
        if (this.state.favorita.title) {
            cancion_favorita = (
                <p className="favorita">
                    <strong>La Cancion favorita es:  </strong>
                    <span>{this.state.favorita.title}</span>
                </p>
            )
        } else {
            cancion_favorita = (
                <p>No hay cancion favorita</p>
            )

        }

        return (

            <div className='canciones'>
                {/*No se envia la propiedad de boton btn={buttonString}*/}
                <Slider
                    title="Formulario"
                    size="slider-small"

                />
                <div className="center">
                    <div id="content">
                    <h2 className='sub-header'>Canciones</h2>
                    <p>Seleccion de las canciones preferidas de {this.state.user}</p>

                    <p>
                        <button onClick={this.cambiarTitulo}>Cambiar titulo iron maiden</button>

                    </p>
                    <p>
                        <button onClick={this.cambiarTituloRandom}>Cambiar titulo Aleatorio</button>
                    </p>

                    {cancion_favorita}



                    <div id="articles" className="canciones">
                        {/*para listar las peliculas se podria hacer de dos formas mirar en el README linea 186 */}
                        {this.state.canciones.map((cancion, i) => {





                            return (
                                <Cancion
                                    key={i}
                                    cancion={cancion}
                                    indice={i}
                                    marcarFavorito={this.favorito}
                                />
                            )

                        })
                        }





                    </div>


                </div>
                <Sidebar 
                        blog="false"
                    />

                <div className="clearfix"></div>
            </div>{/*END DIV CENTER*/ }
            </div >


        )
    }
}


export default Canciones