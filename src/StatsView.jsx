import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'react-dropdown/style.css';
import columns from './columns';

const StatsView = (props) => {
	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          

          props.formatData(result.data);

          console.log(result.data)
          setGames(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.url])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <DataTable
        className="DataTable"
        title={props.title}
        columns={props.columnFormat}
        data={games}
        style={{'borderRadius': '5px'}}
      />
    );
  }
}

export default StatsView;





