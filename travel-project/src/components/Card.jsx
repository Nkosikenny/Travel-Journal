import locationIcon from "../assets/location-icon.png"

export default function Card(props) {
    console.log("A prop object is supposed to be dislplayed in the next line:");
    console.log(props);
    return (
        <>
          <div className="card">
          <img src={props.item.imageUrl} alt="destination Image" width="125px" height="200px" />
          <div className="card__body">
            <img src={locationIcon} alt="location-icon" />
            <span className="location">{props.item.location}</span>
            <a href={props.item.googleMapsUrl} className="location__link">View on google maps</a>  
          <h1>{props.item.title}</h1>
          <span className="date__text">{props.item.startDate}-{props.item.endDate}</span>
          <p className="description">{props.item.description}</p>
          </div>
          </div>
        </>
     
    )
}