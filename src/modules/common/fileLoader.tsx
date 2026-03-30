import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
export function FileLoader({ url }: {url: string}) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<string>('');
    console.log(url);
  useEffect(() => {
    if (!url) return;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`))
      .finally(() => setIsLoading(false));

  }, [url]);

  if (isLoading) {
    return (
      <>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Lade Inhalte...</p>
        </div>
      </>
    );
  }
  return (
    <>
    {content}
    </>
  );
}
