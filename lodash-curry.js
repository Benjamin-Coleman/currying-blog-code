var _ = require('lodash');

let players = [
	{ name: 'Lebron James', occupation: 'NBA Player', team: 'Cavs', stats: 'Not that many'},
	{ name: 'Klay Thompson', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'}
	{ name: 'Stephen Curry', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'}
]

let playerTeam = _.curry((team, obj) => obj.team === team)

let warriors = players.filter(playerTeam('Warriors')) 

console.log(warriors)

/* logs
	{ name: 'Klay Thompson', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'}
	{ name: 'Stephen Curry', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'}
*/