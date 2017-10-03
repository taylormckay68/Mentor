import React from 'react';
import {getTeamA} from '../teamService';

export default function() {
    let players = getTeamA().map((player, i) => {
        return (
            <li key={i}>{player.first_name} {player.last_name} #{player.id}</li>
        )
    }) 
    return (
        <div>
            <h1>Team A:</h1>
            <ul className="list">
                {players}
            </ul>
        </div>
    )
}