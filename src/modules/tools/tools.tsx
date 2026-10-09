import { Link } from "react-router-dom";
import './tools.css'
const tools = [
    {name: 'markdown-writer', title: 'Markdown Writer'},
    {name: 'wit', title: 'Workout Interval Timer'}
]

export function Toolkit() {
    return (
        <div className="card">
            <div className="">
                <h1>Tools</h1>
                {
                    tools?.map((obj) => (
                        <div className='contact-card-div'>
                        <Link className="btn contact-card-div-a" to={`/tools/${obj.name}`}>
                            <span>
                                {obj.title}
                            </span>
                        </Link>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}