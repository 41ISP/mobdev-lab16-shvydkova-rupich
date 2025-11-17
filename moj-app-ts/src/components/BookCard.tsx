import { useNavigate } from "react-router-dom"
const BookCard = (book) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(book.key, book);
        navigate(`books/${book.bookKey.split("/")[2]}`)
    }
    return (
        <div onClick={handleClick} className="book-card">
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-meta">
                    <span className="book-year">{book.first_publish_year}</span>
                    {book.author_name && (<span className="book-year">{book.author_name[0]} ...</span> )}
                </div>
            </div>
        </div>
    )
}
export default BookCard
