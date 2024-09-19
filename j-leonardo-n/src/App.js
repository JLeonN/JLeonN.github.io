import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Componentes/Nav/Nav";
import Estructura from "./Componentes/Estructura";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Estructura />
      </div>
    </BrowserRouter>
  );
}

export default App;
