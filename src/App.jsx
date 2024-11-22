import Characters from "./components/Characters";
import Select from "./components/Select";
import Books from "./components/Books";
import Houses from "./components/Houses";
import Spells from "./components/Spells";
import "./App.css";
import { useState } from "react";

function App() {
  const [categoria, setCategoria] = useState('');

  return (
    <>
      <Select categoria={categoria} setCategoria={setCategoria} />

      {
        (() => {

          switch (categoria) {
            case 'characters':
              return <Characters categoria={categoria} />
            case 'books':
              return <Books categoria={categoria} />
            case 'houses':
              return <Houses categoria={categoria} />
            case 'spells':
              return <Spells categoria={categoria} />
            default:
              return <Characters categoria={'characters'} />
          }
        })()
      }

    </>
  );
}

export default App;
