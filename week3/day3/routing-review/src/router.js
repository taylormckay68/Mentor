import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import TeamA from './components/TeamA';
import TeamB from './components/TeamB';





export default(
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/roster' render={() => {
            return (
                <Roster>
                    <h1>Test</h1>
                    <h2>Test2   </h2>
                    <Switch>
                        <Route path='/roster/teama' component={TeamA} />
                        <Route path='/roster/teamB' component={TeamB} />                        
                    </Switch>
                </Roster>
            )
        }}>
        </Route>
        <Route path='/schedule' component={Schedule}></Route>
    </Switch>
)