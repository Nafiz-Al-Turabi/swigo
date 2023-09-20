import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Loading from "../Components/Loading/Loading";
import Menu from "../Pages/Menu/Menu";
import { useEffect, useState } from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: (
                    <DelayedLoader delay={5000}> {/* For Loading screen */}
                        <Home />
                    </DelayedLoader>
                ),
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            }

        ]
    },
]);
{/* For Loading screen */}
function DelayedLoader({ delay, children }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    return showContent ? children : <Loading />;
}