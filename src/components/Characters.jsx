import DataFetch from "./DataFetch";

function Characters({ categoria }) {
    const renderCharacters = (characters) => {
        return (
            <ul>
                {characters.map((character) => (
                    <li key={character.index}>
                        <p className="name">{character.fullName} </p>
                        <img src={character.image} alt={character.nickname} />
                        <p> Alias: <span>{character.nickname} </span>  </p>
                        <p> <span> {character.hogwartsHouse} </span></p>
                        <p><span>{character.birthdate} </span></p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <DataFetch
                titulo='Personajes de Harry Potter'
                categoria={categoria}
                renderData={renderCharacters}
            />
        </>
    );
}

export default Characters;
