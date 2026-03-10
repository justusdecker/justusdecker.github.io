// modules/blog/blog.$id.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>(); // Holt :id aus der URL
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!id) return;
    
    // Wir bauen den Pfad dynamisch zusammen
    const url = `https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/${id}.md`;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
  }, [id]);

  return (
    <div className="topic">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}