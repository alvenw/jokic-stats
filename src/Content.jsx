import React from 'react';
import {Route, HashRouter, BrowserRouter} from 'react-router-dom';
import NavBar from './NavBar';
import GameLog from './GameLog';
import SeasonAverage from './SeasonAverage';
import LastGame from './LastGame';

const Content = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<div className="Content">
				<div className="Content-wrapper">
					<Route exact path="/" component={LastGame}/>
				  <Route path="/log" component={GameLog}/>
					<Route path="/averages" component={SeasonAverage}/>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Content;