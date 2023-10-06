import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Articles from '../components/Articles';

function Search() {
  const { search } = useParams();

  return (
    <div className="blog">
      <Slider title={`Busqueda: ${search}`} size="slider-small" />
      <div className="center">
        <div id="content">
          {/* Listado de artículos por node que vendrán del API */}
          <Articles search={search} />
        </div>
        <Sidebar blog="true" />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Search;
