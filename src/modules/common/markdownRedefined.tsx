import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './markdown-alerts.css';
import './markdown-body.css'
import { useRef } from "react";

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

const cleanUp = (node: any, type: string) => {
    if (typeof node[1].props.children === 'string') {
        return node[1].props.children.replace(`[!${type}]`, '').trimStart();
        }
    console.log('Something went wrong in the markdown cleanUp:', node);
    return 'Something went wrong in the markdown cleanUp!'
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
              <img src={props.src} alt={props.alt} style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
            </dialog>
          </>
        );
      }
          }}>{children}</ReactMarkdown>
      </div>
    )
}