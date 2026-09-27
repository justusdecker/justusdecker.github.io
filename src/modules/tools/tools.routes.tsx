
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';
import { MarkdownWriter } from './markdown-writer/markdown-writer.tsx';
export const toolsRoutes: RouteObject = {
    path: "/tools",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        { path: "markdown-writer", 
        children: [
            { index: true, element: <MarkdownWriter/> }, 
        ] }
    ]
};