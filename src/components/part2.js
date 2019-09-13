import React from 'react'
import {eltonEvents} from './events'
import {Dropdown} from 'react-bootstrap'

export class part2 extends React.Component {
    render(){
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
                            <Dropdown.Item  key = {city} href ={`/${city}`}>{city}</Dropdown.Item>
                        )})}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
