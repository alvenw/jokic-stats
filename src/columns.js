const style = {
  'font-size': '11pt'
}

const columns = {
  log: [
    {
      name: 'Date',
      selector: 'game.date',
      width: '150px',
      style: style,
      sortable: true,
      sortFunction: (a, b) => {
        return b.game.date < a.game.date;
      },
      format: (data) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const time = new Date(data.game.date);
        data.game.date = data.game.date.slice(0,10);
        return new Intl.DateTimeFormat('en-US', options).format(time);
      }
    },
    {
      name: 'Team',
      selector: 'opponent',
      width: '80px',
      style: style
    },
    {
      name: 'Score',
      selector: 'score',
      width: '120px',
      style: style,
      conditionalCellStyles: 
      [
        {
          when: row => row.score.includes("W"),
          style: {
            backgroundColor: 'rgb(26, 171, 97)',
            color: 'white',
          },
        },
        {
          when: row => row.score.includes("L"),
          style: {
            backgroundColor: 'rgb(220, 40, 24)',
            color: 'white',
          },
        },
      ]
    },
    {
      name: 'PTS',
      selector: 'pts',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        color: '#202124',
        fontSize: '14px',
        fontWeight: '300',
        backgroundColor: 'rgba(215, 215, 215, 1)'
      },
    },
    {
      name: 'REB',
      selector: 'reb',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'AST',
      selector: 'ast',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'STL',
      selector: 'stl',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'BLK',
      selector: 'blk',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'FGM',
      selector: 'fgm',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FGA',
      selector: 'fga',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FG%',
      selector: 'fg_pct',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      format: (data) => {
        return Number.parseFloat(data.fg_pct).toPrecision(3);
      }
    },
    {
      name: '3PM',
      selector: 'fg3m',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: '3PA',
      selector: 'fg3a',
      width: '60px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: '3P%',
      selector: 'fg3_pct',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
      format: (data) => {
        return Number.parseFloat(data.fg3_pct).toPrecision(3);
      }
    },
  ],
  average: [
    {
      name: 'PTS',
      selector: 'pts',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        color: '#202124',
        fontSize: '14px',
        fontWeight: '300',
        backgroundColor: 'rgba(215, 215, 215, 1)'
      },
    },
    {
      name: 'REB',
      selector: 'reb',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'AST',
      selector: 'ast',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'STL',
      selector: 'stl',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'BLK',
      selector: 'blk',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: 'FGM',
      selector: 'fgm',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FGA',
      selector: 'fga',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FG%',
      selector: 'fg_pct',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      format: (data) => {
        return Number.parseFloat(data.fg_pct*100).toPrecision(3);
      }
    },
    {
      name: '3PM',
      selector: 'fg3m',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: '3PA',
      selector: 'fg3a',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
    },
    {
      name: '3P%',
      selector: 'fg3_pct',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      style: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
      },
      format: (data) => {
        return Number.parseFloat(data.fg3_pct*100).toPrecision(3);
      },
    },
    {
      name: 'FTM',
      selector: 'ftm',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FTA',
      selector: 'fta',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
    },
    {
      name: 'FT%',
      selector: 'ft_pct',
      width: '80px',
      style: style,
      right: true,
      sortable: true,
      format: (data) => {
        return Number.parseFloat(data.ft_pct*100).toPrecision(3);
      }
    },
  ],
  teams: ["ATL","BOS", "BKN","CHA", "CHI","CLE","DAL","DEN","DET","GSW", "HOU","IND","LAC","LAL","MEM",
          "MIA","MIL","MIN","NOP","NYK","OKC","ORL","PHI", "PHX","POR","SAC","SAS", "TOR", "UTA", "WAS"],
  options: [
    '2019-2020', 
    '2018-2019', 
    '2017-2018',
    '2016-2017',
    '2015-2016',
  ]
};


export default columns


