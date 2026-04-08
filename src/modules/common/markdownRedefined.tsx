import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './markdown-alerts.css';
import './markdown-body.css'
import React, { useRef, type ReactNode, type ReactElement } from 'react';

interface Props {
  children: string;
}

const extractText = (node: any): string => {
    if (!node) return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node.props && node.props.children) return extractText(node.props.children);
    return '';
};

const cleanUp = (children: ReactNode, type: string): ReactNode => {
  const target = `[!${type}]`;

  return React.Children.map(children, (child) => {
    // 1. String-Check
    if (typeof child === 'string') {
      return child.includes(target) ? child.replace(target, '').trimStart() : child;
    }

    // 2. React-Element-Check mit Type-Assertion
    if (React.isValidElement(child)) {
      const element = child as ReactElement<{ children?: ReactNode }>;

      if (element.props.children) {
        return React.cloneElement(element, {
          children: cleanUp(element.props.children, type),
        });
      }
    }

    return child;
  });
};

export default function MarkdownRedefined({ children }: Props) {
    return (
        <div className="markdown-body">
          <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]} 
          rehypePlugins={[rehypeKatex]}
          components={{
          blockquote: ({ children, ...props }: any) => {
            const dialogRef = useRef<HTMLDialogElement>(null);
            const fullText = extractText(children);
          
            let type = '';
            if (fullText.includes('[!NOTE]')) type = 'NOTE';
            else if (fullText.includes('[!IMPORTANT]')) type = 'IMPORTANT';
            else if (fullText.includes('[!WARNING]')) type = 'WARNING';
            else if (fullText.includes('[!CAUTION]')) type = 'CAUTION';
            
            // Render CSS on ALERT
            if (type) {
              return (
                <div className={`markdown-alert markdown-alert-${type.toLowerCase()}`}
                onClick={() => dialogRef.current?.showModal()} >
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
            
          },
          img: ({ node, ...props }: any) => {
        const dialogRef = useRef<HTMLDialogElement>(null);

        return (
          <>
            <img 
              {...props} 
              onClick={() => dialogRef.current?.showModal()} 
            />
            
            {/* Das native Popup-Fenster */}
            <dialog 
              ref={dialogRef} 
              onClick={() => dialogRef.current?.close()} // Schließt bei Klick auf den Hintergrund
             
            >
              <img src={props.src} alt={props.alt} />
            </dialog>
          </>
        );
      },
      pre: ({ children }) =>{
        return (<>
        <div className="code-head">
          <span>Code</span>
          <div className="code-nav">
            <span id='minimize'>_</span>
            <span id='maximize'>⛶</span>
            <span id='close'>✕</span>
          </div>
        </div>
        <pre>{children}</pre>
        </>)
      },
          }}>{children}</ReactMarkdown>
      </div>
    )
}