import Characters from "./components/Characters";
import Select from "./components/Select";
import Books from "./components/Books";
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
          <Books />
        )}
    </>
  );
}

export default App;
