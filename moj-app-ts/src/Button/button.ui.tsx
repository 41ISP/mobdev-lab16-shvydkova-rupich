import { Link } from "react-router-dom"
import type { IButton } from "./button.model"

const Button = ({...props}, {to} : IButton) => {
    if(to) return Link
    return (
        <button {...props} className="back-button"></button>
    )
}
export default Button