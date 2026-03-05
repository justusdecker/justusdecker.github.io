
import { type RouteObject, Outlet } from 'react-router-dom';

import BlogIndex from './blog.tsx';
import BlogPostDetail from './blog-detail.tsx';
import './blog.css'
export const blogRoutes: RouteObject = {
    path: "/blog",
    element: (
       <>
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <BlogIndex />},
        { path: ":id", element: <BlogPostDetail /> }
    ]
};