
// IMPORTAR ASSETS

import './assets/styles/css/App.css';




//IMPORTO EL ROUTER QUE TIENE LA RUTA A LOS COMPONENTES 
// este se encarga de pintar el componente que sea necesario segun la ruta
import Router from './router/Router';

function App() {


  return (
    <div className="App">
  
      <Router/>
     
      
    </div>
    
  );
}

export default App;
