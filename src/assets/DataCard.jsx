export default function DataCard({header, body})
{
    return <div className="card bg-primary">
    <div className="card-header">
        <p className="text-light font-monospace">{header}</p>
    </div>
    <div className="card-body">
        <p className="text-light">{body} </p>
    </div>
    </div>
}