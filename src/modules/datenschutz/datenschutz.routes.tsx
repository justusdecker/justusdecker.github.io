import { type RouteObject } from 'react-router-dom';
import '../common/listed-items-blog-style.css'
import { Header } from '../common/code/Header';
import { Datenschutz } from './Datenschutz.component';

export const datenschutzRoutes: RouteObject = {
    path: "/datenschutz",
    element: (
       <>
            <Header />
            <Datenschutz />
       </> 
    )
};