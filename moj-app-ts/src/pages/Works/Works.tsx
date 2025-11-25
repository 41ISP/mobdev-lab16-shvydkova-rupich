import { useEffect, useState } from "react"
import "./Works.css"
import BookCard from "../../components/book.ui"
import type { IBook } from "../../components/book.model"
import Button from "../../Button/button.ui"

const Works = () => {
    const [bookName, setBookName] = useState("")
    const [books, setBooks] = useState<IBook[] | undefined>(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(books)
    }, [books])

    const handleSearch = async () => {
        try {
            setBookName("")
            setBooks(undefined)
            setError("")
            const trimmedMovieName = bookName.trim();
            if (trimmedMovieName.length <= 0) return

            const parameters = new URLSearchParams({
                q: bookName,
            })
            const res = await fetch(`https://openlibrary.org/search.json?${parameters.toString()}`, { mode: "cors" })
            const json = await res.json();
            if (json.Response === "False") throw new Error("Не найдена")
            setBooks(json.docs);
        } catch (error) {
            if (!bookName) return setError("no such book")
            console.log(error)
        }
    }
    return (
        <div className="container">
            <div className="header">
                <h1>Library</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for books..." value={bookName} onChange={(e) => setBookName(e.target.value)} />
                     <Button onClick={handleSearch} className="search-button">Search</Button>
                </div>
                {error && <p>{error}</p>}
            </div>
            <h1>Books</h1>
            <div className="book-grid">{books && books.map((book) => <BookCard key={book.key} 
            bookKey={book.key} title={book.title} first_publish_year={book.first_publish_year} 
            author_name={book.author_name} cover_i={book.cover_i}/>)}
            </div>
        </div>
    )
}
export default Works