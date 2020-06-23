import React from 'react';
import columns from './columns';
import StatsView from './StatsView'

function SeasonAverage() {
  const averagesURL = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=246';

  return ( 
    <React.Fragment>
      
      <div className="Dropdown-wrapper">
        <div className="Dropdown-title">
          Game Log
        </div>
      </div>
      <StatsView url={averagesURL} columnFormat={columns.average} formatData={formatAverages} title={"Season Averages"}/>

    </React.Fragment>
  )
}

export default SeasonAverage;

function formatAverages () {
  return;
}