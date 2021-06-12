import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

const PlayerStatistics = () => {

    let { id } = useParams()

    const [player, SetPlayer] = useState()

    const getapi = () => {
        fetch(`https://cricapi.com/api/playerStats?apikey=ByuHENxZfqfcXwhJXW4shVjCd5o1&pid=${id}`)
            .then(response => response.json())
            .then(data => SetPlayer(data))
    }

    useEffect(() => {
        getapi() 
    }, [])

    console.log(player);

    

    return (
        <>
            {player && <div class="card" style={{"width": "50rem"}}>
            <img class="card-img-top" src={player.imageURL} alt={player.fullName} />
            <div class="card-body">
                <h6 class="card-title"><b>NAME: </b>{player.fullName}</h6>
                <h6 class="card-title"><b>Age: </b>{player.currentAge }</h6>
                <h6 class="card-title"><b>Date Of Bitrh: </b>{player.born}</h6>
                <h6 class="card-title"><b>Country: </b>{player.country} </h6>
                <h6 class="card-title"><b>Profile: </b>{player.profile}</h6>
                <h6 class="card-title"><b>BATTING STYLE: </b> {player.battingStyle}</h6>
                <h6 class="card-title"><b>BOWLING STYLE: </b> {player.bowlingStyle}</h6>
                <h6 class="card-title"><b>PLAYER FOR MAJOR TEAMS</b></h6>
                <ol>
                {
                    player.majorTeams.split(',').map((data) => (
                        
                        <li>{data}</li>
                        
                    ))
                }
                </ol>
                
                
                <h6 class="card-title"><b>Playing Role: </b>{player.playingRole}</h6>
            </div>
            </div>
            }
        </>
     );
}
 
export default PlayerStatistics;