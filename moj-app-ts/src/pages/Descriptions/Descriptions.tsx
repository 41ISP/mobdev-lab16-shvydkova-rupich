import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Description.css"

const Description = () => {
    const [book, setBook] = useState(undefined)
    const { key } = useParams()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const res = await fetch(`https://openlibrary.org/works/${key}.json`, { mode: "cors" })
                const json = await res.json();
                if (json.Response === "False") throw new Error("Not found")
                setBook(json);
                console.log(json);

                const authorNames = await Promise.all(
                    json.authors.map(async (author) => {
                        const authorRes = await fetch(`https://openlibrary.org${author.author.key}.json`, { mode: "cors" })
                        const authorJson = await authorRes.json()
                        return ({
                            key: author.author.key,
                            name: authorJson.name
                        })
                    }))
                setAuthors(authorNames)
            } catch (err) {
                console.error(err)
            }

        }
        handleSearch();
    }, [])

    const handleAuthors = (key) => {
        navigate(`/authors/${key.split("/")[2]}`)
    }
    useEffect(() => { console.log(book,) }, [book])

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>
            {book && (<div className="book-desc">
                <div className="header">
                    <h1 className="book-title">{book.title}</h1>
                    {book.subtitle && <h2 className="book-subtitle">{book.subtitle}</h2>}
                </div>
                <div className="book-content">
                    <div className="book-cover">
                        {book.covers && book.covers[0] ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                                alt={book.title}
                                className="cover-image"
                            />
                        ) : (
                            <div className="cover-placeholder">No</div>
                        )}
                    </div>

                    <div className="book-info">
                        <div className="info-section">
                            <h3>Information</h3>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Authors:</span>
                                    <span className="info-value">
                                        <div className="authors-list">
                                            {authors.map((author) => (
                                                <span key={author.key} onClick={() => handleAuthors(author.key)} className="author-link">
                                                    {author.name}</span>
                                            ))}
                                        </div>
                                    </span>
                                </div>
                                {book.subject_times && (<div className="info-item">
                                    <span className="info-label">Century:</span>
                                    <span className="info-value">
                                        <div className="authors-list">
                                            {book.subject_times.map((century) => (
                                                <span>{century}</span>
                                            ))}
                                        </div>
                                    </span>
                                </div>
                                )}
                                <div className="info-item">
                                    <span className="info-label">Date:</span>
                                    <span className="info-value">
                                        {book.first_publish_date || book.publish_date || book.created.value.slice(0, 10) || "-"}
                                    </span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Revision:</span>
                                    <span className="info-value">
                                        {book.revision}
                                    </span>
                                </div>
                                {book.number_of_pages && (<div className="info-item">
                                    <span className="info-label">Pages:</span>
                                    <span className="info-value">
                                        {book.number_of_pages || "-"}
                                    </span>
                                </div>
                                )}
                                {book.isbn && (<div className="info-item">
                                    <span className="info-label">ISBN:</span>
                                    <span className="info-value">
                                        {book.isbn ? book.isbn[0] : "-"}
                                    </span>
                                </div>
                                )}
                            </div>
                        </div>

                        {book.description && (
                            <div className="info-section">
                                <h3>Description</h3>
                                <div className="description">
                                    {book.description.value || book.description}
                                </div>
                            </div>
                        )}
                        {book.subjects && (
                            <div className="info-section">
                                <h3>Themes</h3>
                                <div className="subjects">
                                    {book.subjects.map((subject) => (
                                        <span className="subject-tag">{subject}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {book.subject_people && (
                            <div className="info-section">
                                <h3>Сharacters</h3>
                                <div className="subjects">
                                    {book.subject_people.map((subject) => (
                                        <span className="subject-tag">{subject}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {book.subject_places && (
                            <div className="info-section">
                                <h3>Places</h3>
                                <div className="subjects">
                                    {book.subject_places.map((subject) => (
                                        <span className="subject-tag">{subject}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >)
            }
        </div >
    )
}
export default Description