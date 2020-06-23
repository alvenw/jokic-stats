const style = {
  'font-size': '12pt'
}

const columns = {
  log: [
    {
      name: 'Date',
      selector: 'game.date',
      grow: 2,
      style: style
    },
    {
      name: 'Team',
      selector: 'opponent',
      grow: 2,
      style: style
    },
    {
      name: 'Score',
      selector: 'score',
      grow: 2,
      style: style
    },
    {
      name: 'Points',
      selector: 'pts',
      grow: 1,
      style: style
    },
    {
      name: 'Rebounds',
      selector: 'reb',
      grow: 1,
      style: style
    },
    {
      name: 'Assists',
      selector: 'ast',
      grow: 1,
      style: style
    },
    {
      name: 'Steals',
      selector: 'stl',
      grow: 1,
      style: style
    },
    {
      name: 'Blocks',
      selector: 'blk',
      grow: 1,
      style: style
    }
  ],
  average: [
    {
      name: 'Points',
      selector: 'pts',
      style: style
    },
    {
      name: 'Rebounds',
      selector: 'reb',
      style: style
    },
    {
      name: 'Assists',
      selector: 'ast',
      style: style
    },
    {
      name: 'Steals',
      selector: 'stl',
      style: style
    },
    {
      name: 'Blocks',
      selector: 'blk',
      style: style
    }
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
}

export default columns


