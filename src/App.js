import './App.css';
import Nav from './componentes/Nav/Nav'
import Carrusel from './componentes/ImagenesCarrusel/Carrusel'
import Ingresar from './componentes/Ingresar/Ingresar'
import Error from './componentes/Error/Error'
import Home from './componentes/Home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
      <Router>
        <Nav/>
        <Routes>
              <Route exact path='/' element={<Home />}></Route> {/* exact pone por defecto el componente indicado en element*/}
              <Route path='*' element={<Error />}></Route> {/* Si no encuentra la página se dirige al componente Error*/}
              <Route path='/Ingresar' element={<Ingresar />}></Route>
        </Routes>
      </Router>
      </nav>
    </>
  );
}

export default App;
