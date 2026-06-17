import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Componentes/Nav/Nav";
import Estructura from "./Componentes/Estructura";
import JorgeNunez from "./Componentes/Paginas/JorgeNunez";

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
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/JorgeNunez" element={<JorgeNunez />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
