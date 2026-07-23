import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./Componentes/Nav/Nav";
import Estructura from "./Componentes/Estructura";
import JorgeNunez from "./Componentes/Paginas/JorgeNunez";
import SolucionesAMedida from "./Componentes/Paginas/SolucionesAMedida";

function RecuperarRutaCompartida() {
  const navegar = useNavigate();

  useEffect(() => {
    const rutaRedirigida = sessionStorage.getItem("rutaRedirigida");

    if (!rutaRedirigida) return;

    sessionStorage.removeItem("rutaRedirigida");
    navegar(rutaRedirigida, { replace: true });
  }, [navegar]);

  return null;
}

function PaginaPrincipal() {
  return (
    <>
      <Nav />
      <Estructura />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RecuperarRutaCompartida />
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/JorgeNunez" element={<JorgeNunez />} />
          <Route path="/solucionesamedida" element={<SolucionesAMedida />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
