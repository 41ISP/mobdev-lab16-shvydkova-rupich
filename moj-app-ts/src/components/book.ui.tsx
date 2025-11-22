import { useNavigate } from "react-router-dom"
import type { IBook } from "./book.model";
import AuthorNameWiget from "../wiget/AuthorName/authorname.ui";
import DateWiget from "../wiget/Date/date.ui";
const BookCard = ({ bookKey, title, first_publish_year, author_name}: IBook) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(bookKey);
        navigate(`books/${bookKey.split("/")[2]}`)
    }
    return (
        <div onClick={handleClick} className="book-card">
            <div className="book-info">
                <div className="book-title">{title}</div>
                <div className="book-meta">
                    <AuthorNameWiget author_name = {author_name}/>
                    <DateWiget date = {first_publish_year}/>
                </div>
            </div>
        </div>
    )
}
export default BookCard
