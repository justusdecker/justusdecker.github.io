import { useEffect, useState } from "react";
import type { PortfolioMetadata } from "./portfolio.types";
import ReactMarkdown from "react-markdown";

import '../../common/listed-items-blog-style.css'

function PortfolioDetail(attr: { category: string, id: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<string>('');
    console.log(attr.id);
  useEffect(() => {
    if (!attr.id) return;
    
    // Wir bauen den Pfad dynamisch zusammen
    const url = `https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${attr.category}/${attr.id}.md`;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`))
      .finally(() => setIsLoading(false));
  }, [attr.id]);
  if (isLoading) {
    return (
      <>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Lade Markdown-Inhalte...</p>
        </div>
      </>
    );
  }
  return (
      <div className="portfolio-detail "><ReactMarkdown>{content}</ReactMarkdown></div>
  );
}
const POSTS_PER_PAGE = 10;

export default function PortfolioIndex({ category }: { category: string }) {
  const [posts, setPosts] = useState<PortfolioMetadata[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${category}/index.json`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [category]);
  console.log(posts)

  const categorys_en = ['dev', 'craft', 'art'];
  const categorys_de = ['Software', 'Handwerk', 'Kunst']
  const cat_id = categorys_en.indexOf(category);
  const category_head = categorys_de[cat_id];

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const filteredPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="portfolio-list">
      <h1>Portfolio: {category_head} Übersicht</h1>
      
        {filteredPosts.map((post) => (
            <div className='tile-entry'>
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.timespan}</p>
                <PortfolioDetail category={category} id={post.id}/>
            </div>
            </div>
        ))}
      <div className="pagination">
        <button 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(prev => prev - 1)}
          className='neo-btn'
        >
          Zurück
        </button>
        
        <span style={{paddingLeft:"1rem", paddingRight:"1rem"}}>Seite {currentPage} von {totalPages || 1}</span>
        
        <button 
          disabled={currentPage >= totalPages} 
          onClick={() => setCurrentPage(prev => prev + 1)}
          className='neo-btn'
        >
          Weiter
        </button>
      </div>
    </div>
  );
}