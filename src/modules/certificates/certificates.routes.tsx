
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';


import './certificates.css';
import { CertificateDetail, CertificateOverview } from './certificates';

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
        { path: ":id", element: <CertificateDetail /> }
    ]
};