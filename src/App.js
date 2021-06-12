import React from 'react'
import Header from './screens/Header/Header'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//Import Components
import NewMatches from './screens/Components/NewMatches' 
import CricketScore from './screens/Components/CricketScore';
import Oldmatches from './screens/Components/OldMatches';
import MatchCalendar from './screens/Components/MatchCalendar'
import PlayerStatistics from './screens/Components/PlayerStatistics'
import PlayerFinder from './screens/Components/PlayerFinder'

const App = () => {
  return(
    
    <BrowserRouter>
   
        <Header/>
        <div class = "jumbotron bg-light">
    <Switch>
      <Route exact path='/' component={NewMatches} />
      <Route path='/oldmatches' component={Oldmatches} />
      <Route path='/matchCalender' component={MatchCalendar} />
      <Route path='/playerstatistics/:id' component={PlayerStatistics} />
      <Route path='/cricketscore/:id/:type' component={CricketScore} />
      <Route path='/playerfinder' component={PlayerFinder} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
