import './App.css';
import Nav from './componentes/Nav/Nav'
import Carrusel from './componentes/ImagenesCarrusel/Carrusel'
import Ingresar from './componentes/Ingresar/Ingresar'



function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Carrusel />
         <Ingresar/>
      </div>
    </>
  );
}

export default App;
