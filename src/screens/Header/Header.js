import React from 'react'
import {Link } from "react-router-dom";


const Header = () => {
    return(
      <>
         <nav class="navbar navbar-expand-lg navbar-blue bg-light ">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to='/' >New Matches </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/OldMatches' >Old Matches</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/MatchCalender' >Match Calender </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/PlayerFinder' >Player Finder</Link>
                    </li>
            </ul>
        </div>
        </nav>
        
      </>
    );
  }
  export default Header;