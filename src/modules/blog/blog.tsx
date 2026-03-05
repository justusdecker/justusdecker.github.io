// modules/blog/blog.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type BlogPostMetadata } from './blog.types';

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
      <ul className='blog-item'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}