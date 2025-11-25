import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Authors.css"
import type { IAuthor } from "./author.model"
import type { IWork } from "../Works/works.model"
import Button from "../../Button/button.ui"
const Authors = () => {
    const { key } = useParams()
    const navigate = useNavigate()
    const [author, setAuthor] = useState<IAuthor | undefined>(undefined)
    const [works, setWorks] = useState<IWork[]>([])

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const authorRes = await fetch(`https://openlibrary.org/authors/${key}.json`)
                const authorJson: IAuthor = await authorRes.json();
                setAuthor(authorJson)
                console.log(authorJson)

                const worksRes = await fetch(`https://openlibrary.org/authors/${key}/works.json`)
                const worksJson = await worksRes.json();
                console.log(worksRes)
                setWorks(worksJson.entries || [])

            }
            catch (err) {
                console.error(err)
            }
        }
        if (key) {
            handleSearch()
        }

    }, [key])

    const handleClick = (workKey: string) => {
        const bookKey = workKey.replace('/works/', '')
        navigate(`/books/${bookKey}`)
    }
    if (!author) {
        return (
            <div className="container">
                <Button to="/" className="back-button">← Back to Search</Button>
                <div className="error">Автор не найден</div>
            </div>
        )
    }
    return (
        <div className="container">
            <Link to="/" className="back-button">← Back </Link>
            <div className="author-details">
                <div className="author-header">
                    <div className="author-main-info">
                        <div className="author-photo">
                            <img
                                src={`https://covers.openlibrary.org/a/olid/${key}-L.jpg`}
                                alt={author.name}
                                className="author-image" />
                        </div>
                    </div>
                    <div className="author-text-info">
                        <h1 className="author-name">{author.name}</h1>
                        <div className="author-dates">
                            <span>{author.birth_date} - {author.death_date}</span>
                        </div>
                    </div>
                    <div className="author-content">
                        <div className="author-bio">
                            <div className="info-section">
                                <h3>Bio</h3>
                                <div className="description">
                                    {!author.bio ? "no": typeof author.bio === 'string' ? author.bio : author.bio.value || "no"
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="info-section">
                            <h3>Works: ({works.length})</h3>
                            <div className="works-list">
                                {works.map((work) => (
                                    <div key={work.key} onClick={() => handleClick(work.key)} className="work-link">
                                        {work.title}{work.first_publish_date}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authors