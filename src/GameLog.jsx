import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import StatsView from './StatsView';
import columns from './columns';


const GameLog = () => {
  const [season, setSeason] = useState(columns.options[0]);
  const sets = (option) => {
    setSeason(option.label);
  }

  const gameLogURL = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=246&per_page=100&seasons[]=' + season.slice(0,4);

  return (
    <React.Fragment>
      
      <div className="Dropdown-wrapper">
        <div className="Dropdown-title">
          Game Log
        </div>
        <Dropdown options={columns.options} onChange={sets} placeholder="2019-2020" value={season} className="Dropdown-item"/>     
      </div>
      <StatsView url={gameLogURL} season={season} formatData={formatGameLog} columnFormat={columns.log} title={season}/>

    </React.Fragment>
  );
}

export default GameLog;



// const DropdownHeader = (props) => {
//   return (
//     <div className="Dropdown-wrapper">
//       <div className="Dropdown-title">
//         Game Log
//       </div>
//       <Dropdown options={options} onChange={thprops.setter} placeholder="2019-2020" className="Dropdown-item"/>     
//     </div>
//   )
// }

function formatGameLog (array) {
  sortDate(array);
  formatDate(array);
  formatResult(array);
}

function formatDate(array) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };

  array.map((array) => {
      array.game.date = array.game.date.slice(0,10);
      array.game.date = new Date(array.game.date).toLocaleDateString(undefined, options);
      return array;
    }
  )
}


function sortDate(array) {
  array.sort((a, b) => {
    return b.game.date > a.game.date;
  })
}

function formatResult(array) {
  array.map((array => {
    const game = array.game;
    const player = array.player;
    const teams = columns.teams;

    const isHomeTeam = player.team_id===game.home_team_id;

    const homeScore = game.home_team_score;
    const visitorScore = game.visitor_team_score;
    const result = ((homeScore > visitorScore && isHomeTeam) || ( visitorScore > homeScore && !isHomeTeam)) ? 'W' : 'L';

    const opponent = (array.player.team_id===array.game.home_team_id) ? teams[array.game.visitor_team_id-1] : "@" + teams[array.game.home_team_id-1];
    const score = array.game.home_team_score + "-" + array.game.visitor_team_score;
    
    array.opponent = opponent
    array.score = result + " " + score;

    return array;
  }))
}