
import Navegacion from "./Componentes/Navegacion";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login";
import Nosotros from "./Componentes/Nosotros";
import Alta from "./Componentes/Alta";
import Contacto from "./Componentes/Contacto";
import Productos from "./Componentes/Productos";
import Footer from "./Componentes/Footer";
import PadreUno from "./Componentes/PadreUno";

/* admin de rutas */
import { Routes, Route } from 'react-router-dom'
import Personajes from "./Componentes/Personajes";
import ChatIA from "./Componentes/ChatIA";
import Error from "./Componentes/Error";
import CrudItems from "./Componentes/CrudItems";


function App() {
  return (
    <>
    
      <Navegacion /> 

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/alta" element={<Alta />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/props" element={<PadreUno />}></Route>
        <Route path="/personaje" element={<Personajes />}></Route>
        <Route path="/chat" element={<ChatIA />}></Route>
        <Route path="/sql" element={<CrudItems />}></Route>
        <Route path="/*" element={<Error />}></Route>

      </Routes>

      <Footer />

    </>

  );
}

export default App;
