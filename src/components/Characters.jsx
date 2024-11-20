import { useEffect, useState } from "react";

function Characters() {
    const [error, setError] = useState(null);
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        const get_data = async () => {
            try {
                const url = "https://potterapi-fedeperin.vercel.app/es/characters";
                const response = await fetch(url);
                if (!response.ok) {
                    setError("datos no encontrados");
                }
                const data = await response.json();
                setCharacters(data);
                console.log(data);
            } catch (error) {
                setError("Ha ocurrido un error al conectara con la API", error);
            }
        };
        get_data();
    }, []);

    return (
        <>
            <h1>Personajes de Harry Potter</h1>
            {error && <p>{error} </p>}
            {!error && !characters && <p>Cargando...</p>}

            {characters && (
                <ul>
                    {characters.map((character) => (
                        <li key={character.id}>
                            <p className="name">{character.fullName} </p>
                            <img src={character.image} alt={character.nickname} />
                            <p> Alias: <span>{character.nickname} </span>  </p>
                            <p> <span> {character.hogwartsHouse} </span></p>
                            <p><span>{character.birthdate} </span></p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Characters;
