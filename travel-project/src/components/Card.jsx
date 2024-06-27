import locationIcon from "../assets/location-icon.png"

export default function Card(props) {
    console.log("A prop object is supposed to be dislplayed in the next line:");
    console.log(props);
    return (
        <>
          <img src={props.item.imageUrl} alt="" width="125px" height="168px" />
          <div className="card-body">
            <img src={locationIcon} alt="" />
            <span className="location">{props.item.location}</span>
            <a href={props.item.googleMapsUrl} className="location__link">View on google maps</a>  
          <h1>{props.item.title}</h1>
          <span className="date">{props.item.startDate}-{props.item.endDate}</span>
          <p className="description">{props.item.description}</p>
          </div>
        </>
     
    )
}