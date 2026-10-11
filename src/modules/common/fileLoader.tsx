import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
export function FileLoader({ p_url }: {p_url: string}) {
  const [c_is_loading, useSetIsLoading] = useState(true);
  const [c_content, useSetContent] = useState<string>('');
    console.log(p_url);
  useEffect(() => {
    if (!p_url) return;
    
    fetch(p_url)
      .then((l_res) => {
        if (!l_res.ok) throw new Error("Artikel nicht gefunden");
        return l_res.text();
      })
      .then((text) => useSetContent(text))
      .catch((t_err) => useSetContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${t_err.message}`))
      .finally(() => useSetIsLoading(false));

  }, [p_url]);

  if (c_is_loading) {
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
    {c_content}
    </>
  );
}
