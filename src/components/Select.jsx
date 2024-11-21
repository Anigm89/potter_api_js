
function Select({ categoria, setCategoria }) {

    const handleChange = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <>
            <div className="intro">
                <h2>¿Qué quieres ver?</h2>
                <form>
                    <select name="categorias" id="categorias" value={categoria} onChange={handleChange}>
                        <option value="">Selecciona una opción</option>
                        <option value="characters">Personajes</option>
                        <option value="books">Libros</option>
                        <option value="houses">Casas</option>
                        <option value="spells">Hechizos</option>
                    </select>
                </form>
            </div>


        </>
    )

}

export default Select;