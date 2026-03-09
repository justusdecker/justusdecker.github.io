import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
export function useMarkdownFetch(category: string, id: string | undefined) {
  const [content, setContent] = useState<string>('Lade Inhalte...');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true);
    const url = `https://raw.githubusercontent.com/justusdecker/webpage-data/main/${category}/${id}.md`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Eintrag nicht gefunden");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setIsLoading(false);
      })
      .catch((err) => {
        setContent(`# Fehler\nDer Eintrag konnte nicht geladen werden: ${err.message}`);
        setIsLoading(false);
      });
  }, [category, id]);
  return { content, isLoading };
}

export function SingleMarkdownLoader(attr : {url: string}) {
  const url = attr.url;
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
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
  }, [url]);

  return (
      <div className="topic "><ReactMarkdown>{content}</ReactMarkdown></div>
  );
}