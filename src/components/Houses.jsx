import DataFetch from "./DataFetch";

function Houses({ categoria }) {

    const getHouses = (houses) => {
        return (
            <ul>
                {houses.map(house => (
                    <li key={house.index} >
                        <p className="name"> {house.house} </p>
                        {house.emoji}
                        <p>{house.animal} </p>
                        <p> Fundador: {house.founder} </p>
                        <p> Colores: {(house.colors).join(', ')} </p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <DataFetch
                titulo='Casas de Howarts'
                categoria={categoria}
                renderData={getHouses}
            />


        </>
    )
}
export default Houses;