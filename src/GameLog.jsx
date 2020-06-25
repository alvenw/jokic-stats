import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import StatsView from './StatsView';
import columns from './columns';
import {formatGameLog} from './utils';


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
