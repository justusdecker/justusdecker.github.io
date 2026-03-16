import { type RouteObject } from 'react-router-dom';
import Header from '../common/header';
import '../common/ibox_and_topics.css'
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';


function Datenschutz() {
    const [content, setContent] = useState<string>('');
    fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/datenschutz/datenschutz.md')
    .then(res => {return res.text();})
    .then((text) => setContent(text))
    .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
    return (
        <section>
            <div className="topic">

                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
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