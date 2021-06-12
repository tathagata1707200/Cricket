import React, { useState, useEffect } from 'react';

const MatchCalendar = () => {

    const [match, setpubDate] = useState([])

    const getapi = () => {
        fetch(`https://cricapi.com/api/matchCalendar?apikey=1Hxx2jfqN6XEfuLKlZIAskrjblb2`)
            .then(response => response.json())
            .then(data => setpubDate(data))
    }

    useEffect(() => {
       getapi() 
    }, [])

    console.log(match);

    return (
        <>

            {match.length === 0 ? <h1>LOADING</h1> :
                        
                        <div class="container">
                            <div class="row">
                                {match.data && match.data.slice(0, 50).map((data) => {
                                    return (
                                        <div class="col-lg-3 mt-2">
                                            <div class="card" style={{width: '17rem'}}>
                                                <div class="card-body">
                                                    <h5 class="card-title">{data.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Match Date: {data.date}</h6>
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
export default MatchCalendar ;