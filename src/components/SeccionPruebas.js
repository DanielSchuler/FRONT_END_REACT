import React,{Component} from "react";


//IMPORTAR COMPONENTES
import MiComponente from "./MiComponente"
import Peliculas from "./Peliculas"
//Declarar variables globales
var nombre = 'Daniel Schuler';
var framework = 'React'
var edad = 36




class SeccionPruebas extends Component{
  



    //var convertirMayusculas=() =>{}
    convertirMayusculas(texto, segundoTexto, tercerTexto) {
        var presentacion = (
            <div>
                <h2>Hola soy {texto} y estoy practicando {segundoTexto}</h2>
                <h3>tengo edad de {tercerTexto} años</h3>
            </div>
        );
        return presentacion
    }



    //CONCEPTO DE ESTADOS
    //Variables
    contador=0

    //PARA CREAR UN ESTADO SE DEBE CREAR UN CONSTRUCTOR
    //Forma larga de definir los estates
    /*
    constructor(props){
        super(props);
        this.state={
            contador : 0
        } 
    }*/
    //forma corta
    state={
        contador : 0
    } 
    //Forma 1 para definir metodos dentro de las clases
    //Con esta forma toca agregar el bind this a la accion en el html
    //METODO PARA SUMAR Y METODO PARA RESTAR
    
    /*
    sumar(e){
        //NO SE HACE this.,contador= this.contador+1;
        //SE USA
        this.setState({
            contador:(this.state.contador+1)
        }); 
    }
    restar(e) {
        //NO SE HACE this.,contador= this.contador-1;
        //SE USA
        this.setState({
          contador: this.state.contador - 1
        });
      }
      */

      //Forma 2 usando funcion flecha
    //Para no tener que  agregar el bind this a la accion en el html
    //METODO PARA SUMAR Y METODO PARA RESTAR
    sumar = (e)=>{
        //NO SE HACE this.,contador= this.contador+1;
        //SE USA
        this.setState({
            contador:(this.state.contador+1)
        }); 
    }
    restar= (e)=>{
        //NO SE HACE this.,contador= this.contador-1;
        //SE USA
        this.setState({
          contador: this.state.contador - 1
        });
      }
    render() {
        return(
            <section id="content">
                <h2 className="sub-header">FUNCIONES SJX BASICO</h2>
                <div>
                <p>Hola Mundo!!! </p>
                {this.convertirMayusculas(nombre, framework, edad)}
                </div>

                <h2 className="sub-header">COMPONENTES</h2>
                <section className="componentes">
                <MiComponente/>
                <Peliculas/>

                </section>
                <h2 className="sub-header">ESTADOS</h2>
                <p>Quiero que este comntador cambie cuando se oprima el boton</p>
                <p>
                {this.state.contador}
                </p>
                
                <p>

                {/*Forma 1 sin usar funcion flecha*/}
                {/*<input type="button" value="sumar" onClick={this.sumar.bind(this)}/>*/}
                {/*<input type="button" value="restar" onClick={this.restar.bind(this)}/>*/}
                {/*Forma 2usando funcion flecha*/}
                <input type="button" value="sumar" onClick={this.sumar}/>
                <input type="button" value="restar" onClick={this.restar}/>
                </p>
            </section>
        )
    }

}

export default SeccionPruebas



