import DataFetch from "./DataFetch";

function Spells({ categoria }) {

    const getSpells = (spells) => {
        return (
            <ul>
                {spells.map(spell => (
                    <li key={spell.index}>
                        <p className="name">{spell.spell} </p>
                        <p>{spell.use} </p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <DataFetch
                titulo='Hechizos de Harry Potter'
                categoria={categoria}
                renderData={getSpells}
            />
        </>
    )

}

export default Spells;