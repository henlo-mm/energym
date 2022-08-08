import { lazy } from 'react';

// project import

//import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = lazy(() => import('../components/Dashboard'));
const User = lazy(() => import('../components/ListUser'));

// render - sample page
/* const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
 */
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <DashboardDefault />,
    children: [
       
        {
            path: 'user',
            element: <User />
        },
        /* {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        } */
    ]
};

export default MainRoutes;