
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';
import BlogIndex, { BlogPostDetail } from './blog';
import { LoadingComponent } from '../common/load-component';

export const blogRoutes: RouteObject = {
    path: "/blog",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: (
    (
        <LoadingComponent timeOut={200}>
            <BlogIndex />
        </LoadingComponent>
      )
    )},
        { path: ":id", element: (
        <LoadingComponent timeOut={200}>
            <BlogPostDetail />
        </LoadingComponent>
        
    ) }
    ]
};