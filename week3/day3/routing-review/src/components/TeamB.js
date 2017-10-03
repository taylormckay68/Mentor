import React from 'react';
import {getTeamB} from '../teamService';

export default function() {
    let players = getTeamB().map((player, i) => {
        return (
            <li key={i}>{player.first_name} {player.last_name} #{player.id}</li>
        )
    }) 
    return (
        <div>
            <h1>Team B:</h1>
            <ul className="list">
                {players}
            </ul>
        </div>
    )
}