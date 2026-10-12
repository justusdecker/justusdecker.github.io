import { type RouteObject } from 'react-router-dom';
import './portfolio.css';
import { PortfolioComponent } from './Portfolio.component';

export const portfolioRoutes: RouteObject = {
  path: '/portfolio',
  element: <PortfolioComponent />,
};