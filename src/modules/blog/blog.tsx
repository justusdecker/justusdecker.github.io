// modules/blog/blog.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type BlogPostMetadata } from './blog.types';
import '../common/ibox_and_topics.css'
const POSTS_PER_PAGE = 5;

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Pagination Logik
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="blog-list">
      <h1>Blog Übersicht</h1>
      
      {currentPosts.map((post) => (
        <div className='topic-item' key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        <button 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Zurück
        </button>
        
        <span>Seite {currentPage} von {totalPages || 1}</span>
        
        <button 
          disabled={currentPage >= totalPages} 
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}