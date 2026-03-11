// modules/blog/blog.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type BlogPostMetadata } from './blog.types';
import '../common/ibox_and_topics.css'
import '../common/neo-btn.css'
const POSTS_PER_PAGE = 5;

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  
  

  const filteredPosts = posts.filter((post) => {
    if (!searchTerm) return true;
    
    const search = searchTerm.toLowerCase();

    // 1. Suche in den Tags (Teilwortsuche)
    const hasMatchingTag = post.tags?.some((tag: string) => 
        tag.toLowerCase().includes(search)
    );

    // 2. Suche in der ID / im Dateinamen (falls kein Tag matcht)
    // Ersetzt Bindestriche durch Leerzeichen für natürlichere Suche
    const idName = post.id.toLowerCase().replace(/-/g, ' ');
    const hasMatchingId = idName.includes(search);

    return hasMatchingTag || hasMatchingId;
    });

    // Pagination Logik
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const filtered2Posts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="blog-list">
      <h1>Blog Übersicht</h1>

      <div className="search-container no-print">
        <input
          type="text"
          placeholder="Nach Tags filtern (z.B. sicherheit)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <small>{filteredPosts.length} Ergebnisse für "{searchTerm}"</small>
        )}
      </div>
      
      {filtered2Posts.map((post) => (
        <div className='topic' key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>

          <div className="tag-container">
            {post.tags?.map((tag: string) => (
              <span 
                key={tag} 
                className="tag-badge"
                onClick={() => setSearchTerm(tag)} // Klick auf Tag füllt Suche aus
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
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