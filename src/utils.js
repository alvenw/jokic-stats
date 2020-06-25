import columns from './columns'

export function formatGameLog (array) {
  sortDate(array);
  formatScore(array);
}

export function formatLastGame (array) {
  formatGameLog(array);
  array.splice(1);
}

function sortDate(array) {
  array.sort((a, b) => {
    return b.game.date > a.game.date;
  })
}

function formatScore(array) {
  array.map((array => {
    const game = array.game;
    const player = array.player;
    const teams = columns.teams;

    const isHomeTeam = player.team_id===game.home_team_id;

    const homeScore = game.home_team_score;
    const visitorScore = game.visitor_team_score;
    const result = ((homeScore > visitorScore && isHomeTeam) || ( visitorScore > homeScore && !isHomeTeam)) ? 'W' : 'L';

    const opponent = (array.player.team_id===array.game.home_team_id) ? teams[array.game.visitor_team_id-1] : "@" + teams[array.game.home_team_id-1];
    const score = array.game.home_team_score + "-" + array.game.visitor_team_score;
    
    array.opponent = opponent
    array.score = result + " " + score;

    return array;
  }))
}