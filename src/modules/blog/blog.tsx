// modules/blog/blog.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type BlogPostMetadata } from './blog.types';
import '../common/ibox_and_topics.css'
export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPostMetadata[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts)
  return (
    <div className="blog-list">
      <h1>Blog Übersicht</h1>
      
        {posts.map((post) => (
          <div className='topic-item'>
            <div key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </Link>
            </div>
          </div>
        ))}
      
    </div>
  );
}