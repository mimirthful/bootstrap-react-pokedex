import DataCard from "./DataCard"
import ImageCard from "./ImageCard"
import TitleCard from "./TitleCard"
export default function DataContainer({data})
{
return <>
    <div className="container p-2"> {/* Grid container*/}

        <div className="row p-2">  
            <ImageCard image={data.sprite}/>
            <div className="col-sm-5 col-lg-12 col-xxl-5"> 
                <TitleCard 
                    dexNumber={`#${data.dexNumber}`}
                    name={data.name}
                    genus={data.genus}/>
            </div>
        </div>

        <div className="row p-2"> 
            <div className="col-sm"> 
                <DataCard header="Type" body={data.type}/>
            </div>
        </div>

        <div className="row p-2"> 
            <div className="col-sm"> 
                <DataCard header="Height" body={`${data.height} cm`}/>
            </div>

            <div className="col-sm"> 
                <DataCard header="Weight" body={`${data.weight} kg`}/>
            </div>
        </div>
    </div>
</>
}