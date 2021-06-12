import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const NewMatches  = () => {
    const [match, Setmatch] = useState([])
    const getapi = () => {
        fetch('https://cricapi.com/api/matches?apikey=1Hxx2jfqN6XEfuLKlZIAskrjblb2')
        .then(Response => Response.json())
        .then(data => Setmatch(data))
    }

    useEffect(() => {
        getapi()
    },[])

    return (
        <>
            {match.length === 0 ? <h1>LOADING</h1> : <div class="container">
                <div class="row">
                    {match.matches && match.matches.slice(0, 50).map((data, index) => {
                        return (
                            <div class="col-lg-3 mt-2">
                                <div class="card" style={{width: '17rem'}}>
                                    <div class="card-body">
                                        <h5 class="card-title">{data['team-1']} vs {data['team-2']}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Match Type: {data.type}</h6>
                                        <h6 class="card-title">STATUS: {data.matchStarted ? <b style={{ color: 'green' }}> STARTED </b> : <b style={{ color: 'red' }}>NOT STARTED</b>}</h6>
                                        {/* TODO UNIQUE-ID */}
                                        <Link to={`/cricketscore/${data.unique_id}/${data.type}`} class="card-link">SHOW DETAILS</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
     );
}
 
export default NewMatches ;