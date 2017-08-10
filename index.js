import _ from 'lodash'


let players = [
	{ name: 'Lebron James', occupation: 'NBA Player', team: 'Cavs', stats: 'Not that many'},
	{ name: 'Klay Thompson', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'},
	{ name: 'Stephen Curry', occupation: 'NBA Player', team: 'Warriors', stats: 'So many'}
]

// const athlete = 
// 	name => 
// 		occupation =>
// 			team =>
// 				stats =>
// 					name + ' is a ' +
// 					occupation + ' who plays for ' +
// 					team + ' who made ' +
// 					stats + ' 3 point shots last year'


// const stephCurry = athlete('Steph Curry')('NBA player')('Golden State Warriors')(324)

let playerTeam = _.curry((team, obj) => obj.team === team)

let warriors = players.filter(playerTeam('Warriors')) 

console.log(warriors)