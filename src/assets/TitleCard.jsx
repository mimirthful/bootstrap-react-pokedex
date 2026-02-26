export default function TitleCard({dexNumber, name, genus})
{
    return  <div className="card bg-primary  p-2 h-100 ">
        <p className="card-subtitle text-light">{dexNumber}</p>
        <h3 className=" card-title text-capitalize text-light"> {name} </h3>
        <p className="font-monospace text-light">{genus}</p>
    </div>
}