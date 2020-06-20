import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function SeasonAverage() {
	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const column = [
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

	useEffect(() => {
  	var averagesUrl = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=246'

    fetch(averagesUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);

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
        title="Stats"
        columns={column}
        data={items}
      />
    );
  }
}

export default SeasonAverage;