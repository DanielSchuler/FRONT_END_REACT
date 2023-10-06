import React, { Component } from "react";
//para la ruta de leer mas usar la libreria Link
import { Link } from 'react-router-dom'
// axios para peticiones http
import axios from "axios";
import Global from "../Global";
import no_image from './../assets/images/no_image.jpeg';

//para formatear fechas usar libreria moment
import Moment from 'react-moment';
//importar el idioma en español
import 'moment/locale/es';





class Articles extends Component {
    //para usar la url que definimos en el archivo global
    url = Global.url;

    //Creao una propiedad state para poder manejar los datos que me llegaron del backend
    state = {
        articles: [],
        status: 'loading'
    };


    componentDidMount() {
        var home = this.props.home;
        var search = this.props.search;
        //valido la propiedad de la pagina home que envie para determinar
        if (home === 'true') {
            this.getLastArticles();

        }
        else if (search && search !== null && search !== undefined) {
            this.getArticlesBySearch(search);
        }
        else {
            this.getArticles();
        }


    }


    //metodo ajax para poder obtener todos los articulos
    getArticles = () => {
        axios.get(this.url + 'articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'

                });


            }).catch(err => {
                this.setState({
                    articles: [],
                    status: 'error'
                });
            });
    }

    //metodo ajax para poder obtener los ultimos articulos
    getLastArticles = () => {
        axios.get(this.url + 'articles/last')
            .then(res => {
                console.log('Last articles response:', res.data); // Log the response
                this.setState({
                    articles: res.data.articles,
                    status: 'success'

                });


            }).catch(err => {
                console.error(err);
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    }



    getArticlesBySearch = (searched) => {
        axios.get(this.url + 'search/' + searched)
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'

                });
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'

                });
            });
    }

    render() {
        const { articles, status } = this.state;
        if (status === 'loading'){
            return (

                <div id='articles'>
                    <h2>Listado de Artículos</h2>
                    <h3 className="sub-header">Cargando...</h3>
                    <p>Espere mientras carga el contenido</p>

                </div>

            )
        }else if (status === 'error') {


            return (

                <div id='articles'>
                    <h2>Listado de Artículos</h2>
                    <h3 className="sub-header">No hay articulos para mostrar</h3>
                    <p>Todavia no hay contenido en esta sección</p>

                </div>

            )


        } 
        //comprobar si tengo los datos en el state
        else if (articles.length >= 1) {

            var listArticles = articles.map((article) => {

                return (



                    <div id="articles" key={article._id}>
                        <article className="article-item"  >
                            <div className="image-wrap">
                                {article.image !== "no_image" ? (
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ) : (
                                    <img src={no_image} alt={article.title} />
                                )

                                }



                            </div>
                            <h2 className="sub-header">{article.title}</h2>
                            <span className="date">

                                <Moment fromNow>{article.date}</Moment>

                            </span>
                            <Link to={'/blog/article/' + article._id} >Leer Más</Link>


                            <div className="clearfix"></div>
                        </article>

                    </div>





                );

            })
            

        }   


        return (
            <div id="articles">

                {listArticles}

            </div>

        )

    }
}


export default Articles;