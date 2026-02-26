export default function ImageCard({image})
{
    return <div className="col-sm-7 col-lg-12 col-xxl-7"> 
    <div className="card bg-secondary p-2 rounded-top">
        <img src={image} width="95%"/>
    </div>
</div>
}