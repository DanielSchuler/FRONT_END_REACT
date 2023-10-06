
//FORMA 1 DE CARGAR UN COMPONENTE REACT
/*import React from "react";
class MiComponente extends React.Component {


    render(){
        return(
            <h1>hola, soy el primer componente llamado MiComponente</h1>
        )
    }
}

export default MiComponente;
*/

//FORMA 2 DE CARGAR UN COMPONENTE REACT
import React,{Component} from "react";


/* cada return solo puede devolver una etiqueta. si quiero enviar
    enviar mas de una etiqueta debo englobarlo en una general
    formas de solucionar el error 

    1 crear un react fragment  <React.Fragment> </React.Fragment>que es una etiqueta comodin que no se vera reflejado en el codigo 
    2 englobarlo en un div con un className
    3 crear un objeto javascript como 
*/


class MiComponente extends Component {


    render(){

        let receta={
            nombre:"Pizza",
            ingredientes:["Tomate","Queso","Jamon Cocina"],
            calorias:400
        }
        return(
            <React.Fragment>
             {/*mensaje desde el router */}
            {this.props.saludo &&
            <div>
                <h3>se ha generado este dato desde el router y se envio a este componente</h3>
                <p>{this.props.saludo}</p>
                <hr />
            </div>
            
            
            }

            <h2> primera forma  englobando en un React.Fragment</h2>
            <h3>hola, soy el primer componente llamado MiComponente</h3>
            <h4>Esta es una prueba de un segundo nodo html </h4>
            <hr />
            
            <div className="mi-componente">
            <h2> segunda forma  englobando en un div</h2>
            <h3>hola, soy el primer componente llamado MiComponente</h3>
            <h4>Esta es una prueba de un segundo nodo html </h4>
            <hr />
            </div>

            <h2> tercera forma usando un objeto javascript para las propiedades y luego concatenarlo en el html</h2>
            <h3> Receta {receta.nombre}</h3>
            <h4>{"Calorias " + receta.calorias}</h4>
            
            
            
            <p>Hago una lista no ordenada y un bucle usando la funcion map</p>
            <p>se maneja de esta  manera`receta.ingredientes.map((ingrediente,i)=`</p>

            <ul>
            {
                receta.ingredientes.map((ingrediente,i)=>{
                    console.log(ingrediente);
                    return(
                        <li key = {i}>
                            {ingrediente}
                        </li>
                    )
                })
            }
            </ul>
            <hr />
            </React.Fragment>
        )
    }
}

export default MiComponente;