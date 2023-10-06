import React, { Component} from 'react';



class Slider extends Component {
    
    render(){
        
let buttonElement = null;
if (this.props.btn) {
  buttonElement = <a href="www.google.com" className="btn-white">{this.props.btn}</a>;
}


        
        return(
        <div id="slider" className={this.props.size}>
        <h1 > {this.props.title}</h1>
        <h2>Primer tema React</h2>
       {/* 
       
       otra forma de dibujar el boton si y solo si la propiedad de boton fue enviada
       {this.props.btn &&
        <a href="www.google.com" className="btn-white">{this.props.btn}</a>
        }*/}
        {buttonElement}
        {/*<button type="button" title="Button Title" className="btn-white">
          
        </button>*/}
        


    </div>
    )
    }
}

export default Slider;