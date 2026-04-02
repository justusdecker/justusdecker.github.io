import { Link } from "react-router-dom";
import './tools.css'
const tools = [
    {name: 'markdown-writer', title: 'Markdown Writer'}
]

export function ToolsMain() {
    return (
        <>
            
            <div className="tools-list">
                <h1>Tools</h1>
                
                {
                    tools?.map((obj) => (
                        <Link to={`/tools/${obj.name}`}>
                            <span>
                                {obj.title}
                            </span>
                        </Link>
                    ) )
                }
            </div>
        </>
    )

}