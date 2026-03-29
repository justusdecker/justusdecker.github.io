
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';



import './common/portfolio.css'
import PortfolioIndex from './common/portfolio.tsx';


export const portfolioRoutes: RouteObject = {
    path: "/portfolio",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <PortfolioIndex category='art' />},
        { path: "art", element: <PortfolioIndex category='art' /> },
        { path: "craft", element: <PortfolioIndex category='craft' /> },
        { path: "dev", element: <PortfolioIndex category='dev' /> }
    ]
};