import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const RecentGames = () => {
	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [games, setGames] = useState([]);

  const columns = [
  {
    name: 'Points',
    selector: 'pts'
  },
  {
    name: 'Rebounds',
    selector: 'reb'
  },
  {
    name: 'Assists',
    selector: 'ast'
  },
  {
    name: 'Steals',
    selector: 'stl'
  },
  {
    name: 'Blocks',
    selector: 'blk'
  }
  ]


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    var startDate = getDateRange().startDate;
    var endDate = getDateRange().endDate;

    var recentGamesUrl = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=246&per_page=5&start_date=' + 
    startDate + '&end_date=' + endDate;

    fetch(recentGamesUrl)
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          setIsLoaded(true);
          setGames(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <DataTable
        title="Recent Games"
        columns={columns}
        data={games}
      />
    );
  }
}

function getDateRange() {
  var today = new Date();
  var yearAgo = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //getMonth returns mm from 0-11, so January is 0. Add 1 to format mm correctly
  var dd = String(today.getDate()).padStart(2, '0');
  var currentYear = today.getFullYear();
  var lastYear = currentYear - 1;

  today = currentYear + '-' + mm + '-' + dd;
  yearAgo = lastYear + '-' + mm + '-' + dd;

  return {
    startDate: yearAgo,
    endDate: today
  };
}

export default RecentGames;