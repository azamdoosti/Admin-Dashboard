import { createBrowserRouter } from "react-router-dom";
import Register from "./features/identity/components/register";
import Login from "./features/identity/components/login";
import IdentityLayout from "./layouts/Identity-layout";

const router = createBrowserRouter([
      { 
         element: <IdentityLayout/> ,
         children : [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
         ]
        }
    
])

export default router
