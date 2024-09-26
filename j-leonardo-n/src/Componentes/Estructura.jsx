import { Route, Routes } from "react-router-dom";
import Comienzo from "./Paginas/Comienzo";

function Estructura() {
  return (
    <Routes>
      <Route path="/" element={<Comienzo />} />
    </Routes>
  );
}

export default Estructura;
