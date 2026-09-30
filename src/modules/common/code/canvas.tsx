import '../styles/canvas.css';

export function Canvas({children}: {children: React.ReactNode}) {
    return (
        <div className="canvas card">
            {children}
        </div>
    )
}