
import { type RouteObject, Outlet } from 'react-router-dom';



import './certificates.css';
import { CertificateOverview } from './certificates';
import { Header } from '../common/code/header';

export const certificatesRoutes: RouteObject = {
    path: "/certificates",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <CertificateOverview />},
    ]
};