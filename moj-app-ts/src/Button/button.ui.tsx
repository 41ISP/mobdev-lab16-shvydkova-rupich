import { Link } from "react-router-dom"
import type { IButton } from "./button.model"

const Button = ({to, ...props} : IButton) => {
    if(to) return <Link to={to} />
    return (
        <button {...props} className="back-button"></button>
    )
}
export default Button