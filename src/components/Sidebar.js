import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const isBlogRoute = location.pathname.includes('/blog');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/blog/busqueda/${searchTerm}`);
  };

  return (
    <aside id="sidebar">
      {/* ... other sidebar content ... */}
      {isBlogRoute && (
        <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <Link to={'/blog/crear'} className="btn btn-success">
            Crear artículo
          </Link>
        </div>
      )}

      <div id="search" className="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input type="submit" className="btn" name="submit" value="Buscar" />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
