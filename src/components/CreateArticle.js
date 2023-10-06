import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';



function CreateArticle() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const url = Global.url;
  const navigate = useNavigate();

  const [article, setArticle] = useState({});
  const [status, setStatus] = useState(null);
  const [selectedFile, setFile] = useState(null);

  const changeState = () => {
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
  };

  const changeFile = (event) => {
    
    setFile(event.target.files[0]); // Store the selected file directly
    
  };


  const saveArticle = (e) => {
    e.preventDefault();

    // Rellenar state con formulario
    changeState();

    // Hacer una petición post al API para poder guardar la información del artículo
    axios.post(url + 'save', article)
      .then((res) => {

        if (res.data.article) {
          setArticle({ ...article, _id: res.data.article._id }); // Update _id in the state
          setStatus('waiting');
          //subir imagen
          if (selectedFile !== null) {



            var articleId = res.data.article._id;
            
            //Crear formdata y añadir el archivo
            const formData = new FormData();
            formData.append(
              'file0',
              selectedFile,
              selectedFile.name,
            ); // Append the selectedFile directly
          
            axios.post(url + 'upload-images/' + articleId, formData)
              .then(res => {
                if (res.data.article) {

                  setArticle(res.data.article);
                  setStatus('success');
                } else {
                  setStatus('failed');
                }
              })  .catch((error) => {
                console.error("Axios Error:", error);
                setStatus('failed');
              })
              .finally(() => {
                // Delay the redirection by one second
                setTimeout(() => {
                  navigate('/blog');
                }, 60);
              });
          } else {
            setStatus('success');
            // Delay the redirection by one second
            setTimeout(() => {
              navigate('/blog');
            }, 60);
          }
        } else {
          setStatus('failed');
        }
      }).catch((error) => {
        console.error("Axios Error:", error); // Log any errors for debugging
      });
  };



  return (
    <div className="center">
      <section id="content">
        <h1 className="sub-header">Crear Articulo</h1>
        <form className="mid-form" onSubmit={saveArticle}>
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" ref={titleRef} onChange={changeState} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Content</label>
            <textarea type="text" name="content" ref={contentRef} onChange={changeState}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file0">Imagen</label>
            <input type="file" name="file0" onChange={changeFile} />
          </div>
          <input type="submit" value="Guardar" className="btn btn-success" />
        </form>
      </section>
      <Sidebar />
      <div className="clearfix"></div>
    </div>
  );
}

export default CreateArticle;
