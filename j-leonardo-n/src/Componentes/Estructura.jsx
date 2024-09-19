import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";

function Estructura() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}

export default Estructura;
