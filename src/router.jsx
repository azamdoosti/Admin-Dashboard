import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/Identity-layout";
import Login from './features/identity/components/login'
import Register, { registerAction } from './features/identity/components/register'
const router = createBrowserRouter([
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
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