import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import StatsView from './StatsView';
import columns from './columns';
import {formatLastGame} from './utils';

const LastGame = () => {
	const [season, setSeason] = useState(columns.options[0]);
  const sets = (option) => {
    setSeason(option.label);
  }

  const gameLogURL = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=246&per_page=100&seasons[]=' + season.slice(0,4);

  return (
    <React.Fragment>
      <StatsView url={gameLogURL} season={season} formatData={formatLastGame} columnFormat={columns.log} title={"Last Game"}/>
      <Link to="./log">
        <button className="Button">
          See all
        </button>
      </Link>
    </React.Fragment>
  )
}

export default LastGame;

