import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/Identity-layout";
import Login from './features/identity/components/login'
import Register, { registerAction } from './features/identity/components/register'
import { loginAction } from "./features/identity/components/login";
import MainLayout from "./layouts/main-layout";
import Courses from "./pages/courses";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{
            element: <Courses />,
            index: true    // شرط برای پیج دیفالت 
        }]
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
                errorElement: <Login />
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
                errorElement: <Register />
            },
        ]
    }
]);

export default router;