import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import Footer from '../components/Footer';

import Home from './Home'
import Chart from './Chart'
import Form from './Form'
import Icon from './Icon'
import Table from './Table'
import Button from './Button'
import Typography from './Typography'

export default function Main() {
    let match = useRouteMatch();

    return (
        <div className="main-panel">
            <Switch>
                <Route path={`${match.url}/`} exact><Home /></Route>
                <Route path={`${match.url}/charts`} exact><Chart /></Route>
                <Route path={`${match.url}/forms`} exact><Form /></Route>
                <Route path={`${match.url}/icons`} exact><Icon /></Route>
                <Route path={`${match.url}/tables`} exact><Table /></Route>
                <Route path={`${match.url}/buttons`} exact><Button /></Route>
                <Route path={`${match.url}/typographies`} exact><Typography /></Route>
              </Switch>

              <Footer />
        </div>
    )
}
