import { useEffect, useState } from "react";

function DataFetch({ categoria, renderData, titulo }) {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const get_data = async () => {
            try {
                const url = `https://potterapi-fedeperin.vercel.app/es/${categoria}`;
                const response = await fetch(url);

                if (!response.ok) {
                    setError("datos no encontrados");
                }

                const datos = await response.json();
                setData(datos);
                console.log(datos);

            } catch (error) {
                setError("Ha ocurrido un error al conectara con la API", error);
            }
        };
        get_data();
    }, [categoria]);

    return (
        <>
            <h1>{titulo}</h1>
            {error && <p>{error} </p>}
            {!error && !data && <p>Cargando...</p>}
            {data && renderData(data)}
        </>
    );
}

export default DataFetch;
