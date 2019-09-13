import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {part1} from './components/part1'
import {part2} from './components/part2'
import {Location} from './components/location'


export const Routes = (props) => {
    return (
        <Switch>
            <Route path="/part1" component={part1} />
            <Route path="/part2" component={part2} />
            <Route
                path="/:location"
                component={Location}
            />
        </Switch>
    )
}