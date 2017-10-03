import React from 'react';
import {Link} from 'react-router-dom'

export default function (props) {
    return (
        <div>
            <nav>
                <Link to='/roster/teama'>Team A</Link>
                <Link to='/roster/teamb'>Team B</Link>
            </nav>
            {props.children}
            <h1>Roster</h1>
        </div>
    )
}

