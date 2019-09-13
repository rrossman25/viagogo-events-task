import React from 'react'
import {eltonEvents} from './events'
import {Dropdown} from 'react-bootstrap'


export const part2 = () => {
    const citySet = new Set(eltonEvents.Items.map(event => event.VenueCity));
    const cityArr = [...citySet]
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Locations
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {cityArr.map(city => {
                    return (
                        <Dropdown.Item href="`event/${city}`">{city}</Dropdown.Item>
                    )})}
            </Dropdown.Menu>
        </Dropdown>
    )
}