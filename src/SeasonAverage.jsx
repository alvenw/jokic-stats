import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import columns from './columns';
import StatsView from './StatsView'

function SeasonAverage() {
  const [season, setSeason] = useState(columns.options[0]);
  const sets = (option) => {
    setSeason(option.label);
  }

  const averagesURL = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=246&season=' + season.slice(0,4);

  return ( 
    <React.Fragment>
      
      <div className="Dropdown-wrapper">
        <div className="Dropdown-title">
          Career Stats
        </div>
        <Dropdown options={columns.options} onChange={sets} placeholder="2019-2020" value={season} className="Dropdown-item"/>
      </div>
      <StatsView url={averagesURL} columnFormat={columns.average} formatData={formatAverages} title={season + " Season Averages"}/>
    </React.Fragment>
  )
}

export default SeasonAverage;

function formatAverages () {
  return;
}