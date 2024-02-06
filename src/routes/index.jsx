import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../components/pages/Home";
import DetailPost from "../components/pages/Detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/posts/:post_id",
        element: <DetailPost/>,
    },
]);