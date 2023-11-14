import App from "./App";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import Movies from "./pages/movies/movies";
import Series from "./pages/series/series";
import { createBrowserRouter } from "react-router-dom";
import Profiles from "./pages/profiles/profiles";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Profiles/>
            },
            {
                path: 'inicio',
                element: <Home/>
            },
            {
                path: 'series',
                element: <Series/>
            },
            {
                path: 'filmes',
                element: <Movies/>
            },
        ]
    },
]);