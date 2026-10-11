
import { type RouteObject, Outlet } from 'react-router-dom';

import { MarkdownWriter } from './markdown-writer/markdown-writer.tsx';
import { Header } from '../common/code/header.tsx';
import { BackgroundShader } from '../components/BackgroundShader.tsx';
import { Toolkit } from './tools.tsx';
import { WorkoutIntervalTimer } from './workout-interval-timer/workout_interval_timer.tsx';
export const toolsRoutes: RouteObject = {
    path: "/tools",
    element: (
       <>
            <Header />
            <BackgroundShader></BackgroundShader>
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <Toolkit />},
        { path: "markdown-writer", 
        children: [
            { index: true, element: <MarkdownWriter/> }, 
        ] },
        { path: "wit", 
        children: [
            { index: true, element: <WorkoutIntervalTimer/> }
        ] }
    ]
};