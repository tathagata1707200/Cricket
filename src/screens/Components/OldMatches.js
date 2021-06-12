import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const OldMatches = () => {
    const [match, Setmatch] = useState([])
    const getapi = () => {
        fetch('https://cricapi.com/api/cricket?apikey=1Hxx2jfqN6XEfuLKlZIAskrjblb2')
        .then(Response => Response.json())
        .then(data => Setmatch(data))
    }

    useEffect(() => {
        getapi()
    },[])

    return (
        <>
             
             {match.length === 0 ? <h1>LOADING</h1> : 
             <div class="container">
                <div class="row">
                    {match.data && match.data.map((data, index) => {
                        return (
                            <div class="col-lg-3 mt-2">
                                <div class="card" style={{ width: '17rem' }}>
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <h6 class="card-subtitle">{data.description}</h6>
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
 
export default OldMatches ;