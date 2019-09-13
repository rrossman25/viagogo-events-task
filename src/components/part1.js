import React from 'react'
import {eltonEvents} from './events'

export const part1 = () => {
    return (
      <div className="body">
        <h1>Elton John Events</h1>
        <div className="events">
          {eltonEvents.Items.map(event => (
            <div className = "event">
                <h3>{event.Day} {event.Date}</h3>
                <h4>{event.VenueName} {event.VenueCity} {event.VenueCountry}</h4>
                <p>{event.VenueDescription}</p>
                <h5>{event.time}</h5>
                <p>{event.MinPrice}</p>
                <a href = {event.EventUrl}>{event.LinkTitleText}</a>
            </div>
          ))}
        </div>
      </div>
    )
}
