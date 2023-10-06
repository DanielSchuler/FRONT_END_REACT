import React, { Component } from "react";

class Cancion extends Component {

    //metodo que almacenara la informacion del elemento marcado y se lo devolvera al padre

    marcar=()=>{
        this.props.marcarFavorito(this.props.cancion, this.props.indice)
    }

    render() {
        //console.log("propiedad cancion: " + this.props.cancion)
        
        
        
        const { title, artist, origen, image } = this.props.cancion
        return (

            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />

                </div>
                <h2>{artist}</h2>
                <h3>{title}</h3>
                <h3>{origen}</h3>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="www.google.com">Leer mas</a>

                <button type="button" onClick={this.marcar}>
                    Marcar como favorito
                </button>

                <div className="clearfix"></div>
            </article>


        )


    }
}


export default Cancion;