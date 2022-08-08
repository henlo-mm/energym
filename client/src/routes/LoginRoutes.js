import { lazy } from 'react';

// project import
import SidebarLayout from '../components/SidebarLayout';

// render - login
const AuthLogin = lazy(() => import('../components/Login'));
const AuthRegister = lazy(() => import('../components/Register'));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <SidebarLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'sign-up',
            element: <AuthRegister />
        }
    ]
};

export default LoginRoutes;