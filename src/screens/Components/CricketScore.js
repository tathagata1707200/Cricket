import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

const CricketScore = () => {
    
    let { id, type } = useParams()
    
    const [match, Setmatch] = useState([])

    const getapi = () => {
        fetch(`https://cricapi.com/api/cricketScore?apikey=1Hxx2jfqN6XEfuLKlZIAskrjblb2&unique_id=${id}`)
            .then(response => response.json())
            .then(data => Setmatch(data))
    }

    useEffect(() => {
       getapi() 
    }, [])

    console.log(match);

    return (
        <>
            {match.length === 0 ? <h1>LOADING</h1> : match && <>
                <div class="container">
                <div class="row">
                <div class="col-lg-3 mt-2">
                <div class="card" style={{width: '20rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">{match['team-1']} vs {match['team-2']}</h5>
                        {match.matchStarted ? <h6 class="card-subtitle mb-2">SCORE: {match.score} </h6>: null}
                        <h6 class="card-subtitle mb-2 text-muted">Match Type: {type}</h6>
                        <h6 class="card-title">STATUS: {match.matchStarted ? <b style={{ color: 'green' }}> STARTED </b> : <b style={{ color: 'red' }}>NOT STARTED</b>}</h6>
                        <p class="card-title">{match.description}</p>
                    </div>
                </div>
                </div>        
                </div>
            </div>
            </>}
        </>
     );
}
 
export default CricketScore;