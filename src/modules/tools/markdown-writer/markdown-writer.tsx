import { useEffect, useState } from 'react';
import MarkdownRedefined from '../../common/markdownRedefined';
import './markdown-writer.css'
export const LOREM_IPSUM_TEST_DOCUMENT = `# 🖋️ Lorem Ipsum Testdokument
Dieses Dokument dient dazu, alle Features deines **MD Data Writer** zu testen. Es enthält *kursiven*, **fetten** und ~~durchgestrichenen~~ Text sowie \`Inline-Code\`.

![Image](https://avatars.githubusercontent.com/u/200506279?v=4)

![Image Load Failed](https://avatars.githubusercontent.com)

[Ich bin ein Link](justusdecker.github.io)

<img src="https://avatars.githubusercontent.com/u/200506279?v=4" > <- html-embed funktioniert noch nicht!

---

## 💡 GitHub Alerts (GFM)
Hier testen wir, ob unsere mühsam erarbeiteten Alert-Boxen im dunklen Vorschau-Container sauber aussehen:

> [!NOTE]
> **Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

> [!IMPORTANT]
> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> [!WARNING]
> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> [!CAUTION]
> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

---

## 🧬 Mathematik & LaTeX
Hier testen wir, ob \`remark-math\` und \`rehype-katex\` die Formeln korrekt umwandeln.

**Inline-Mathe:** Die berühmte Formel von Einstein lautet $E = mc^2$.

**Display-Mathe (Block):**
$$
\\int_{a}^{b} x^2 \\,dx = \\frac{b^3 - a^3}{3}
$$

Und eine etwas komplexere Formel für die Normalverteilung:
$$
f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}
$$

---

## 📊 Tabellen & Listen (GFM)

| Feature | Status | Priorität |
| :--- | :---: | :---: |
| Markdown Rendering |  Aktiv | Hoch |
| LaTeX Formeln | 🧮 Aktiv | Hoch |
| GitHub Alerts | 🚀 Aktiv | Kritisch |
| Datei Speichern | ⏳ Ausstehend | Normal |

### To-Do Liste (Task Lists)
- [x] Editor-Layout mit CSS füllen
- [x] TypeScript-Fehler bei Alerts beheben
- [x] Keine "Hax" verwenden
- [ ] Toolbar-Buttons mit Logik verknüpfen
- [ ] Datei-Status im Header anzeigen

---

## 💻 Code-Blöcke
Hier ist ein kurzes TypeScript-Snippet, um das Syntax-Highlighting (falls du ein Plugin dafür nutzt) zu testen:

\`\`\`typescript
const cleanUp = (node: any, type: string) => {
  if (typeof node[1].props.children === 'string') {
    return node[1].props.children.replace(type, '').trimStart();
  }
  return 'ERROR';
};
\`\`\``;

export function MarkdownWriter() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const savedDraft = localStorage.getItem('md_writer_draft');
        if (savedDraft) {
        setContent(savedDraft);
        
        } else {
            setContent(LOREM_IPSUM_TEST_DOCUMENT)
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
                    <textarea id="editor" value={content} placeholder="Schreibe Markdown..." onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div id="preview-container">
                    <div id='preview' className='markdown-body'>
                        <MarkdownRedefined>{content}</MarkdownRedefined>
                    </div>
                </div>
            </main>
        </>
    )
}