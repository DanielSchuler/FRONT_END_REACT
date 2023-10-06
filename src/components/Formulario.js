import React, { Component } from "react";

//IMPORT COMPONENTS
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';



class Formulario extends Component {

    //para prevenir que la pagina se recargue al enviar el formulario se deve enviar el evento
    //como un e y poner le metodo e.preventDefault

    //para poder recibir la informacion de los campos del formulario se usa la propiedad ref
    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef=React.createRef();
    generoHombreRef=React.createRef();
    generoMujerRef=React.createRef();
    generoOtroRef=React.createRef();

    state={
        user:{}
    }


    recibirFormulario = (e) => {
        e.preventDefault();
        let genero = "";
      
        if (this.generoHombreRef.current.checked) {
          genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
          genero = this.generoMujerRef.current.value;
        } else if (this.generoOtroRef.current.checked) {
          genero = this.generoOtroRef.current.value;
        }
      
        var user = {
          nombre: this.nombreRef.current.value,
          apellido: this.apellidoRef.current.value,
          bio: this.bioRef.current.value,
          genero: genero,
        };

        this.setState({user: user});
      
        console.log("formulario enviado");
        console.log(this.nombreRef.current.value);
        console.log(this.apellidoRef.current.value);
        console.log(this.bioRef.current.value);
        console.log(genero); // Updated to use the determined 'genero' variable
      }
      
      

    render() {
        //igual que en python para no usar el this todo el tiempo puedo crear unas variables
        if (this.state.user){
            var user=this.state.user
        }
        return (

            

            <div className="formulario" >
                
                <Slider
                    title="Formulario"
                    size="slider-small"

                />

                <div className="center">
                    <div id="content">
                        
                        <h1 className="sub-header">Formulario</h1>
                        {/*Mostrar datos del formulario*/}
                        {this.state.user.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{user.nombre}</strong></p>
                            <p>Apellido: <strong>{user.apellido}</strong></p>
                            <p>Bio: <strong>{user.bio}</strong></p>
                            <p>Genero: <strong>{user.genero}</strong></p>

                        </div>
                        }
                        
                        {/*Mostrar datos del formulario cuando se hace submit o cuando haya un cambio de manera reactiva*/}
                        <form className="mid-form"  onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>


                        <div className="form-group">
                                <label htmlFor="nombres">Nombres</label>
                                <input type="text" name="nombres" ref={this.nombreRef}/>

                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos"ref= {this.apellidoRef}/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Bio</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>

                            </div>
                            <br/>
                                <div className="form-group radio-buttons">
                                    <input type="radio" name="genero" value="Hombre" ref={this.generoHombreRef} />Hombre
                                    <input type="radio" name="genero" value="Mujer" ref={this.generoMujerRef}/>Mujer
                                    <input type="radio" name="genero" value="Otro" ref={this.generoOtroRef} />Otro

                                </div>


                                <div className="clearfix"></div>


                                <input type="submit" value="Enviar" className="btn btn-success"/>

                        </form>




                    </div>


                    <Sidebar
                        blog="false"
                    />


                    {/* para que el contenido de la pagina no se pase a la cabecera
                                limpiaremos los flotados*/}
                    <div className="clearfix"></div>
                </div>{/*END DIV CENTER*/}
            </div>

        )


    }
}


export default Formulario;