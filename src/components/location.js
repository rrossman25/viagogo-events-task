import React from 'react'
import {eltonEvents} from './events'

export const Location = props => {
    const location = props.match.params.location
    console.log(props)
    return (
        <div className = 'body'>
            <h1>{location}</h1>
            <div className="events">
                {eltonEvents.Items.map(event => {
                    if (event.VenueCity === location){
                        return (
                            <div key = {location} className = "event">
                                <h3>{event.Day} {event.Date}</h3>
                                <h4>{event.VenueName} {event.VenueCity} {event.VenueCountry}</h4>
                                <p>{event.VenueDescription}</p>
                                <h5>{event.time}</h5>
                                <p>{event.MinPrice}</p>
                                <a href = {event.EventUrl}>{event.LinkTitleText}</a>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}