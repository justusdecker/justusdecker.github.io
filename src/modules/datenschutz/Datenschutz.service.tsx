import { useState } from "react";

export const c_datenschutz_markdown_url = 'https://raw.githubusercontent.com/justusdecker/webpage-data/main/datenschutz/datenschutz.md';

export const GetDatenschutzMarkdown = () => {
    const [content, setContent] = useState<string>('');
    fetch(c_datenschutz_markdown_url)
    .then(res => {return res.text();})
    .then((text) => setContent(text))
    .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`));
    return content
}