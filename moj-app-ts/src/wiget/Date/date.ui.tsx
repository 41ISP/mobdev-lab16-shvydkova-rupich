import type { IDate } from "./date.model"

const DateWiget = ({ date }: IDate) => {
     if(!date) return "no";
    return (
    <span className="book-year">{date}</span>
    )
}
export default DateWiget