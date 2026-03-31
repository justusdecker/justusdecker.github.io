import { type RouteObject } from 'react-router-dom';
import Header from '../common/header';
import '../common/listed-items-blog-style.css'
import { useState } from 'react';
import MarkdownRedefined from '../common/markdownRedefined';


function Datenschutz() {
    const [content, setContent] = useState<string>('');
    fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/datenschutz/datenschutz.md')
    .then(res => {return res.text();})
    .then((text) => setContent(text))
    .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
    return (
        <section>
            <div className="tile-entry">

                <MarkdownRedefined>{content}</MarkdownRedefined>
            </div>
            
        </section>
    )
}
export const datenschutzRoutes: RouteObject = {
    path: "/datenschutz",
    element: (
       <>
            <Header />
            <Datenschutz />
       </> 
    )
};