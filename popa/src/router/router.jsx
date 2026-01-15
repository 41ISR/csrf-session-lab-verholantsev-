import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import Logout from "../pages/Logout"
import Main from "../pages/Main"
import LeaderBoard from "../pages/LeaderBoard"
import Login from "../pages/Login"

export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <AuthProvider />,
    //     children: [{
    //         index: true,
    //         element: <Main />
    //     },
    //         {
    //             path: "/leaderboard",
    //     element: <LeaderBoard />
    //         }
    
    // ]
    // },
    {
            path: "/",
            element: <Main />
        },
            {
                path: "/leaderboard",
        element: <LeaderBoard />
            },
        {
        path: "/logout",
        element: <Logout />
    }, 
    {
        path: "/login",
        element: <Login />
    }, {
        path: "/signup",
        element: <SignUp />
    }
])