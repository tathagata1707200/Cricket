import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const PlayerFinder = () => {

    const [name, SetName] = useState('')

    const [player, SetPlayer] = useState([])

    const [error, SetError] = useState('')

    const [status, SetStatus] = useState('JUST SEARCH A NAME')

    const getapi = () => {

        if (name.trim() === '') {
            SetError('FILL IN SOMETHING')
            SetStatus('LOADING')
        } else {
            SetStatus('LOADING')
            fetch(`https://cricapi.com/api/playerFinder?apikey=ByuHENxZfqfcXwhJXW4shVjCd5o1&name=${name}`)
            .then(response => response.json())
            .then(data => SetPlayer(data.data))
        }
    }

    return (
        <>
            <h1>Player Finder</h1>

            <div class="form-group">
            <label for="exampleInputEmail1">Enter Player Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Player Name" onChange={e => SetName(e.target.value)} />
                {name.length === 0 ? <h1 style={{ color: 'red' }}>{ error }</h1> : null}
                <br />
                <button type="submit" class="btn btn-primary" onClick={getapi}>Submit</button>
            </div>

            <br />
            
            {player.length === 0 ? <h1>{ status}</h1> :
                
                <div class="container">
                    <div class="row">
                        {player && player.map((data) => {
                            return (
                                <div class="col-lg-3 mt-2">
                                    <div class="card" style={{width: '17rem'}}>
                                        <div class="card-body">
                                            <h5 class="card-title">{data.fullName}</h5>
                                            <Link to={`/playerstatistics/${data.pid}`} class="card-link">SHOW DETAILS</Link>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
            }
        </>
     );
}
 
export default PlayerFinder;