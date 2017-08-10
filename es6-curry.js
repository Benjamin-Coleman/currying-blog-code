const athlete = 
	name => 
		occupation =>
			team =>
				stats =>
					name + ' is a ' +
					occupation + ' who plays for ' +
					team + ' who made ' +
					stats + ' 3 point shots last year'


const stephCurry = athlete('Steph Curry')('NBA player')('Golden State Warriors')(324)