import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import no_image from './../assets/images/no_image.jpeg';
import Sidebar from "./Sidebar";

import Moment from 'react-moment';
import 'moment/locale/es';

function Article() {
    const { id } = useParams(); // Access the route parameters "id"
    const url = Global.url;
    const [article, setArticle] = useState(null);
    const [status, setStatus] = useState(null);

   

    useEffect(() => {
        // Fetch the article when the component mounts
        axios
            .get(url + "article/" + id)
            .then(res => {
                setArticle(res.data.article);
                setStatus("success");
            })
            .catch(err => {


                setArticle({}); // Set article to null or handle as needed
                setStatus(null); // Set your status to "error" or handle as needed


            });
    }, [url, id]);
 // Log initial status and article values
 //console.log("Initial Status:", status);
 //console.log("Initial Article:", article);
    return (
        <div className="center">
            <section id="content">
                <div id="articles">
                    {article && status&&
                        



                            <article className="article-item article-detail">
                                <div className="image-wrap">

                                    {article.image !== "no_image" ? (
                                        <img src={url + 'get-image/' + article.image} alt={article.title} />
                                    ) : (
                                        <img src={no_image} alt={article.title} />
                                    )}
                                </div>

                                <h2 className="sub-header">{article.title}</h2>
                                <span className="date">
                                    <Moment locale="es" fromNow>{article.date}</Moment>
                                </span>
                                <p>
                                    {article.content}
                                </p>
                                <div>
                                <a href="#" className="btn btn-danger ">Eliminar Articulo</a>
                                <a href="#" className="btn btn-warning ">Borrar</a>
                                </div>
                                <div className="clearfix"></div>
                            </article>
                       
                    }
                    {!status &&
                       



                            <div id="article">
                                <h2 className="sub-header">El artículo no existe</h2>
                                <p>Puede que se haya eliminado o no ha sido creado.</p>
                            </div>
                       
                    }
                    {status === null &&
                       



                       <div id="article">
                       <h2 className="sub-header">Loading</h2>
                       <p>buscando</p>
                   </div>
                       
                    }

                </div>
            </section>
            <Sidebar />
            <div className="clearfix"></div>
        </div>
    );
}

export default Article;
