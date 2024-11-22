import DataFetch from "./DataFetch";

function Books({ categoria }) {
    const renderBooks = (books) => {
        return (
            <ul>
                {books.map(book => (
                    <li key={book.number}>
                        <p className="name">{book.number} {book.title} </p>
                        <img src={book.cover} alt={book.title} />
                        <p> {book.pages} páginas  </p>
                        <p>{book.description} </p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <DataFetch
                titulo='Libros de Harry Potter'
                categoria={categoria}
                renderData={renderBooks}
            />
        </>
    )
}

export default Books;