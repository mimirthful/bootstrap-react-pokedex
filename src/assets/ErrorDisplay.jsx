export default function ErrorDisplay({errorText}){
 return <div className="alert alert-warning p-5 m-2">
    <p className="lead">Something went wrong</p>
    <p className="font-monospace border border-warning rounded p-2" >{errorText}</p>
    <p> Did you write the Pokemon's name or ID correctly?</p>
 </div>
}