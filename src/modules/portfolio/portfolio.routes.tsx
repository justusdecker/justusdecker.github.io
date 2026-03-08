
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';


import PortfolioArtDetail from './art/art-subportfolio.tsx';


import './common/portfolio.css'
import PortfolioCraftDetail from './craft/craft-subportfolio.tsx';
import PortfolioDevDetail from './dev/dev-subportfolio.tsx';
export const portfolioRoutes: RouteObject = {
    path: "/portfolio",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <PortfolioArtDetail />},
        { path: "art", element: <PortfolioArtDetail /> },
        { path: "craft", element: <PortfolioCraftDetail /> },
        { path: "dev", element: <PortfolioDevDetail /> }
    ]
};