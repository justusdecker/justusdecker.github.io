import { useEffect, useState } from 'react';
import './markdown-writer.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


export function MarkdownWriter() {
    const [content, setContent] = useState<string>('# Los gehts');

    useEffect(() => {
        const savedDraft = localStorage.getItem('md_writer_draft');
        if (savedDraft) {
        setContent(savedDraft);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('md_writer_draft', content);
    }, [content]);

    return (
        <>
            <div id='title'>
                <h1>MD Data Writer</h1>
                <strong>Markdown + GFM + LaTeX + Alerts</strong>
            </div>

            <main>
                <div id="editor-container">
                    <textarea id="editor" placeholder="Schreibe Markdown..." onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div id="preview-container">
                    <div id='preview' className='markdown-body'>
                        <ReactMarkdown
                              remarkPlugins={[remarkGfm, remarkMath]} 
                              rehypePlugins={[rehypeKatex]}
                              components={{
                                blockquote: ({ children, ...props }: any) => {
  // 1. Sichere Funktion, um NUR den reinen Text aus React-Nodes zu extrahieren
  const extractText = (node: any): string => {
    if (!node) return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node.props && node.props.children) return extractText(node.props.children);
    return '';
  };

  // 2. Den gesamten Textinhalt des Zitats holen
  const fullText = extractText(children);

  // 3. Prüfen, ob eines der Alert-Keywords enthalten ist
  let type = '';
  if (fullText.includes('[!NOTE]')) type = 'NOTE';
  else if (fullText.includes('[!IMPORTANT]')) type = 'IMPORTANT';
  else if (fullText.includes('[!WARNING]')) type = 'WARNING';
  else if (fullText.includes('[!CAUTION]')) type = 'CAUTION';
  
  const cleanUp = (node: any, type: string) => {
    if (typeof node[1].props.children === 'string') {
        return node[1].props.children.replace(`[!${type}]`, '').trimStart();
      }
    return 'ERROR'
  }

  // 4. Wenn ein Alert gefunden wurde, rendern wir dein CSS-Gerüst
  if (type) {
    return (
      <div className={`markdown-alert markdown-alert-${type.toLowerCase()}`}>
        <p className="alert-title">
          {type}
        </p>
        <p className="alert-content">
          {cleanUp(children, type)}
        </p>
      </div>
    );
  }

  // 5. Normales Zitat, wenn kein Keyword gefunden wurde
  return (
    <div {...props} className={`markdown-alert`}>
        {children}
    </div>
  );
}
    
                              }}>{content}</ReactMarkdown>
                    </div>
                </div>
            </main>
        </>
    )
}