import React from "react"

export default function Card(props){
    
    return (
        <main className="card">
        <img src={props.item.imageUrl} className="card--img"/>
        <div className="card--text">
        <span><img src="https://thumbs.dreamstime.com/b/gps-icon-vector-logo-design-map-pointer-pin-location-symbol-flat-style-navigation-icons-web-mobile-place-marker-travel-158027531.jpg" className="card--location--logo"/></span>
        <span className="card--location">{props.item.location}</span>
        <span><a href={props.item.googleMapsUrl} className="card--map">View on google maps</a></span>
        <div className="card--title"><h1><b>{props.item.title}</b></h1></div>
        <div className="card--date">
        <h5><b><span>{props.item.startDate}</span>-<span>{props.item.endDate}</span></b></h5>
        </div>
        <div className="card--description">{props.item.description}</div>
        </div>
        </main>
    )
}