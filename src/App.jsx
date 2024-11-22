import Characters from "./components/Characters";
import Select from "./components/Select";
import Books from "./components/Books";
import Houses from "./components/Houses";
import "./App.css";
import { useState } from "react";

function App() {
  const [categoria, setCategoria] = useState('');
  const currentCategorie = categoria || 'characters';

  return (
    <>
      <Select categoria={categoria} setCategoria={setCategoria} />
      {currentCategorie === 'characters' && (
        <Characters categoria={currentCategorie} />
      )}
      {
        currentCategorie === 'books' && (
          <Books categoria={currentCategorie} />
        )
      }
      {
        currentCategorie === 'houses' && (
          <Houses categoria={currentCategorie} />
        )
      }
    </>
  );
}

export default App;
