import './canvas.css';

export function Canvas({children}: {children: string}) {
    return (
        <div className="canvas">
            {children}
        </div>
    )
}