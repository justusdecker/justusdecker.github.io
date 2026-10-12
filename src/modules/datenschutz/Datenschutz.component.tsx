import MarkdownRedefined from "../common/markdownRedefined";
import { GetDatenschutzMarkdown } from "./Datenschutz.service";

export function Datenschutz() {
    const content = GetDatenschutzMarkdown()
    return (
        <section>
            <div className="tile-entry">
                <MarkdownRedefined>{content}</MarkdownRedefined>
            </div>
            
        </section>
    )
}