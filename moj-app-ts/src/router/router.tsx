import { createBrowserRouter } from "react-router-dom";
import Works from "../pages/Works/Works";
import Description from "../pages/Descriptions/Descriptions";
import Authors from "../pages/Authors/Authors";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Works />
    },
    {
        path: "/books/:key",
        element: <Description />
    },
    {
        path: "/authors/:key",
        element: <Authors />
    }
])
export default router