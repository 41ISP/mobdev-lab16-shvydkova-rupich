import type { IAuthorName } from "./authorname.model";

const AuthorNameWiget = ({ author_name }: IAuthorName) => {
     if(!author_name) return "no";
    return (
    <span className="book-year">{author_name[0]}</span>
    )
}
export default AuthorNameWiget