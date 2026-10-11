import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import MarkdownRedefined from './markdownRedefined';
import { GitHubRawBaseUrl } from '../../data/aboutme';

export function MarkdownLoader({ p_url }: {p_url: string}) {
  const [c_is_loading, useSetIsLoading] = useState(true);
  const [c_content, useSetContent] = useState<string>('');
  
  useEffect(() => {
    if (!p_url) return;
    
    fetch(p_url)
      .then((l_res) => {
        if (!l_res.ok) throw new Error("Artikel nicht gefunden");
        return l_res.text();
      })
      .then((t_text) => useSetContent(t_text))
      .catch((t_err) => {
        useSetContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${t_err.message}`)
        console.log(`MarkdownLoader cannot fetch: ${p_url} -> ${t_err.message}`);
      })
      .finally(() => useSetIsLoading(false));

  }, [p_url]);

  if (c_is_loading) {
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
      <MarkdownRedefined>{c_content}</MarkdownRedefined>
  );
}

export function MarkdownGetJsonIndex({ p_short_url }: { p_short_url: string }) {
  const [c_posts, setPosts] = useState<any[]>([]);
    
  useEffect(() => {
    fetch(`${GitHubRawBaseUrl}${p_short_url}`)
      .then((t_res) => t_res.json())
      .then((t_data) => setPosts(t_data))
      .catch((t_err) => console.error(t_err));
  }, [`${GitHubRawBaseUrl}${p_short_url}`]);

  return c_posts;

}