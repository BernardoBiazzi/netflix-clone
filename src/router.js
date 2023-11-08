import App from "./App";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import Series from "./pages/series/series";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'series',
                element: <Series />
            },
            {
                path: 'filmes',
                element: <Movies />
            }
        ]
    },
]);