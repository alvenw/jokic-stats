import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import StatsView from './StatsView';
import columns from './columns';

const LastGame = () => {
	const [season, setSeason] = useState(columns.options[0]);
  const sets = (option) => {
    setSeason(option.label);
  }

  const gameLogURL = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=246&per_page=100&seasons[]=' + season.slice(0,4);



  return (
    <React.Fragment>
    <StatsView url={gameLogURL} season={season} formatData={formatGameLog} columnFormat={columns.log} title={"Last Game"}/>
    <Link to="./log">
      <button>
        See all
      </button>
    </Link>
    </React.Fragment>
  )
}

export default LastGame;

function formatGameLog (array) {
  sortDate(array);
  formatDate(array);
  formatResult(array);
  array.splice(5);
}

function formatDate(array) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };

  array.map((array) => {
      array.game.date = array.game.date.slice(0,10);
      array.game.date = new Date(array.game.date).toLocaleDateString(undefined, options);
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
  }))
}