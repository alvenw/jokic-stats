import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'react-dropdown/style.css';
import columns from './columns';

const StatsView = (props) => {
	const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(
        (result) => {
          setPending(false);
          props.formatData(result.data);
          setGames(result.data);
        },
        (error) => {
          setError(error);
        }
      )
  }, [props.url])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <DataTable
        className="DataTable"
        title={props.title}
        columns={props.columnFormat}
        data={games}
        progressPending={pending}
        defaultSortAsc={false}
        customStyles={customStyles}
        style={{'borderRadius': '5px'}}
      />
    );
  }
}

export default StatsView;

const customStyles = {
  headCells: {
    style: {
      fontSize: '11pt',
      fontWeight: '600'
    },
  },
}

