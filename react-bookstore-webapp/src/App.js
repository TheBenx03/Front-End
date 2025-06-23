import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Home} from "./pages/Home";
import {Buscar} from "./pages/Buscar";
import {Novedades} from "./pages/Novedades";
import {Populares} from "./pages/Populares";
import {Contacto} from "./pages/Contacto";
import {Login} from "./pages/Login";
import {Administracion} from "./pages/Administracion";


function App() {
  return (
      <div className="App">
          <Header/>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/buscar" element={<Buscar />} />
                  <Route exact path="/novedades" element={<Novedades />} />
                  <Route exact path="/populares" element={<Populares />} />
                  <Route exact path="/contacto" element={<Contacto />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/administracion" element={<Administracion />} />
              </Routes>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
